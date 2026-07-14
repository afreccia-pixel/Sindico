import { useState, MouseEvent } from "react";
import { X, ZoomIn, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { GALLERY, GalleryItem } from "../data";

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'assembleia' | 'reuniao' | 'manutencao' | 'condominio'>('all');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const categories = [
    { label: "Ver Tudo", id: "all" },
    { label: "Assembleias", id: "assembleia" },
    { label: "Reuniões de Conselho", id: "reuniao" },
    { label: "Visitas Técnicas & Inspeções", id: "manutencao" },
    { label: "Condomínios Coordenados", id: "condominio" },
  ];

  const filteredGallery = GALLERY.filter((item) => {
    if (activeFilter === "all") return true;
    return item.category === activeFilter;
  });

  const handlePrevImage = (e: MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex === null) return;
    const currentItem = filteredGallery[selectedImageIndex];
    const originalIndexInMainGallery = GALLERY.findIndex(x => x.id === currentItem.id);
    const prevItemIndexInFiltered = filteredGallery.findIndex((x, idx) => idx === selectedImageIndex - 1);
    
    if (prevItemIndexInFiltered !== -1) {
      setSelectedImageIndex(selectedImageIndex - 1);
    } else {
      setSelectedImageIndex(filteredGallery.length - 1);
    }
  };

  const handleNextImage = (e: MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex === null) return;
    const currentItem = filteredGallery[selectedImageIndex];
    const originalIndexInMainGallery = GALLERY.findIndex(x => x.id === currentItem.id);
    const nextItemIndexInFiltered = filteredGallery.findIndex((x, idx) => idx === selectedImageIndex + 1);

    if (nextItemIndexInFiltered !== -1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    } else {
      setSelectedImageIndex(0);
    }
  };

  return (
    <section id="galeria" className="py-24 bg-navy-950 relative overflow-hidden">
      {/* Background ambient orb */}
      <div className="absolute right-1/4 bottom-1/4 w-[400px] h-[400px] bg-navy-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono font-bold text-navy-400 uppercase tracking-widest block">
            Acompanhamento em Campo
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Galeria de Atividades e Vistorias
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Registros reais que atestam nossa presença direta nos condomínios administrados, conduzindo reuniões de conselho, assembleias e vistorias de obras estruturais.
          </p>
        </div>

        {/* Filter Tab bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" id="gallery-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveFilter(cat.id as any);
                setSelectedImageIndex(null); // Reset lightbox on filter change
              }}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border cursor-pointer ${
                activeFilter === cat.id
                  ? "bg-white text-navy-950 border-white shadow-xl"
                  : "glass-dark text-slate-300 border-white/10 hover:text-white hover:bg-white/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Photos Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          id="gallery-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredGallery.map((item, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                onClick={() => setSelectedImageIndex(idx)}
                className="glass-card p-2.5 rounded-2xl cursor-pointer group hover:bg-white/5 hover:border-white/20 hover:shadow-2xl hover:shadow-navy-950/50 transition-all duration-300 relative overflow-hidden"
              >
                {/* Visual Image container */}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-navy-950">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  {/* Dark hover mask with icon */}
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="bg-white p-3 rounded-xl text-navy-950 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg border border-white">
                      <Eye className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Captions */}
                <div className="p-3 space-y-1">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-navy-400 font-mono">
                    {item.category === "assembleia" && "Assembleia"}
                    {item.category === "reuniao" && "Reunião"}
                    {item.category === "manutencao" && "Inspeção Técnica"}
                    {item.category === "condominio" && "Condomínio Administrado"}
                  </span>
                  <h3 className="text-sm font-bold text-white group-hover:text-navy-300 transition-all duration-300">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-slate-400 line-clamp-1">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* LIGHTBOX MODAL */}
        <AnimatePresence>
          {selectedImageIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImageIndex(null)}
              className="fixed inset-0 bg-navy-950/95 backdrop-blur-md z-50 flex flex-col justify-between p-4 sm:p-6"
              id="gallery-lightbox"
            >
              {/* Top controls */}
              <div className="w-full max-w-6xl mx-auto flex items-center justify-between py-2 border-b border-white/10">
                <span className="text-xs text-slate-400 font-mono">
                  Visualizando {selectedImageIndex + 1} de {filteredGallery.length}
                </span>
                <button
                  onClick={() => setSelectedImageIndex(null)}
                  className="p-2 rounded-lg glass-light text-slate-300 hover:text-white transition-all cursor-pointer border border-white/5"
                  aria-label="Fechar galeria"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Main lightbox content */}
              <div className="relative flex-1 max-w-5xl mx-auto w-full flex items-center justify-center">
                
                {/* Arrow left */}
                <button
                  onClick={handlePrevImage}
                  className="absolute left-0 sm:-left-4 p-3 rounded-full glass-light border border-white/5 text-slate-300 hover:text-white z-10 transition-all cursor-pointer"
                  aria-label="Imagem anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Selected Active Image with bounce slide */}
                <motion.div
                  key={selectedImageIndex}
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="max-h-[70vh] aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={filteredGallery[selectedImageIndex].imageUrl}
                    alt={filteredGallery[selectedImageIndex].title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>

                {/* Arrow right */}
                <button
                  onClick={handleNextImage}
                  className="absolute right-0 sm:-right-4 p-3 rounded-full glass-light border border-white/5 text-slate-300 hover:text-white z-10 transition-all cursor-pointer"
                  aria-label="Próxima imagem"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

              </div>

              {/* Bottom Captions */}
              <div className="w-full max-w-3xl mx-auto text-center space-y-2 pb-6">
                <span className="inline-block text-[10px] font-bold font-mono text-navy-950 uppercase px-2.5 py-0.5 bg-white border border-white rounded-full shadow-md">
                  {filteredGallery[selectedImageIndex].category === "assembleia" && "Assembleia Ordinária"}
                  {filteredGallery[selectedImageIndex].category === "reuniao" && "Reunião de Alinhamento"}
                  {filteredGallery[selectedImageIndex].category === "manutencao" && "Acompanhamento Técnico"}
                  {filteredGallery[selectedImageIndex].category === "condominio" && "Edifício Administrado"}
                </span>
                <h3 className="text-lg font-bold text-white">
                  {filteredGallery[selectedImageIndex].title}
                </h3>
                <p className="text-xs text-slate-300 max-w-xl mx-auto leading-relaxed">
                  {filteredGallery[selectedImageIndex].description}
                </p>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
