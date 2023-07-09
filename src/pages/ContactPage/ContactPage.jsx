import './ContactPage.css'

import React, { useContext, useEffect } from 'react';
import { BannerContext } from '../../contexts/BannerContext';
import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import Footer from '../../components/Footer/Footer'
import FormContato from '../../components/FormContato/FormContato'
import CardContato from '../../components/CardContato/CardContato'


function ContactPage() {

    const { titulo, setTitulo, subTitulo, setSubtitulo } = useContext(BannerContext);

    useEffect(() => {
      setTitulo("Entre em contato conosco");
      setSubtitulo("Contato");
    }, [setTitulo, setSubtitulo]);

  return (
    <>
    <Header/>
    <Banner titulo={titulo} subTitulo={subTitulo} />
    <FormContato/>
    <CardContato/>
    <Footer/>
    </>
  )
}

export default ContactPage