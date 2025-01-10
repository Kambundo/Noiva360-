import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import swal from 'sweet-alert'
const validationSchema = Yup.object({
  nome: Yup.string().required(' O nome é obrigatório'),
  // tipoDeServico: Yup.string().required('Tipo de serviço é obrigatório'),
  nif: Yup.string().required('NIF é obrigatório'),
  categoria: Yup.string().required('Categoria é obrigatória')
});


function SupplierForm({ onSubmit }) {
  const sobrenome = localStorage.getItem('sobrenome')
  const ID = localStorage.getItem('ID')
   const [erros, setErros] = useState([])
  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const response = await axios.post('https://noiva360-gules.vercel.app/fornecedores', values);
      await swal({
        text: `status 200`,
        icon: 'success',
        timer: 2700,
        button: false,
      });
      onSubmit({ ...response.data, ...values });
      console.log(values, 'dados do + vale');
    } catch (error) {
      await swal({
        text: `${error.response.data}`,
        icon: 'error',
        timer: 2700,
        button: true,
      });
      setErros(error.response.data)
      console.log(error.response.data, "ll")
      console.error('Erro ao cadastrar usuário:', error);
      
      // Se houver erros retornados pelo backend, popule os erros no Formik
      if (error.response && error.response.data) {
        const backendErrors = error.response.data;
        // Mapear os erros do backend para o formato que o Formik espera
        const formikErrors = backendErrors.reduce((acc, error) => {
          acc[error.field] = error.message;
          return acc;
        }, {});
        
        // Definir os erros no Formik
        setErrors(formikErrors);
      }
    }
    setSubmitting(false);
  };
  return (
    <Formik
      initialValues={{
        nome: '',
        descricao: '',
        // tipoDeServico: '',
        nif: '',
        categoria: '',
        gestorID: ID
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="form">
          <h2>Só mais 1 passo Sr. {sobrenome}</h2>

          <div className="form-group">
            <label htmlFor="nome">Nome da empresa </label>
            <Field type="text" name="nome" id="nome" />
            <ErrorMessage name="nome" component="div" className="error" />
          </div>

          {/* <div className="form-group">
            <label htmlFor="descricao">Descrição</label>
            <Field as="textarea" name="descricao" id="descricao" />
            <ErrorMessage name="descricao" component="div" className="error" />
          </div> */}

          {/* <div className="form-group">
            <label htmlFor="tipoDeServico">Tipo de Serviço</label>
            <Field as="select" name="tipoDeServico" id="tipoDeServico">
              <option value="">Selecione</option>
              <option value="Buffet">Buffet</option>
              <option value="Decoração">Decoração</option>
              <option value="Fotografia">Fotografia</option>
              <option value="Música">Música</option>
            </Field>
            <ErrorMessage name="tipoDeServico" component="div" className="error" />
          </div> */}

          <div className="form-group">
            <label htmlFor="nif">NIF</label>
            <Field type="text" name="nif" id="nif" />
            <ErrorMessage name="nif" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="categoria">Categoria <span color='orangee'>*</span> </label>
            <Field as="select" name="categoria" id="categoria">
              <option value="">Selecione</option>
              <option value="premium">Premium</option>
              <option value="standard">Standard</option>
              <option value="basic">Basic</option>
            </Field>
            <ErrorMessage name="categoria" component="div" className="error" />
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Enviando...' : 'Finalizar Cadastro'}
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default SupplierForm;