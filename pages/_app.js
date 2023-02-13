import "@/styles/globals.css";
import { motion, AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps, router }) {
  const spring = {
    type: "spring",
    damping: 20,
    stiffness:100,
    when: "afterChildren",
    mass: 1
  };

  return (
    <AnimatePresence>
      <div className="page-transition-wrapper">
        <motion.div
          transition={spring}
          key={router.pathname}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          id="page-transition-container"
        >
          <Component {...pageProps} key={router.pathname} />
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
