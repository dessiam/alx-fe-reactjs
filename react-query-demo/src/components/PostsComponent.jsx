import React from "react";
import { useQuery } from "@tanstack/react-query";

function PostsComponent() {

  const {
    data,
    isLoading,
    isError,
    error,
    refetch
  } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }

      return response.json();
    },

    // Keeps data cached for demonstration
    staleTime: 60000
  });


  if (isLoading) return <div>Loading posts...</div>;

  if (isError) return <div>Error: {error.message}</div>;


  return (
    <div>

      <h2>Posts</h2>

      {/* Refetch Button */}
      <button onClick={() => refetch()}>
        Refetch Posts
      </button>

      {data.map((post) => (
        <div key={post.id}>

          <h3>{post.title}</h3>
          <p>{post.body}</p>

        </div>
      ))}

    </div>
  );
}

export default PostsComponent;