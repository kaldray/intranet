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
