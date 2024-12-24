import React, { useState } from 'react'
import '../assets/css/fornecedor.css';
import imagem from '../assets/img/noivos1.jpg'
import logo from '../assets/img/logoNoiva.svg'
import { Link } from 'react-router-dom';
function Fornecedor() {
    const [formData, setFormData] = useState({
      companyName: '',
      category: '',
      location: '',
      phone: '',
      email: '',
      password: '',
      confirmPassword: '',
      logo: null
    });
    
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [success, setSuccess] = useState(false);
    
    const categories = [
      'Fotografia',
      'Decoração',
      'Buffet',
      'Música',
      'Vestuário',
      'Transporte',
      'Assessoria',
      'Outros'
    ];
    
    const validateForm = () => {
      const newErrors = {};
      
      if (!formData.companyName.trim()) {
        newErrors.companyName = 'Nome da empresa é obrigatório';
      }
      
      if (!formData.category) {
        newErrors.category = 'Selecione uma categoria';
      }
      
      if (!formData.location.trim()) {
        newErrors.location = 'Localização é obrigatória';
      }
      
      if (!formData.phone.trim()) {
        newErrors.phone = 'Telefone é obrigatório';
      }
      
      if (!formData.email.trim()) {
        newErrors.email = 'E-mail é obrigatório';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'E-mail inválido';
      }
      
      if (!formData.password) {
        newErrors.password = 'Senha é obrigatória';
      } else if (formData.password.length < 6) {
        newErrors.password = 'A senha deve ter no mínimo 6 caracteres';
      }
      
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'As senhas não correspondem';
      }
      
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
    
    const handleSubmit = (e) => {
      e.preventDefault();
      
      if (validateForm()) {
        console.log('Form submitted:', formData);
        setSuccess(true);
        // Reset form after successful submission
        setFormData({
          companyName: '',
          category: '',
          location: '',
          phone: '',
          email: '',
          password: '',
          confirmPassword: '',
          logo: null
        });
      }
    };
    
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
      // Clear error when user starts typing
      if (errors[name]) {
        setErrors(prev => ({
          ...prev,
          [name]: ''
        }));
      }
    };
    
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      setFormData(prev => ({
        ...prev,
        logo: file
      }));
    };
    
    const handleReset = () => {
      setFormData({
        companyName: '',
        category: '',
        location: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: '',
        logo: null
      });
      setErrors({});
      setSuccess(false);
    };
  
    return (
      <div className="registration-container">
        <aside className="aside">
          <h1>Noiva360º</h1>
          <p>Bem-vindo ao Noiva360º: Conectando fornecedores e noivos para eventos perfeitos!</p>
          <p>Cadastre sua empresa e alcance mais clientes com facilidade.</p>
        </aside>
        
        <main className="form-container">
          <div className="form-card">
            {success && (
              <div className="success-message">
                Cadastro realizado com sucesso! Em breve entraremos em contato.
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Nome da Empresa</label>
                <input
                  type="text"
                  name="companyName"
                  className="form-control"
                  value={formData.companyName}
                  onChange={handleChange}
                />
                {errors.companyName && <div className="error-message">{errors.companyName}</div>}
              </div>
              
              <div className="form-group">
                <label>Categoria</label>
                <select
                  name="category"
                  className="form-control"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option value="">Selecione uma categoria</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
                {errors.category && <div className="error-message">{errors.category}</div>}
              </div>
              
              <div className="form-group">
                <label>Localização</label>
                <input
                  type="text"
                  name="location"
                  className="form-control"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Cidade/Estado"
                />
                {errors.location && <div className="error-message">{errors.location}</div>}
              </div>
              
              <div className="form-group">
                <label>Telefone</label>
                <input
                  type="tel"
                  name="phone"
                  className="form-control"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && <div className="error-message">{errors.phone}</div>}
              </div>
              
              <div className="form-group">
                <label>E-mail</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <div className="error-message">{errors.email}</div>}
              </div>
              
              <div className="form-group">
                <label>Senha</label>
                <div className="password-input-wrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className="form-control"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <i className={`fas fa-eye${showPassword ? '-slash' : ''}`}></i>
                  </button>
                </div>
                {errors.password && <div className="error-message">{errors.password}</div>}
              </div>
              
              <div className="form-group">
                <label>Confirmar Senha</label>
                <div className="password-input-wrapper">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    className="form-control"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    <i className={`fas fa-eye${showConfirmPassword ? '-slash' : ''}`}></i>
                  </button>
                </div>
                {errors.confirmPassword && <div className="error-message">{errors.confirmPassword}</div>}
              </div>
              
              <div className="form-group">
                <input
                  type="file"
                  id="logo"
                  name="logo"
                  className="file-upload"
                  onChange={handleFileChange}
                  accept="image/*"
                />
                <label htmlFor="logo" className="file-upload-label">
                  <i className="fas fa-cloud-upload-alt"></i> Upload Logo
                </label>
              </div>
              
              <div className="button-group">
                <button type="submit" className="btn btn-primary">
                  Cadastrar
                </button>
                <button type="button" className="btn btn-secondary" onClick={handleReset}>
                  Limpar
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    );
  }
export default Fornecedor