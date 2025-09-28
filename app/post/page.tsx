import Link from "next/link";
import { Post } from "../types/Post";
// jika ingin dipisahkan menjadi function
async function getPosts(): Promise<Post[]> {
  const res = await fetch("http://localhost:3001/posts");
  const posts: Post[] = await res.json();
  return posts;
}

const PostPage = async () => {
  // const res = await fetch("http://localhost:3001/posts");
  // const posts: Post[] = await res.json();

  const posts = await getPosts();

  return (
    <div>
      PostPage
      {posts.map((post) => (
        <article key={post.id}>
          <h2> {post.title}</h2>
          <h2> {post.content}</h2>
          <h2>
            {" "}
            <Link href={`/post/${post.slug}`} className="text-blue-500">
              {post.title}
            </Link>
          </h2>
        </article>
      ))}
    </div>
  );
};

export default PostPage;
