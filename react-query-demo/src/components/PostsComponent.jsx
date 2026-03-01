import { useQuery } from "@tanstack/react-query";

/* Fetch function */
const fetchPosts = async () => {

  console.log("Fetching from API...");

  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
};

function PostsComponent() {

  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
    dataUpdatedAt
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,

    /* Required caching options */
    staleTime: 60000,
    cacheTime: 300000,
    refetchOnWindowFocus: false,
    keepPreviousData: true
  });


  if (isLoading) return <div>Loading posts...</div>;

  if (isError) return <div>Error: {error.message}</div>;


  return (
    <div>

      <h2>Posts</h2>

      <p>
        Last fetched:
        {" "}
        {new Date(dataUpdatedAt).toLocaleTimeString()}
      </p>

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