import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:8000",
    headers: { "Content-Type": "application/json" }
});

export async function userLogin(email, password) {
    try {
        const response = await instance.post("/api/login", { email, password });
        const { data } = response;
        localStorage.setItem("token", JSON.stringify(data.token));
        return data;
    } catch (err) {
        console.error(err);
    }
}

export async function getRandomCollaborater() {
    try {
        const response = await instance.get("/api/collaborateurs/random", {
            headers: {
                Authorization: "Bearer " + JSON.parse(localStorage.getItem("token"))
            }
        });
        const { data } = response;
        return data;
    } catch (err) {
        console.error(err);
    }
}

export async function getAllCollaborater() {
    try {
        const response = await instance.get("/api/collaborateurs", {
            headers: {
                Authorization: "Bearer " + JSON.parse(localStorage.getItem("token"))
            }
        });
        const { data } = response;
        return data;
    } catch (err) {
        console.error(err);
    }
}
export async function getSpecificCollaborater(id) {
    try {
        const response = await instance.get(`/api/collaborateurs/${id}`, {
            headers: {
                Authorization: "Bearer " + JSON.parse(localStorage.getItem("token"))
            }
        });
        const { data } = response;
        return data;
    } catch (err) {
        console.error(err);
    }
}

export async function modifyProfil(id, body) {
    try {
        const response = await instance.put(`/api/collaborateurs/${id}`, body, {
            headers: {
                Authorization: "Bearer " + JSON.parse(localStorage.getItem("token"))
            }
        });
        const { data } = response;
    } catch (err) {
        console.error(err);
    }
}

export async function deleteUser(id) {
    try {
        const response = await instance.delete(`/api/collaborateurs/${id}`, {
            headers: {
                Authorization: "Bearer " + JSON.parse(localStorage.getItem("token"))
            }
        });
        const { data } = response;
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}

export async function addNewUser(body) {
    try {
        const response = await instance.post(`/api/collaborateurs`, body, {
            headers: {
                Authorization: "Bearer " + JSON.parse(localStorage.getItem("token"))
            }
        });
        const { data } = response;
        console.log(data);
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
