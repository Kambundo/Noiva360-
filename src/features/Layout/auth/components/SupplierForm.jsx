import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const validationSchema = Yup.object({
  nome: Yup.string().required('Nome é obrigatório'),
  descricao: Yup.string().required('Descrição é obrigatória'),
  tipoDeServico: Yup.string().required('Tipo de serviço é obrigatório'),
  avaliacao: Yup.number().min(0).max(5).required('Avaliação é obrigatória'),
  nif: Yup.string().required('NIF é obrigatório'),
  categoria: Yup.string().required('Categoria é obrigatória')
});

function SupplierForm({ userData }) {
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const supplierData = {
        ...values,
        GestorId: userData.id // ID do usuário da etapa anterior
      };
      //await axios.post('/api/suppliers', supplierData);
      alert('Cadastro realizado com sucesso!');
    } catch (error) {
      console.error('Erro ao cadastrar fornecedor:', error);
    }
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{
        nome: '',
        descricao: '',
        tipoDeServico: '',
        avaliacao: '',
        nif: '',
        categoria: ''
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="form">
          <h2>Cadastro de Fornecedor</h2>

          <div className="form-group">
            <label htmlFor="nome">Nome do Estabelecimento</label>
            <Field type="text" name="nome" id="nome" />
            <ErrorMessage name="nome" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="descricao">Descrição</label>
            <Field as="textarea" name="descricao" id="descricao" />
            <ErrorMessage name="descricao" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="tipoDeServico">Tipo de Serviço</label>
            <Field as="select" name="tipoDeServico" id="tipoDeServico">
              <option value="">Selecione</option>
              <option value="Buffet">Buffet</option>
              <option value="Decoração">Decoração</option>
              <option value="Fotografia">Fotografia</option>
              <option value="Música">Música</option>
            </Field>
            <ErrorMessage name="tipoDeServico" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="avaliacao">Avaliação</label>
            <Field type="number" name="avaliacao" id="avaliacao" min="0" max="5" step="0.5" />
            <ErrorMessage name="avaliacao" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="nif">NIF</label>
            <Field type="text" name="nif" id="nif" />
            <ErrorMessage name="nif" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="categoria">Categoria</label>
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