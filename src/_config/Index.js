import axios from "axios";
import swal from "sweetalert";
const api = axios.create({
    baseURL: 'https://noiva360-gules.vercel.app/',
    
})

api.interceptors.response.use(undefined, (error) => {
    if (error.message === 'Network Error' && error.code === 'ERR_NETWORK') {
        console.log("Houve um erro no servidor")
        console.log(error)
        swal({
            title: "Erro no Servidor" ,
            text: "O servidor não está rodando",
            icon: "error",
            timer: "4000",
            button: true,
        });
    }
})

export default api