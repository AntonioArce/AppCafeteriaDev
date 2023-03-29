import axios from "axios"
axios.defaults.baseURL = 'http://192.168.1.17:8000'

export const token = (user,password) =>{
    const data ={
        user: user,
        pass: password
    }

    axios.post('api/v1/auth/login',data)
    .then(Response =>{
        return Response.data.token
    })
    .catch(error =>{
        console.log(error)
    })
} 
/*
axios.get('http://10.100.128.25:8000/api/v1/clientes/joseda@gmail.com').then(Response =>{
                    console.log(Response.data);
                })
*/