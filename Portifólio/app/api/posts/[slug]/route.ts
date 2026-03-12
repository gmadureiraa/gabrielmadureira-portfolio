import { getLocalPostBySlug } from "@/lib/posts";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const post = getLocalPostBySlug(params.slug);

  if (!post) {
    return new Response(JSON.stringify({ error: "Post not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify(post), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
