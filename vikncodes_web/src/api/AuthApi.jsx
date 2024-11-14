import { Mutation, useMutation, useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useAuthContext } from "../context/AuthProvider"
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const BaseURL = 'http://127.0.0.1:8000'

export const useRegister = () =>{
    const navigate = useNavigate()
    return useMutation({
        mutationFn: async (formData) =>{
            const response = await axios.post(`${BaseURL}/regiser/`,formData);
            return response;
        },
        onSuccess: () =>{
            toast.success("registration successfully completed")
            navigate('/Signin')
        },
        onError: (error) =>{
            toast.error(error?.response?.data?.message?.error[0]);
        }
    })
}


export const useLogin = () =>{
    const navigate = useNavigate()
    const {setAuthUser,setAccessToken,setRefreshToken}=useAuthContext()

    return useMutation({
        mutationFn: async (formData) => {
            const response = await axios.post(`${BaseURL}/login/`,formData)
            return response;
        },
        onSuccess: (response) =>{
            if (response) {
                const accessToken = response?.data?.access;
                const refreshToken = response?.data?.refresh;
                const decodedToken = jwtDecode(accessToken);
                setAccessToken(accessToken)
                setRefreshToken(refreshToken)
                setAuthUser(decodedToken)
                localStorage.setItem('accessToken',accessToken)
                localStorage.setItem('refreshToken',refreshToken)

                if(accessToken){
                    navigate('/Products')
                }    
                toast.success("Successfully Logined") 
            }
            
            
        },
        onError: (error) => {
            toast.error("User in this Credentials not found")
        }
    })
}

export const useLogOut = () => {
    const navigate = useNavigate();
    const { setAccessToken,setRefreshToken,setAuthUser } = useAuthContext();

    const mutation = useMutation({
        mutationFn: async () => {
            return Promise.resolve();
        },
        onSuccess: () => {
            setAccessToken(null)
            localStorage.removeItem('accessToken');
            setRefreshToken(null)
            setAuthUser(null)
            localStorage.removeItem('refreshToken');

            navigate('/');
            toast.info('You are logged out');
        },
        onError: () => {
            toast.error('Error occurred during logout');
        },
    });

    return mutation;
};