import API from "./api";

// Create Calculation
export const createCalculation = async (data) => {
    const response = await API.post("/calculations", data);
    return response.data;
};

// Get History
export const getHistory = async () => {
    const response = await API.get("/calculations");
    return response.data;
};

// Delete Calculation
export const deleteCalculation = async (id) => {
    const response = await API.delete(`/calculations/${id}`);
    return response.data;
};

// Clear History
export const clearHistory = async () => {
    const response = await API.delete("/calculations");
    return response.data;
};