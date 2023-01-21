import api from "../config/api";

export const getTables = () => api.get("/tables");

export const addTable = (data) => {
    return api.post("/tables", data, {
        headers: {
            "Content-type": "multipart/form-data"
        }
    })
}

export const updateTable = (table) => {
    return api.put("/tables", table)
}

export const deleteTableById = (id) => {
    return api.delete("/tables/" + id)
}


export const getTableById = (id) => {
    return api.get("/tables/" + id);
};


