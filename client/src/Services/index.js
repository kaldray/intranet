import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:8000",
    headers: { "Content-Type": "application/json" }
});

export async function userLogin(email, password) {
    try {
        const response = await instance.post("/api/login", { email, password });
        const { data, status } = response;
        localStorage.setItem("token", JSON.stringify(data));
        return { data, status };
    } catch (err) {
        console.error(err);
        return err.response;
    }
}

export async function getRandomCollaborater() {
    const { token } = JSON.parse(localStorage.getItem("token"));
    try {
        const response = await instance.get("/api/collaborateurs/random", {
            headers: {
                Authorization: "Bearer " + token
            }
        });
        const { data } = response;
        return data;
    } catch (err) {
        console.error(err);
    }
}

export async function getAllCollaborater() {
    const { token } = JSON.parse(localStorage.getItem("token"));
    try {
        const response = await instance.get("/api/collaborateurs", {
            headers: {
                Authorization: "Bearer " + token
            }
        });
        const { data } = response;
        return data;
    } catch (err) {
        console.error(err);
    }
}
export async function getSpecificCollaborater(id) {
    const { token } = JSON.parse(localStorage.getItem("token"));
    try {
        const response = await instance.get(`/api/collaborateurs/${id}`, {
            headers: {
                Authorization: "Bearer " + token
            }
        });
        const { data } = response;
        return data;
    } catch (err) {
        console.error(err);
    }
}

export async function modifyProfil(id, body) {
    const { token } = JSON.parse(localStorage.getItem("token"));
    try {
        const response = await instance.put(`/api/collaborateurs/${id}`, body, {
            headers: {
                Authorization: "Bearer " + token
            }
        });
        const { data, statusText, status } = response;
        return { data, statusText, status };
    } catch (err) {
        console.error(err);
    }
}

export async function deleteUser(id) {
    const { token } = JSON.parse(localStorage.getItem("token"));
    try {
        const response = await instance.delete(`/api/collaborateurs/${id}`, {
            headers: {
                Authorization: "Bearer " + token
            }
        });
        const { data, status } = response;
        return { status, data };
    } catch (err) {
        console.error(err);
    }
}

export async function addNewUser(body) {
    const { token } = JSON.parse(localStorage.getItem("token"));
    try {
        const response = await instance.post(`/api/collaborateurs`, body, {
            headers: {
                Authorization: "Bearer " + token
            }
        });
        const { data, status } = response;
        return { data, status };
    } catch (err) {
        console.error(err);
    }
}

export function getLocalStorage(item) {
    const dataFromLocalStorage = localStorage.getItem(item);
    if (dataFromLocalStorage === undefined || dataFromLocalStorage === null) {
        return null;
    } else {
        let parsedLocalStorage = JSON.parse(dataFromLocalStorage);
        return parsedLocalStorage;
    }
}

export function removeFromLocalStorage(item) {
    localStorage.removeItem(item);
}
