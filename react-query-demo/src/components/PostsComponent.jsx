import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchPosts = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return data;
};

const PostsComponent = () => {
  const {
    data: posts,
    isLoading,
    isError,
    error,
    isFetching,
  } = useQuery("posts", fetchPosts, {
    cacheTime: 1000 * 60 * 5, // 5 minutes
    keepPreviousData: true, // Retain old data while fetching new data
  });

  if (isLoading) {
    return <p>Loading posts...</p>;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>Posts</h1>
      {isFetching && <p>Updating posts...</p>}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
