import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Fetch function
const fetchPosts = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return res.data;
};

const PostsComponent = () => {
  // Use React Query hook
  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["posts"], // unique cache key
    queryFn: fetchPosts,
    staleTime: 5000, // cache freshness (5s) before refetch
    cacheTime: 1000 * 60 * 5, // keep data in cache for 5 minutes
  });

  // Loading state
  if (isLoading) return <p className="text-center text-gray-400">Loading posts...</p>;

  // Error state
  if (isError) return <p className="text-red-500">Error: {error.message}</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Posts</h2>

      <button
        onClick={() => refetch()}
        disabled={isFetching}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg mb-4 hover:bg-blue-700 transition"
      >
        {isFetching ? "Refreshing..." : "Refetch Posts"}
      </button>

      <ul className="space-y-3">
        {posts.slice(0, 10).map((post) => (
          <li
            key={post.id}
            className="border rounded-lg p-3 bg-gray-100 hover:bg-gray-200 transition"
          >
            <h3 className="font-semibold text-lg">{post.title}</h3>
            <p className="text-gray-700">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
