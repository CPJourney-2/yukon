import axios from "axios";

const isProduction = process.env.NODE_ENV !== 'development';
const isStaging = window.location.href.includes("staging");

let baseURL;
if (isProduction && !isStaging) {
    baseURL = "https://api.cpjourney.net";
} else if (isProduction && isStaging) {
    baseURL = "https://staging-api.cpjourney.net";
} else {
    baseURL = "http://127.0.0.1:3001";
}

const api = axios.create({
    baseURL,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
    timeout: 10000,
});

export default api;