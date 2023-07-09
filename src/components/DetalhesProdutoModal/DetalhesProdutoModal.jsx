import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';
import icon from '../../assets/icon.png';
import {
  ProductImage,
  CaracteristicasList,
  CardButton, 
  ListItens, 
  ImgItem
} from './DetalhesProdutoModalStyle';


function DetalhesProdutoModal(props) {
  const { foto, preço, nome, descricao, caracteristicas } = props;
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <CardButton type="button" className="btn-card" onClick={handleShow}>
        MAIS SOBRE
      </CardButton>

      <Modal show={showModal} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton={false}>
          <Modal.Title>Detalhe do Produto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <ProductImage src={foto}></ProductImage>
          </div>
          <div className="row">
            <div className='mt-4 col-10'>
              <h4 className="text-right">{nome}</h4>
            </div>
            <div className='mt-4 col-2'>
              <h5 className="text-end">{preço}</h5>
            </div>
          </div>
          <h5 className="mt-4">Descrição:</h5>
          <p>{descricao}</p>
          <h5>Características:</h5>
          <CaracteristicasList>
            {caracteristicas.map((item, index) => (
              <ListItens key={index}><ImgItem src={icon}/>{item}</ListItens>
            ))}</CaracteristicasList>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary">Comprar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

DetalhesProdutoModal.propTypes = {
  foto: PropTypes.string,
  preço: PropTypes.string,
  nome: PropTypes.string,
  descricao: PropTypes.string,
  caracteristicas: PropTypes.array,
};

export default DetalhesProdutoModal;