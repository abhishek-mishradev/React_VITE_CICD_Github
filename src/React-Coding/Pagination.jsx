import axios from "axios";
import React, { useEffect, useState } from "react";

const Pagination = () => {
  const [post, setPost] = useState([]);

  const [page, setPage] = useState(1);

  const limit = 10;
  useEffect(() => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`,
      )
      .then((res) => setPost(res.data));
  }, [page]);

  return (
    <div>
      <h1>Pagination</h1>

      {post.map((post) => (
        <div key={post.id}>
          <h3>
            {" "}
            {post.id}. {post.title}
          </h3>

          <p>{post.body}</p>
        </div>
      ))}

      <button disabled={page === 1} onClick={() => setPage((prev) => prev - 1)}>
        Previous
      </button>

      <h1>Page {page}</h1>

      <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
    </div>
  );
};

export default Pagination;
