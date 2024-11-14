import { useMutation, useQuery,useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { toast } from "react-toastify"

const BaseURL = 'http://127.0.0.1:8000'


export const useGetProduct = () =>{
    const  { data, isSuccess }= useQuery({
        queryKey: ["product"],
        queryFn: async () => {
            const response = await axios.get(`${BaseURL}/product/`);
            
            return response?.data;
        }
    })
   return {data,isSuccess}
}

export const useGetSubVariants = (id) =>{
    return useQuery({
        queryKey: ['subvariants'],
        queryFn: async () =>{
            const response = await axios.get(`${BaseURL}/product/subvariants/${id}/`)
            return response?.data
        }
    })
}

export const useGetVariants = (id) =>{
    return useQuery({
        queryKey: ["variants",id],
        queryFn: async () => {
            const response = await axios.get(`${BaseURL}/product/variants/${id}/`);
            return response?.data
        },
        enabled: !!id
    })
}

export const useCreateProduct = () =>{
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (formData) =>{
            const response = await axios.post(`${BaseURL}/product/`,formData);
            return response?.data
        },
        onSuccess: () =>{
            queryClient.invalidateQueries(['product']);
            toast.success("successully product added")
        },
        onError: () =>{
            toast.error("Product adding got an error")
        }
    })
}

export const useCreateVariant = () =>{
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (formData) =>{
            const response = await axios.post(`${BaseURL}/product/variants/`,formData);
            return response?.data
        },
        onSuccess: () =>{
            queryClient.invalidateQueries(['variants']);
            toast.success("Variation is Created")
        },
        onError: (error) =>{
            toast.error(error?.response?.data?.non_field_errors)
        }
    })
}

export const useCreateSubVariants = () =>{
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (formData) =>{
            const response = await axios.post(`${BaseURL}/product/subvariants/`,formData);
            return response?.data
        },
        onSuccess: () =>{
            toast.success("subvariation successfully Created")
            queryClient.invalidateQueries(['subvariants']);
        },
        onError: () =>{
            toast.error("Error while adding Subvariant")
        }
    })
}

export const useAddStock = () =>{
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (formData) =>{
            const response = await axios.patch(`${BaseURL}/product/addstock/`,formData);
            return response?.data
        },
        onSuccess: () =>{
            queryClient.invalidateQueries(['subvariants']);
            toast.success("Stock added")
        },
        onError: () =>{
            toast.error("Error while adding stock")
        }
    })
}

export const useRemoveStock = () =>{
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (formData) =>{
            const response = await axios.patch(`${BaseURL}/product/removestock/`,formData);
            return response?.data
        },
        onSuccess: () =>{
            queryClient.invalidateQueries(['subvariants']);
            toast.success("Stock Removed")
        },
        onError: () =>{
            toast.error("Error while removing stock")
        }
    })
}
