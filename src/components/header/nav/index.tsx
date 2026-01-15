import { motion } from "framer-motion";
import styles from "./style.module.scss";
import { height } from "../anim";
import Footer from "./footer/footer";

import { cn } from "@/lib/utils";

interface IndexProps {
  setIsActive: (isActive: boolean) => void;
}

const Index: React.FC<IndexProps> = ({ setIsActive }) => {
  return (
    <motion.div
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.nav}
    >
      <div className={cn(styles.wrapper, 'flex justify-end sm:justify-start')}>
        <div className={styles.container}>
          <Footer />
        </div>
      </div>
    </motion.div>
  );
};

export default Index;
