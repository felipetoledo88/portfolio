import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Felipe Toledo
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/felipe-toledo-25502a1a1/" target="_blank">
            <img src="/linkedin.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/felipe-toledo-25502a1a1/" target="_blank">
            <img src="/linkedin.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;