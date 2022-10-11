import axios from "axios";

//prod
export const GOOGLE_CLOUD_BASE_URL = "http://localhost:5000";


const AxiosInstance = axios.create({
    baseURL: GOOGLE_CLOUD_BASE_URL,
    timeout: 20 * 1000, // 20 second server timeout
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    }
})

export default AxiosInstance;
