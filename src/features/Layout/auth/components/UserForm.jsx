import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import swal from 'sweetalert'

const validationSchema = Yup.object({
  nome: Yup.string().required('Nome é obrigatório'),
  sobrenome: Yup.string().required('Sobrenome é obrigatório'),
  telefone: Yup.string().required('Telefone é obrigatório'),
  email: Yup.string().email('Email inválido').required('Email é obrigatório'),
  endereco: Yup.string().required('Endereço é obrigatório'),
  password: Yup.string().min(6, 'Mínimo de 6 caracteres').required('Senha é obrigatória'),
  genero: Yup.string().required('Gênero é obrigatório')
});

function UserForm({ onSubmit }) {
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post('https://noiva360-gules.vercel.app/usuarios', values);
      await swal({
        text: values.nome + `Foste cadastrad${values.genero=== 'Masculino'? 'o':'a'} com sucesso :)`,
        icon: 'success',
        timer: "2700",
        button: false,
      });
      onSubmit({ ...response.data, ...values });
      console.log(values, 'dados do + vale')
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
    }
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{
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
            <Field type="text" name="telefone" id="telefone" />
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