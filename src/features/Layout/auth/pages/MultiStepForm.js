import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';
import Input  from './Input';
import "../assets/css/index.css"
import StepIndicator from './StepIndicator';

import axios from 'axios';
import "../assets/css/MultiStepForm.css"; // Certifique-se de criar um arquivo CSS para as animações e estilos

// Validação do usuário
const userValidationSchema = Yup.object({
  nome: Yup.string().required('Nome é obrigatório'),
  sobrenome: Yup.string().required('Sobrenome é obrigatório'),
  telefone: Yup.string().required('Telefone é obrigatório'),
  email: Yup.string().email('Email inválido').required('Email é obrigatório'),
  endereco: Yup.string().required('Endereço é obrigatório'),
  password: Yup.string().min(6, 'Mínimo de 6 caracteres').required('Senha é obrigatória'),
  genero: Yup.string().required('Gênero é obrigatório')
});

// Validação do fornecedor
const fornecedorValidationSchema = Yup.object({
  nome: Yup.string().required('Nome é obrigatório'),
  descricao: Yup.string().required('Descrição é obrigatória'),
  tipoDeServico: Yup.string().required('Tipo de serviço é obrigatório'),
  avaliacao: Yup.string().required('Avaliação é obrigatória'),
  nif: Yup.string().required('NIF é obrigatório'),
  categoria: Yup.string().required('Categoria é obrigatória')
});

// Componente principal
const MultiForm = () => {
  const [step, setStep] = useState(0);
  const [userId, setUserId] = useState ('');

  const [userData, setUserData] = useState({
    nome: '',
    sobrenome: '',
    telefone: '',
    email: '',
    endereco: '',
    password: '',
    genero: ''
  });

  const [fornecedorData, setFornecedorData] = useState({
    nome: '',
    descricao: '',
    tipoDeServico: '',
    avaliacao: '',
    nif: '',
    categoria: ''
  });

  // Função de envio dos dados do usuário
  // const handleUserSubmit = async (values:  userData) => {
  //   try {
  //     const response = await axios.post('/api/usuarios', values);
  //     setUserId(response.data.id);
  //     setStep(1); // Muda para a próxima etapa
  //   } catch (error) {
  //     console.error('Erro ao cadastrar usuário:', error);
  //     alert('Erro ao cadastrar usuário. Tente novamente.');
  //   }
  // };

  // // Função de envio dos dados do fornecedor
  // const handleFornecedorSubmit = async (values:  fornecedorData) => {
  //   try {
  //     await axios.post('/api/fornecedores', { ...values, GestorId: userId });
  //     alert('Cadastro realizado com sucesso!');
  //   } catch (error) {
  //     console.error('Erro ao cadastrar fornecedor:', error);
  //     alert('Erro ao cadastrar fornecedor. Tente novamente.');
  //   }
  // };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center justify-center mb-6">
          <Heart className="w-8 h-8 text-pink-600 mr-2" />
          <h2 className="text-3xl font-bold text-gray-900">Noiva360º</h2>
        </div>

        {/* Exibição do indicador de etapas */}
        <StepIndicator
          currentStep={step}
          steps={['Dados Pessoais', 'Dados do Fornecedor']}
        />

        <AnimatePresence mode="wait">
          {step === 0 ? (
            <motion.div
              key="user"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
            >
              <Formik
                initialValues={userData}
                validationSchema={userValidationSchema}
                // onSubmit={handleUserSubmit}
              >
                {({ errors, touched, getFieldProps }) => (
                  <Form className="space-y-4">
                    <Input
                      label="Nome"
                      type="text"
                      error={touched.nome && errors.nome}
                      {...getFieldProps('nome')}
                    />
                    <Input
                      label="Sobrenome"
                      type="text"
                      error={touched.sobrenome && errors.sobrenome}
                      {...getFieldProps('sobrenome')}
                    />
                    <Input
                      label="Telefone"
                      type="text"
                      error={touched.telefone && errors.telefone}
                      {...getFieldProps('telefone')}
                    />
                    <Input
                      label="Email"
                      type="email"
                      error={touched.email && errors.email}
                      {...getFieldProps('email')}
                    />
                    <Input
                      label="Endereço"
                      type="text"
                      error={touched.endereco && errors.endereco}
                      {...getFieldProps('endereco')}
                    />
                    <Input
                      label="Senha"
                      type="password"
                      error={touched.password && errors.password}
                      {...getFieldProps('password')}
                    />
                    <Input
                      label="Gênero"
                      type="text"
                      error={touched.genero && errors.genero}
                      {...getFieldProps('genero')}
                    />
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="bg-pink-600 text-white py-2 px-4 rounded-lg hover:bg-pink-700"
                      >
                        Avançar
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </motion.div>
          ) : (
            <motion.div
              key="fornecedor"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
            >
              <Formik
                initialValues={fornecedorData}
                validationSchema={fornecedorValidationSchema}
                // onSubmit={handleFornecedorSubmit}
              >
                {({ errors, touched, getFieldProps }) => (
                  <Form className="space-y-4">
                    <Input
                      label="Nome do Fornecedor"
                      type="text"
                      error={touched.nome && errors.nome}
                      {...getFieldProps('nome')}
                    />
                    <Input
                      label="Descrição"
                      type="text"
                      error={touched.descricao && errors.descricao}
                      {...getFieldProps('descricao')}
                    />
                    <Input
                      label="Tipo de Serviço"
                      type="text"
                      error={touched.tipoDeServico && errors.tipoDeServico}
                      {...getFieldProps('tipoDeServico')}
                    />
                    <Input
                      label="Avaliação"
                      type="text"
                      error={touched.avaliacao && errors.avaliacao}
                      {...getFieldProps('avaliacao')}
                    />
                    <Input
                      label="NIF"
                      type="text"
                      error={touched.nif && errors.nif}
                      {...getFieldProps('nif')}
                    />
                    <Input
                      label="Categoria"
                      type="text"
                      error={touched.categoria && errors.categoria}
                      {...getFieldProps('categoria')}
                    />
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="bg-pink-600 text-white py-2 px-4 rounded-lg hover:bg-pink-700"
                      >
                        Finalizar
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MultiForm;
