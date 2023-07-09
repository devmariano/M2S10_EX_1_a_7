import React, { useState } from 'react';
import './FormContato.css';

function FormContato() {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    mensagem: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.nome && formData.telefone && formData.email && formData.mensagem) {
      if (formData.email.includes('@') && formData.email.includes('.com')) {
        console.log('Dados do formulário:', formData);
      } else {
        alert('Email inválido. Por favor, insira um email .com válido.');
      }
    } else {
      alert('Por favor, preencha todos os campos do formulário.');
    }
    //alert(formData.email);
  };

  return (

    <form className="container mt-5" onSubmit={handleSubmit}>
      <h3>Deixe o seu recado</h3>
      <div className="row mb-4">
        <div className="col">
          <label htmlFor="nome" className="form-label">Nome</label>
          <input type="text" name="nome" id="nome" className="form-control" placeholder="Digite seu nome..."
            value={formData.nome} onChange={handleInputChange} required />
        </div>
        <div className="col">
          <label htmlFor="telefone" className="form-label">Telefone</label>
          <input type="number" name="telefone" id="telefone" className="form-control" placeholder="Digite seu telefone..."
            value={formData.telefone} onChange={handleInputChange} required />
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="form-label">E-mail</label>
        <input type="email" name="email" id="email" className="form-control" placeholder="Digite seu email..."
          value={formData.email} onChange={handleInputChange} required />
      </div>
      <div className="mb-4">
        <label htmlFor="mensagem" className="form-label">Mensagem</label>
        <textarea name="mensagem" id="mensagem" className="form-control" placeholder="Digite sua mensagem..."
          value={formData.mensagem} onChange={handleInputChange} maxLength={500} required></textarea>
        <p className="character-count">{formData.mensagem.length} de 500 caracteres</p>
      </div>
      <div className="d-flex flex-column mb-3">
        <button type="submit" className="btn btn-warning align-self-end" disabled={!formData.nome || !formData.telefone || !formData.email || !formData.mensagem}>
          Enviar
        </button>
      </div>
    </form>
  );
}

export default FormContato;

