import React, { useState, useEffect } from 'react';
import "../assets/css/userFormSteps.css"
import api from '../../../../_config/Index';

const UserForm = () => {
  const [categorias, setCategorias] = useState([])
  
  useEffect(() => {
    api.get("categorias").then((categorias) => {
        var response = categorias.data
        // dados.push(salas.data)
        console.log(response, "meus dados")
        setCategorias(response)
    })
}, [])
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
      name: '',
      sobrenome: '',
      tipoDeServico:'',
      email: '',
      phone: '',
      address: '',
      country: '',
      occupation: '',
      company: '',
      nomeEmpresa:'',
      experience: '',
      password: '',
      genero: '',  // Novo campo gênero
      tipoPerfil: 'Fornecedor', // Novo campo tipoPerfil'
    });
    const [errors, setErrors] = useState({});
    const [touchedFields, setTouchedFields] = useState({});
    const [isStepValid, setIsStepValid] = useState(false);
    const validateField = (name, value) => {
      value = value || ""; // Garantir que o valor seja uma string vazia se estiver undefined
    
      if (value.trim() === '') {
        return `O campo ${name} é obrigatório`;
      }
    
      switch (name) {
        case 'name':
          return value.length < 3 ? 'Nome deve ter pelo menos 3 caracteres' : '';
          case 'nomeEmpresa':
            return value.length < 3 ? 'Nome deve ter pelo menos 3 caracteres' : '';
        case 'sobrenome':
          return value.length < 3 ? 'O sobrenome deve ter pelo menos 3 caracteres' : '';
        case 'email':
          return !/\S+@\S+\.\S+/.test(value) ? 'Email inválido' : '';
        case 'phone':
          return !/^\d{9}$/.test(value) ? 'Telefone deve ter exatamente 9 dígitos' : '';
        case 'address':
          return value.length < 5 ? 'Endereço deve ter pelo menos 5 caracteres' : '';
        case 'country':
          return value.length < 2 ? 'País deve ter pelo menos 2 caracteres' : '';
        case 'occupation':
          return value.length < 2 ? 'Profissão deve ter pelo menos 2 caracteres' : '';
        case 'company':
          return value.length < 2 ? 'Empresa deve ter pelo menos 2 caracteres' : '';
        case 'experience':
          return value < 0 ? 'Anos de experiência deve ser positivo' : '';
        case 'password':
          return value.length < 8 ? 'Senha deve ter pelo menos 8 caracteres' : '';
        case 'genero':
          return value.trim() === '' ? 'Gênero é obrigatório' : '';
        case 'tipoDeServico':  // Corrigido aqui, removendo duplicação
          return value.trim() === '' ? 'Tipo de serviço é obrigatório' : '';  
        default:
          return '';
      }
    };
    
    const handleInputChange = e => {
      const { name, value } = e.target;
      const newValue = value || "";  // Garantir que o valor não seja undefined
    
      setFormData(prev => ({
        ...prev,
        [name]: newValue
      }));
    
      const error = validateField(name, newValue);
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    
      const fieldsToCheck = {
        1: ['name', 'sobrenome', 'email', 'phone', 'password', 'genero'],
        2: ['nomeEmpresa', 'tipoDeServico'],
        3: ['occupation', 'company', 'experience']
      }[currentStep];
    
      const isValid = fieldsToCheck.every(field => {
        const fieldValue = field === name ? newValue : formData[field];
        return !validateField(field, fieldValue) && fieldValue.trim() !== '';
      });
      setIsStepValid(isValid);
    };
    
    const handleBlur = e => {
      const {
        name
      } = e.target;
      setTouchedFields(prev => ({
        ...prev,
        [name]: true
      }));
      const error = validateField(name, formData[name]);
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    };
    const validateStep = () => {
      const fieldsToValidate = {
        1: ['name', 'sobrenome', 'email', 'phone', 'password', 'genero'],
        2: ['nomeEmpresa', 'tipoDeServico'],
        3: ['occupation', 'company', 'experience']
      }[currentStep];
      const stepErrors = {};
      let isValid = true;
      fieldsToValidate.forEach(field => {
        const error = validateField(field, formData[field]);
        if (error) {
          stepErrors[field] = error;
          isValid = false;
        }
      });
      setErrors(stepErrors);
      setIsStepValid(isValid);
      return isValid;
    };
    
    const nextStep = () => {
      if (validateStep() && currentStep < 3) {
        // Reinicia as animações das etapas
        document.querySelectorAll('.step-f-s').forEach(step => {
          step.style.animation = 'none';
          void step.offsetHeight; // Força o reflow para reiniciar a animação
          step.style.animation = null;
        });
    
        setCurrentStep(prev => prev + 1);
        setIsStepValid(false);
      }
    };
    
    const prevStep = () => {
      if (currentStep > 1) {
        setCurrentStep(prev => prev - 1);
        const prevStepFields = {
          1: ['name','sobrenome', 'email', 'phone', 'password', 'genero'],
          2: ['nomeEmpresa', 'tipoDeServico'],
          3: ['occupation', 'company', 'experience']
        }[currentStep - 1];
        const isValid = prevStepFields.every(field => {
          return !validateField(field, formData[field]) && formData[field].trim() !== '';
        });
        setIsStepValid(isValid);
      }
    };
    const calculateProgress = () => {
      return (currentStep - 1) / 2 * 100 + '%';
    };
    const renderHeader = () => {
      if (currentStep === 2) {
        return <h3 className="welcome-header-f-s">
            Está quase lá, Sr. {formData.name.split(' ')[0]}, só mais um passo.
          </h3>;
      }
      return null;
    };
    const renderStep = () => {
      switch (currentStep) {
        case 1:
          return <div className="form-step-f-s">
              <div className='infor-ss'>Informações Pessoais</div>
              <div className="form-group-f-s">
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} onBlur={handleBlur} placeholder=" " className={errors.name && touchedFields.name ? 'error' : ''} />
                <label>Nome</label>
                {errors.name && touchedFields.name && <div className="error-message-f-s">{errors.name}</div>}
              </div>

              <div className="form-group-f-s">
                <input type="text" name="sobrenome" value={formData.sobrenome} onChange={handleInputChange} onBlur={handleBlur} placeholder=" " className={errors.sobrenome && touchedFields.sobrenome ? 'error' : ''} />
                <label>Sobreome</label>
                {errors.sobrenome && touchedFields.sobrenome && <div className="error-message-f-s">{errors.sobrenome}</div>}
              </div>

              <div className="form-group-f-s">
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} onBlur={handleBlur} placeholder=" " className={errors.email && touchedFields.email ? 'error' : ''} />
                <label>Email</label>
                {errors.email && touchedFields.email && <div className="error-message-f-s">{errors.email}</div>}
              </div>
              <div className="form-group-f-s">
                <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} onBlur={handleBlur} placeholder=" " className={errors.phone && touchedFields.phone ? 'error' : ''} />
                <label>Telefone</label>
                {errors.phone && touchedFields.phone && <div className="error-message-f-s">{errors.phone}</div>}
              </div>
                        {/* Novo campo senha */}
          <div className="form-group-f-s">
            <input type="password" name="password" value={formData.password} onChange={handleInputChange} onBlur={handleBlur} placeholder=" " className={errors.password && touchedFields.password ? 'error' : ''} />
            <label>Senha</label>
            {errors.password && touchedFields.password && <div className="error-message-f-s">{errors.password}</div>}
          </div>

          {/* Novo campo gênero */}
          <div className="form-group-f-s">
            <select name="genero" value={formData.genero} onChange={handleInputChange} onBlur={handleBlur} className={errors.genero && touchedFields.genero ? 'error' : ''}>
              <option value="">Selecione o Gênero</option>
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
            </select>
            <label>Gênero</label>
            {errors.genero && touchedFields.genero && <div className="error-message-f-s">{errors.genero}</div>}
          </div>

          {/* Novo campo tipoPerfil */}
          <div className="form-group-f-s">
            <select name="tipoPerfil" value={formData.tipoPerfil} onChange={handleInputChange} onBlur={handleBlur}>
              <option value="Fornecedor">Fornecedor</option>
              <option value="Cliente">Noiv@s</option>
            </select>
            <label>Tipo de Perfil</label>
          </div>
              
            </div>;
        case 2:
          return <div className="form-step-f-s">
              <div className='title-form-f-s'>Dados da empresa</div>
              <div className="form-group-f-s">
                <input type="text" name="nomeEmpresa" value={formData.nomeEmpresa} onChange={handleInputChange} onBlur={handleBlur} placeholder=" " className={errors.nomeEmpresa && touchedFields.nomeEmpresa ? 'error' : ''} />
                <label>Nome da Empresa <span style={{color:"red"}}>*</span></label>
                {errors.nomeEmpresa && touchedFields.nomeEmpresa && <div className="error-message-f-s">{errors.nomeEmpresa}</div>}
              </div>
             
               {/* Novo campo gênero */}
          <div className="form-group-f-s">
            <select name="tipoDeServico" value={formData.tipoDeServico} onChange={handleInputChange} onBlur={handleBlur} className={errors.tipoDeServico && touchedFields.tipoDeServico ? 'error' : ''}>
              <option value="">Selecione uma categoria</option>
              {categorias.map((items) => {
               return <option value={items._id}>{items.titulo}</option>
              })}
              
            </select>
            <label>Categoria</label>
            {errors.tipoDeServico && touchedFields.tipoDeServico && <div className="error-message-f-s">{errors.tipoDeServico}</div>}
          </div>
            </div>;
        case 3:
          return <div className="form-step-f-s">
              <div className='title-form-f-s'>Informações Profissionais</div>
              <div className="form-group-f-s">
                <input type="text" name="occupation" value={formData.occupation} onChange={handleInputChange} onBlur={handleBlur} placeholder=" " className={errors.occupation && touchedFields.occupation ? 'error' : ''} />
                <label>Profissão</label>
                {errors.occupation && touchedFields.occupation && <div className="error-message-f-s">{errors.occupation}</div>}
              </div>
              <div className="form-group-f-s">
                <input type="text" name="company" value={formData.company} onChange={handleInputChange} onBlur={handleBlur} placeholder=" " className={errors.company && touchedFields.company ? 'error' : ''} />
                <label>Empresa</label>
                {errors.company && touchedFields.company && <div className="error-message-f-s">{errors.company}</div>}
              </div>
              <div className="form-group-f-s">
                <input type="number" name="experience" value={formData.experience} onChange={handleInputChange} onBlur={handleBlur} placeholder=" " className={errors.experience && touchedFields.experience ? 'error' : ''} />
                <label>Anos de Experiência</label>
                {errors.experience && touchedFields.experience && <div className="error-message-f-s">{errors.experience}</div>}
              </div>
            </div>;
        default:
          return null;
      }
    };
    return <div className="form-container-f-s">
        <div className="steps-f-s">
          <div>
            <div className={`step-f-s ${currentStep >= 1 ? 'active' : ''} ${currentStep === 1 ? 'current' : ''}`}>1</div>
            <div className="step-title-f-s">Dados do Usuário</div>
          </div>
          <div>
            <div className={`step-f-s ${currentStep >= 2 ? 'active' : ''} ${currentStep === 2 ? 'current' : ''}`}>2</div>
            <div className="step-title-f-s">Dados da empresa</div>
          </div>
          <div>
            <div className={`step-f-s ${currentStep >= 3 ? 'active' : ''} ${currentStep === 3 ? 'current' : ''}`}>3</div>
            <div className="step-title-f-s">Profissional</div>
          </div>
          <div className="step-connector-f-s">
            <div className="step-connector-progress-f-s" style={{
            width: calculateProgress()
          }} />
          </div>
        </div>
  
        {renderHeader()}
        {renderStep()}
  
        <div className="buttons-f-s">
          {currentStep > 1 && <button className="button-f-s prev-f-s" onClick={prevStep}>
              Anterior
            </button>}
          <button className="button-f-s next-f-s" onClick={currentStep === 3 ? () => validateStep() && alert('Formulário enviado!') : nextStep} disabled={!isStepValid}>
            {currentStep === 3 ? 'Enviar' : 'Próximo'}
          </button>
        </div>
      </div>;
}

export default UserForm;
