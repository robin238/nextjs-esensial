import { CreateComment } from "@/app/actions";
import { Post } from "@/app/types/Post";
import React from "react";
import { CommentForm } from "./comment-form";
import { LikeButton } from "./like-button";
async function getPosts(slug: string): Promise<Post> {
  const res = await fetch("http://localhost:3001/posts/?slug=" + slug);
  //   const post = await res.json();
  //   return post[0];
  // atau
  const [post] = await res.json();
  return post;
}

const PostPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const post = await getPosts(slug);
  console.log(post);

  return (
    <>
      <div>
        <h1>Detail Post</h1>
        <h2>{post.title}</h2>
        <h2>{post.content}</h2>
        <LikeButton />
      </div>
      <section>
        <h2>Comment</h2>
        <CommentForm />
      </section>
    </>
  );
};

export default PostPage;
