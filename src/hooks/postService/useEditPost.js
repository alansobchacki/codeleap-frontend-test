import { useMutation, useQueryClient } from "@tanstack/react-query";

// note: ideally, I'd use Axios here
// but I'm trying to stick to the assigment as close as possible
const API_URL = import.meta.env.VITE_API_URL;

const useEditPost = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async (postData) => {
      const { id, title, content } = postData;
      const response = await fetch(`${API_URL}careers/${id}/`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          content,
        }),
      });

      if (!response.ok) {
        throw new Error("Error editing post");
      }

      return response.json();
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["posts"]);
      },
    }
  );
};

export default useEditPost;
