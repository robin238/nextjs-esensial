"use server";

type CommentState = {
  error: string;
};
type LikeState = {
  error: string;
};

export async function CreateComment(
  prevState: CommentState,
  formData: FormData
): Promise<CommentState> {
  //   console.log(formData.get("comment"));
  const comment = formData.get("comment") as string;
  const name = formData.get("name") as string;

  if (!comment || !name) {
    return { error: "comment is required" };
  }
  console.log("comment", comment);
  console.log("name", name);
  return { error: "" };
}

export async function CreateLike() {
  // fake delay
  await new Promise((resolve, reject) => {
    return setTimeout(() => resolve(true), 3000);
  });
  console.log("like");
}
