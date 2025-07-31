export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const url = `https://bento.engage-dev.com/api/v1/fetchPostsFeed.json`;
  const headers = { "Accept": "application/json" };

  try {
    let postsData: any = [];
    let nextUrl = url;
    let pageCount = 0;

    while (nextUrl) {
      const response = await fetch(nextUrl, { headers });
      if (!response.ok) {
        // Fallback para dados locais se a API falhar
        const fallbackPosts = [
          {
            slug: "pensamentos-sobre-cripto",
            data: {
              title: "Pensamentos sobre o futuro das criptomoedas",
              description: "Reflexões sobre como a tecnologia blockchain está transformando o mundo financeiro e o que esperar nos próximos anos.",
              image: "/images/thumbnail.png",
              category: "Crypto",
              date: "2024-01-15"
            }
          },
          {
            slug: "estrategias-marketing-digital",
            data: {
              title: "Estratégias de Marketing Digital que funcionam",
              description: "Compartilhando experiências e insights sobre marketing digital, automação e growth hacking.",
              image: "/images/thumbnail.png",
              category: "Marketing",
              date: "2024-01-10"
            }
          },
          {
            slug: "copywriting-persuasivo",
            data: {
              title: "O poder do copywriting persuasivo",
              description: "Como criar textos que convertem e engajam seu público-alvo de forma efetiva.",
              image: "/images/thumbnail.png",
              category: "Marketing",
              date: "2024-01-05"
            }
          }
        ];
        return new Response(JSON.stringify({ postsData: fallbackPosts }), { status: 200 });
      }
      
      const posts = await response.json();
      postsData = postsData.concat(posts);

      console.log(`Fetched ${posts.length} posts on page ${pageCount + 1}`);

      const linkHeader = response.headers.get('link');
      if (linkHeader) {
        const nextLink = linkHeader.split(',').find(s => s.includes('rel="next"'));
        nextUrl = nextLink ? nextLink.split(';')[0].replace('<', '').replace('>', '').trim() : "";
      } else {
        nextUrl = "";
      }

      pageCount++;
    }

    console.log(`Total posts: ${postsData.length}`);
    return new Response(JSON.stringify({ postsData }), { status: 200 });
  } catch (error) {
    console.error('Error fetching posts feed:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch posts feed' }), { status: 500 });
  }
} 