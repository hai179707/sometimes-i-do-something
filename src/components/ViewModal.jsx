import { AnimatePresence, motion } from "framer-motion";
import PropTypes from "prop-types";
import { RiArrowRightLine, RiCloseFill, RiGitBranchLine } from "react-icons/ri";

function ViewModal({ isOpen, onClose, data }) {
  const { img, title, tags, demoUrl, sourceUrl } = data;
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, duration: 0.3 }}
          exit={{ opacity: 0, duration: 0.3 }}
          className="fixed inset-0 z-10 bg-overlay flex justify-center items-center"
          onClick={onClose}
        >
          <div
            className="w-[800px] mx-3 bg-white rounded-xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={img.src} alt={img.alt} className="rounded-xl" />
            <div className="p-5">
              <h3 className="font-bold">{title}</h3>
              <p className="text-sm text-gray-500 pb-3">{tags.join(", ")}</p>
              <div className="text-sm flex justify-between">
                <a href={demoUrl} target="blank">
                  <div className="flex items-center gap-1 group/btn">
                    View Demo{" "}
                    <RiArrowRightLine className="group-hover/btn:rotate-[360deg] transition-transform duration-500" />
                  </div>
                </a>
                <a href={sourceUrl} target="blank">
                  <div className="flex items-center gap-1 group/btn">
                    View Source{" "}
                    <RiGitBranchLine className="group-hover/btn:rotate-[360deg] transition-transform duration-500" />
                  </div>
                </a>
              </div>
            </div>
            <div
              onClick={onClose}
              className="p-1 absolute top-2 right-2 text-xl cursor-pointer text-gray-500 border border-gray-500 rounded-full"
            >
              <RiCloseFill />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

ViewModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  data: PropTypes.object,
};

export default ViewModal;
