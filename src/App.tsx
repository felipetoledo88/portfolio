import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { AboutMe } from "./pages/AboutMe";
import { Experiences } from "./pages/Experiences";
import { Contact } from "./pages/Contact";


export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}