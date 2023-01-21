import api from "../config/api";

export const getCustomers = () => api.get("/customers");

export const addCustomer = (data) => {
    return api.post("/customers", data, {
        headers: {
            "Content-type": "multipart/form-data"
        }
    })
}

export const updateCustomer = (customer) => {
    return api.put("/customers", customer)
}

export const deleteCustomersById = (id) => {
    return api.delete("/customers/" + id)
}


export const getCustomersById = (id) => {
    return api.get("/customers/" + id);
};


