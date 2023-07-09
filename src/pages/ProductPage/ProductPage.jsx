import './ProductPage.css'

import React, { useContext, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import Main from '../../components/Main/Main';
import Footer from '../../components/Footer/Footer';
import { BannerContext } from '../../contexts/BannerContext';
function ProductPage() {

  const { titulo, setTitulo, subTitulo, setSubtitulo } = useContext(BannerContext);

  useEffect(() => {
    setTitulo("Escolha o melhor para você");
    setSubtitulo("nossos produtos");
  }, [setTitulo, setSubtitulo]);

  return (
    <>
      <Header />
      <Banner titulo={titulo} subTitulo={subTitulo} />
      <Main />
      <Footer />
    </>
  );
}


export default ProductPage