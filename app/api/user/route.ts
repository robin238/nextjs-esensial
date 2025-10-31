import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  return Response.json({
    message: "User GET response",
    query,
  });
}

export async function POST(request: Request) {
  const body = await request.json();
  console.log(body);
  return Response.json({
    message: "User POST response",
  });
}
