import { type NextRequest } from "next/server";
import { headers } from "next/headers";

export async function GET(request: NextRequest) {
  const requestHeader = new Headers(request.headers);
  const haderList = headers();

  const theme = request.cookies.get("theme");

  console.log(theme);

  console.log(requestHeader.get("Authorization"));
  console.log(haderList.get("Authorization"));
  return new Response("<h1>profile Api Woken</h1>", {
    headers: {
      "content-type": "text/html",
      "Set-Cookie": "theme=dark",
    },
  });
}

// export async function GET() {
//   return new Response("Profile Api data ");
// }
