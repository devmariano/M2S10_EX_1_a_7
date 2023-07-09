import React, { createContext, useState } from "react";

export const BannerContext = createContext();

export const BannerProvider = ({ children }) => {
  const [titulo, setTitulo] = useState("");
  const [subTitulo, setSubtitulo] = useState("");

  const bannerContextValue = {
    titulo,
    setTitulo,
    subTitulo,
    setSubtitulo,
  };

  return (
    <BannerContext.Provider value={bannerContextValue}>
      {children}
    </BannerContext.Provider>
  );
};