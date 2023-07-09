import './FaqPage.css'

import React, { useContext, useEffect } from 'react';
import { BannerContext } from '../../contexts/BannerContext';
import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import Footer from '../../components/Footer/Footer'
import FaqBusca from '../../components/FaqBusca/FaqBusca';
import FaqPerguntas from '../../components/FaqPerguntas/FaqPerguntas';

function FaqPage() {

  const { titulo, setTitulo, subTitulo, setSubtitulo } = useContext(BannerContext);

  useEffect(() => {
    setTitulo("Dúvidas frequentes");
    setSubtitulo("Perguntas frequentes");
  }, [setTitulo, setSubtitulo]);

  return (
    <>
    <Header/>
    <Banner titulo={titulo} subTitulo={subTitulo} />
    <FaqBusca/>
    <FaqPerguntas/>
    <Footer/>
    </>
  )
}

export default FaqPage