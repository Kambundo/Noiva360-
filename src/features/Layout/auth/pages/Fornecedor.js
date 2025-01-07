import React, { useState } from 'react';
import axios from 'axios';
import '../assets/css/fornecedor.css';
import { Link } from 'react-router-dom';

function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [userId, setUserId] = useState(null);
  const [userForm, setUserForm] = useState({
    nome: '',
    sobrenome: '',
    telefone: '',
    email: '',
    endereco: '',
    password: '',
    genero: '',
  });

  const [fornecedorForm, setFornecedorForm] = useState({
    companyName: '',
    category: '',
    location: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    logo: null,
    descricao: '',
    tipoDeServico: '',
    nif: '',
    GestorId: '',
  });

  const [errors, setErrors] = useState({});

  const validateUserForm = () => {
    const newErrors = {};
    if (!userForm.nome.trim()) newErrors.nome = 'Nome é obrigatório';
    if (!userForm.sobrenome.trim()) newErrors.sobrenome = 'Sobrenome é obrigatório';
    if (!userForm.telefone.trim()) newErrors.telefone = 'Telefone é obrigatório';
    if (!userForm.email.trim()) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(userForm.email)) {
      newErrors.email = 'E-mail inválido';
    }
    if (!userForm.password.trim()) {
      newErrors.password = 'Senha é obrigatória';
    } else if (userForm.password.length < 6) {
      newErrors.password = 'A senha deve ter no mínimo 6 caracteres';
    }
    if (!userForm.endereco.trim()) newErrors.endereco = 'Endereço é obrigatório';
    if (!userForm.genero.trim()) newErrors.genero = 'Gênero é obrigatório';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateFornecedorForm = () => {
    const newErrors = {};
    if (!fornecedorForm.companyName.trim()) newErrors.companyName = 'Nome da empresa é obrigatório';
    if (!fornecedorForm.category) newErrors.category = 'Selecione uma categoria';
    if (!fornecedorForm.location.trim()) newErrors.location = 'Localização é obrigatória';
    if (!fornecedorForm.phone.trim()) newErrors.phone = 'Telefone é obrigatório';
    if (!fornecedorForm.email.trim()) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(fornecedorForm.email)) {
      newErrors.email = 'E-mail inválido';
    }
    if (!fornecedorForm.password) {
      newErrors.password = 'Senha é obrigatória';
    } else if (fornecedorForm.password.length < 6) {
      newErrors.password = 'A senha deve ter no mínimo 6 caracteres';
    }
    if (fornecedorForm.password !== fornecedorForm.confirmPassword) {
      newErrors.confirmPassword = 'As senhas não correspondem';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleUserSubmit = async (e) => {
    e.preventDefault();
    if (validateUserForm()) {
      try {
        const response = await axios.post('/api/users', userForm);
        setUserId(response.data.id);
        setStep(2);
      } catch (error) {
        console.error('Erro ao enviar dados do usuário:', error);
      }
    }
  };

  const handleFornecedorSubmit = async (e) => {
    e.preventDefault();
    if (validateFornecedorForm()) {
      try {
        const fornecedorData = { ...fornecedorForm, GestorId: userId };
        const response = await axios.post('/api/fornecedores', fornecedorData);
        console.log('Fornecedor cadastrado com sucesso:', response.data);
      } catch (error) {
        console.error('Erro ao enviar dados do fornecedor:', error);
      }
    }
  };

  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setUserForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleFornecedorChange = (e) => {
    const { name, value } = e.target;
    setFornecedorForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="multi-step-form">
      {step === 1 && (
        <form onSubmit={handleUserSubmit}>
          <h2>Cadastro de Usuário</h2>
          <div className="form-group">
            <label>Nome</label>
            <input
              type="text"
              name="nome"
              value={userForm.nome}
              onChange={handleUserChange}
            />
            {errors.nome && <div className="error-message">{errors.nome}</div>}
          </div>
          <div className="form-group">
            <label>Sobrenome</label>
            <input
              type="text"
              name="sobrenome"
              value={userForm.sobrenome}
              onChange={handleUserChange}
            />
            {errors.sobrenome && <div className="error-message">{errors.sobrenome}</div>}
          </div>
          <div className="form-group">
            <label>Telefone</label>
            <input
              type="tel"
              name="telefone"
              value={userForm.telefone}
              onChange={handleUserChange}
            />
            {errors.telefone && <div className="error-message">{errors.telefone}</div>}
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={userForm.email}
              onChange={handleUserChange}
            />
            {errors.email && <div className="error-message">{errors.email}</div>}
          </div>
          <div className="form-group">
            <label>Endereço</label>
            <input
              type="text"
              name="endereco"
              value={userForm.endereco}
              onChange={handleUserChange}
            />
            {errors.endereco && <div className="error-message">{errors.endereco}</div>}
          </div>
          <div className="form-group">
            <label>Senha</label>
            <input
              type="password"
              name="password"
              value={userForm.password}
              onChange={handleUserChange}
            />
            {errors.password && <div className="error-message">{errors.password}</div>}
          </div>
          <div className="form-group">
            <label>Gênero</label>
            <input
              type="text"
              name="genero"
              value={userForm.genero}
              onChange={handleUserChange}
            />
            {errors.genero && <div className="error-message">{errors.genero}</div>}
          </div>
          <button type="submit">Próximo</button>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleFornecedorSubmit}>
          <h2>Cadastro de Fornecedor</h2>
          <div className="form-group">
            <label>Nome da Empresa</label>
            <input
              type="text"
              name="companyName"
              value={fornecedorForm.companyName}
              onChange={handleFornecedorChange}
            />
            {errors.companyName && <div className="error-message">{errors.companyName}</div>}
          </div>
          <div className="form-group">
            <label>Categoria</label>
            <input
              type="text"
              name="category"
              value={fornecedorForm.category}
              onChange={handleFornecedorChange}
            />
            {errors.category && <div className="error-message">{errors.category}</div>}
          </div>
          <div className="form-group">
            <label>Localização</label>
            <input
              type="text"
              name="location"
              value={fornecedorForm.location}
              onChange={handleFornecedorChange}
            />
            {errors.location && <div className="error-message">{errors.location}</div>}
          </div>
          <div className="form-group">
            <label>Telefone</label>
            <input
              type="tel"
              name="phone"
              value={fornecedorForm.phone}
              onChange={handleFornecedorChange}
            />
            {errors.phone && <div className="error-message">{errors.phone}</div>}
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={fornecedorForm.email}
              onChange={handleFornecedorChange}
            />
            {errors.email && <div className="error-message">{errors.email}</div>}
          </div>
          <div className="form-group">
            <label>Senha</label>
            <input
              type="password"
              name="password"
              value={fornecedorForm.password}
              onChange={handleFornecedorChange}
            />
            {errors.password && <div className="error-message">{errors.password}</div>}
          </div>
          <div className="form-group">
            <label>Confirme a Senha</label>
            <input
              type="password"
              name="confirmPassword"
              value={fornecedorForm.confirmPassword}
              onChange={handleFornecedorChange}
            />
            {errors.confirmPassword && <div className="error-message">{errors.confirmPassword}</div>}
          </div>
          <button type="submit">Cadastrar</button>
        </form>
      )}
    </div>
  );
}

export default MultiStepForm;
