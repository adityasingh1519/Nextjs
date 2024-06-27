import { NextRequest } from "next/server";
import { comments } from "../comments/data";

// export async function GET() {
//   return Response.json(comments);
// }

export async function GET(request: NextRequest) {

  const searchParam = request.nextUrl.searchParams;
  const query = searchParam.get("query");
  const filterComment = query ? 
  comments.filter(comment => comment.text.includes(query)) : comments
  return Response.json(filterComment)
}

// export async function POST(request: Request) {
//   const comment = await request.json();

//   const newcomen = {
//     id: comments.length + 1,
//     text: comment.text,
//   };
//   comments.push(newcomen);
//   return new Response(JSON.stringify(newcomen), {
//     headers: {
//       "content-type": "application/json",
//     },
//     status: 201,    
//   });
// }