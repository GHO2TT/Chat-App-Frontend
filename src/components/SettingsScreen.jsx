import { motion, AnimatePresence } from "framer-motion";
import { logout } from "../utils/auth";
import { useNavigate } from "react-router-dom";

const SettingsScreen = ({ isOpen, onClose, sidebarExpanded }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(navigate);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop to close menu when clicking outside */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-30 z-30"
            onClick={onClose}
          />

          {/* Settings Menu */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`fixed bottom-16 md:bottom-20 ${
              sidebarExpanded ? "left-24 md:left-30" : "left-4 md:left-6"
            } bg-[#2C2A33] rounded-xl shadow-2xl z-40 min-w-[160px] md:min-w-[180px] overflow-hidden border border-gray-700`}
          >
            <div className="p-1.5 md:p-2">
              <button
                type="button"
                className="w-full text-left text-white hover:bg-red-600 bg-red-500 p-2.5 md:p-3 rounded-lg transition-colors flex items-center gap-2 font-medium text-sm md:text-base"
                onClick={handleLogout}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="md:w-[20px] md:h-[20px]"
                >
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                  <polyline points="16 17 21 12 16 7" />
                  <line x1="21" y1="12" x2="9" y2="12" />
                </svg>
                Logout
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SettingsScreen;
