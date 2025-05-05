import { useMutation } from "@tanstack/react-query";
import axios from "axios";

// note: ideally, I'd use Axios here
// but I'm trying to stick to the assigment as close as possible
const API_URL = import.meta.env.VITE_API_URL;

const createPost = async (postData) => {
  const response = await axios.post(`${API_URL}careers/`, postData);
  return response.data;
};

export const useCreatePost = () => {
  return useMutation(createPost);
};
