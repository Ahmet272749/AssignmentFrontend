export const fetchProducts = async () => {
    const response = await fetch("http://localhost:8080/v1/product/list");
    if (!response.ok) {
        throw new Error("API request failed");
    }
    return await response.json();
};
