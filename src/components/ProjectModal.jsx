import { useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

const ProjectModal = ({ onClose, data }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          onClick={(e) => e.stopPropagation()}
          className="relative mx-4 max-h-[85vh] w-full max-w-220 overflow-y-auto rounded-4xl bg-main-yellow-100/80 px-4 py-10 backdrop-blur-lg md:px-8 md:py-12 lg:p-14 custom-scrollbar"
        >
          <button
            className="absolute top-5 right-8 cursor-pointer"
            onClick={onClose}
          >
            <i className="bi bi-x-lg"></i>
          </button>
          <div className="modal_body">
            <h3 className="text-2xl font-bold bg-white px-6 py-3 rounded-4xl mb-6">
              {data.title}
            </h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {data.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-main-yellow-500/30 text-green-600 text-sm px-3 py-1 rounded-full font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="h-52 w-fit rounded-xl overflow-hidden mx-auto mb-8">
              <img
                src={data.img}
                alt={data.title}
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>
            <div className="bg-white p-8 rounded-2xl">
              <h4 className="font-bold pb-1">專案簡介：</h4>
              <p className="text-slate-700 leading-7 whitespace-pre-wrap mb-4">
                {data.description}
              </p>
              <h4 className="font-bold py-3">主要負責：</h4>
              <p className="text-slate-700 leading-7 whitespace-pre-wrap mb-4">
                {data.myFeatures}
              </p>
            </div>
          </div>
          <div className="modal_footer">
            <div className="mt-6 flex">
              <a href={data.github} className="btn-primary block flex-1 me-4">
                <i className="bi bi-github me-1"></i>
                GitHub
              </a>
              <a href={data.web} className="btn-primary block flex-1">
                <i className="bi bi-globe me-1"></i>
                Web
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default ProjectModal;
