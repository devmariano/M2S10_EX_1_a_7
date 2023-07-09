import './NotFoundPage.css'

import React, { useContext, useEffect } from 'react';
import { BannerContext } from '../../contexts/BannerContext';
import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import Footer from '../../components/Footer/Footer'
import error from '../../assets/error404.jpg'

function NotFoundPage() {

  const { titulo, setTitulo, subTitulo, setSubtitulo } = useContext(BannerContext);

  useEffect(() => {
    setTitulo("Vixi não encontramos essa página");
    setSubtitulo("Opsssss!");
  }, [setTitulo, setSubtitulo]);

  return (
    <>
    <Header/>
    <Banner titulo={titulo} subTitulo={subTitulo} />
    <div className="not-found-container">
      <p className="not-found-text">Ops! Página não encontrada.</p>
      <img
        src={error}
        alt="404 Not Found"
        className="not-found-image"
      />
      <p className="not-found-suggestion">Que tal explorar outras páginas?</p>
    </div>
    <Footer/>
    </>
  )
}

export default NotFoundPage