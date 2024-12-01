import axios from "axios";

const API_URL = "http://localhost:3000/gemini/chat";

export const useApi = () => {
    const sendMessage = async (text: string) => {
        try {
            const response = await axios.post(API_URL, { text });
            // Adjust this to return only the relevant part of the response
            return response.data; // Ensure this is a string or a renderable type
        } catch (error) {
            console.error("API Error:", error);
            // @ts-ignore
            throw error.response?.data?.message || "Error occurred"; // Handle error
        }
    };

    return { sendMessage };
};
