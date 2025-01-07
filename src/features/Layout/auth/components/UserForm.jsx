import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import swal from 'sweetalert'

const validationSchema = Yup.object({
  nome: Yup.string().required('Nome é obrigatório'),
  sobrenome: Yup.string().required('Sobrenome é obrigatório'),
  telefone: Yup.string().required('Telefone é obrigatório').min(9, "O número deve conter 9 digítos")
  .max(9, "O número deve conter apenas 9 digítos"),
  email: Yup.string().email('Email inválido').required('Email é obrigatório'),
  endereco: Yup.string().required('Endereço é obrigatório'),
  password: Yup.string().min(6, 'Mínimo de 6 caracteres').required('Senha é obrigatória'),
  genero: Yup.string().required('Gênero é obrigatório')
});

function UserForm({ onSubmit }) {
  const [erros, setErros] = useState([])
  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const response = await axios.post('https://noiva360-gules.vercel.app/usuarios', values);
      await swal({
        text: `${values.nome} Foste cadastrad${values.genero === 'Masculino' ? 'o' : 'a'} com sucesso :)`,
        icon: 'success',
        timer: 2700,
        button: false,
      });
      onSubmit({ ...response.data, ...values });
      console.log(values, 'dados do + vale');
      console.log(response.data, 'meu ID');
      const nome = response.data.sobrenome;
      const ID = response.data._id
      localStorage.setItem("sobrenome", nome);
      localStorage.setItem("id", ID)

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
        id:'',
        nome: '',
        sobrenome: '',
        telefone: '',
        email: '',
        endereco: '',
        password: '',
        genero: '',
        tipoPerfil: "Fornecedor"
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="form">
          <h2>Cadastro de Usuário</h2>

          <div className="form-group">
            <label htmlFor="nome">Nome</label>
            <Field type="text" name="nome" id="nome" />
            <ErrorMessage name="nome" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="sobrenome">Sobrenome</label>
            <Field type="text" name="sobrenome" id="sobrenome" />
            <ErrorMessage name="sobrenome" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="telefone">Telefone</label>
            <Field type="text" name="telefone" id="telefone" placeholder="+244 9xx xxx xxx" />
            <ErrorMessage name="telefone" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" id="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="endereco">Endereço</label>
            <Field type="text" name="endereco" id="endereco" />
            <ErrorMessage name="endereco" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <Field type="password" name="password" id="password" />
            <ErrorMessage name="password" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="genero">Gênero</label>
            <Field as="select" name="genero" id="genero">
              <option value="">Selecione</option>
              <option value="Masculino">Masculino</option>
              <option value="Femenino">Femenino</option>
            </Field>
            <ErrorMessage name="genero" component="div" className="error" />
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Enviando...' : 'Próxima Etapa'}
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default UserForm;
