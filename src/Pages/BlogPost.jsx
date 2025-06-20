import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BlogUpdates } from '../Data/BlogUpdates'; // Adjust the import based on your structure

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const foundPost = BlogUpdates.find((item) => item.id === parseInt(id));
    setPost(foundPost);
  }, [id]);

  if (!post) return <div>Post not found</div>;

  return (
    <div className="blog-post">
      <h1>{post.name}</h1>
      <img src={post.imageUrl} alt={post.name} />
      <p>{post.description}</p>
    </div>
  );
};

export default BlogPost;
