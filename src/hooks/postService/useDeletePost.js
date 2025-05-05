import { useMutation, useQueryClient } from "@tanstack/react-query";

// note: ideally, I'd use Axios here
// but I'm trying to stick to the assigment as close as possible
const API_URL = import.meta.env.VITE_API_URL;

const useDeletePost = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async (id) => {
      const response = await fetch(`${API_URL}careers/${id}/`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Error deleting post");
      }

      return id;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["posts"]);
      },
    }
  );
};

export default useDeletePost;
