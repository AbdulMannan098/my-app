import axios from 'axios'

export const createCustomer=async(customerRegistrationDetails)=>{
    return await axios.post('http://localhost:8000/api/create-customer',customerRegistrationDetails);
}

export const loginCustomer=async(customerLoginDetails)=>{
    return await axios.post('http://localhost:8000/api/customer/login',customerLoginDetails)
}
export const loginSeller=async(sellerLoginDetails)=>{
    return await axios.post('http://localhost:8000/api/seller/login',sellerLoginDetails)
}

export const registerSeller=async(sellerRegistrationDetails)=>{
    return await axios.post('http://localhost:8000/api/create-seller',sellerRegistrationDetails);
}
