import axios from "axios";

export const fetchProducts = async () => {
    const response = await axios.get("http://localhost:8080/v1/product/list");
    return response.data;
};
