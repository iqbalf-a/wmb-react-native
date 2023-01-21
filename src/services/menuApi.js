import api from "../config/api";

export const getMenus = () => api.get("/menus");

export const addMenu = (data) => {
    return api.post("/menus", data, {
        headers: {
            "Content-type": "multipart/form-data"
        }
    })
}

export const updateMenu = (menu) => {
    return api.put("/menus", menu)
}

export const deleteMenuById = (id) => {
    return api.delete("/menus/" + id)
}


export const getMenuById = (id) => {
    return api.get("/menus/" + id);
};


