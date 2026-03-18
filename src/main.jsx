import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyle from "./Global";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import CardsSection from "./Card/Card";
import Contato from "./Contato/Contato";
import Oquenarcisimo from "./Pautas/Oquenarcisismo";
import Tipos from "./Pautas/Tipos"
import Identificar from "./Pautas/Identificar";
import Ciclo from "./Pautas/Ciclo";
import Efeito from "./Pautas/Efeito";
import Recuperar from "./Pautas/Recuperar";
import Top from './ScrollToTop'

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <CardsSection />
      <Contato />
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <Top />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/o-que-e-narcisismo" element={<Oquenarcisimo />} />
        <Route path="/tipos-de-narcisista" element={<Tipos />} />
        <Route path="/como-identificar" element={<Identificar />} />
        <Route path="/ciclo" element={<Ciclo />} />
       <Route path="/efeitos" element={<Efeito />} />
        <Route path="/recuperar" element={<Recuperar />} />
        
        
      </Routes>

    </BrowserRouter>
  </StrictMode>
);