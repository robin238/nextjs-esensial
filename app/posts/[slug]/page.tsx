import { CreateComment } from "@/app/actions";
import { Post } from "@/app/types/Post";
import React, { Suspense } from "react";
import { CommentForm } from "./comment-form";
import { LikeButton } from "./like-button";
import { Comments } from "./comments";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return { title: "post not found" };
  }

  return {
    title: post.title,
  };
}

async function getPost(slug: string): Promise<Post> {
  const res = await fetch("http://localhost:3001/posts/?slug=" + slug);
  //   const post = await res.json();
  //   return post[0];
  // atau
  const [post] = await res.json();
  return post;
}

const PostPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <div>
        <h1>Detail Post</h1>
        <h2>{post.title}</h2>
        <h2>{post.content}</h2>
        <LikeButton postId={post.id} />
      </div>
      <section>
        <h2>Comment</h2>
        <Suspense fallback={<p>loading comments..</p>}>
          <Comments />
        </Suspense>
        <CommentForm />
      </section>
    </>
  );
};

export default PostPage;
