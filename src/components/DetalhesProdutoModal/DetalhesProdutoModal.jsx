import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';
import './DetalhesProdutoModal.css';


function DetalhesProdutoModal(props) {
  const { foto, preço, nome, descricao, caracteristicas } = props;
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <button type="button" className="btn-card" onClick={handleShow}>
        MAIS SOBRE
      </button>

      <Modal show={showModal} onHide={handleClose} centered size="lg">
          <Modal.Header closeButton={false}>
          <Modal.Title>Detalhe do Produto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <img src={foto} className='product-image' alt="Capa do curso" />
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
          <div className='lista'>
            {caracteristicas.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
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