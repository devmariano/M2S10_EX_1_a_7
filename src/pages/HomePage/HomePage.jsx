import React, { useContext, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import Main from '../../components/Main/Main';
import Footer from '../../components/Footer/Footer';
import { BannerContext } from '../../contexts/BannerContext';

import './HomePage.css';

function HomePage() {
  const { titulo, setTitulo, subTitulo, setSubtitulo } = useContext(BannerContext);

  useEffect(() => {
    setTitulo("Os melhores cursos DEV");
    setSubtitulo("Seu futuro você escolhe");
  }, [setTitulo, setSubtitulo]);

  return (
    <>
      <Header />
      <Banner titulo={titulo} subTitulo={subTitulo} />
      <div className="home">PÁGINA HOME</div>
      <Footer />
    </>
  );
}

export default HomePage;