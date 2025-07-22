import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { token } = await req.json();

  if (!token) {
    return NextResponse.json({ message: "Token is required" }, { status: 400 });
  }

  const responseQuery = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_API as string, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({
        query: `
          query {
            me {
              id
              name
              username
              schoolId
              role
            }
          }
        `,
      }),
    })
    
  const result = await responseQuery.json();
  
  const response = NextResponse.json({ data: result });


  return response;
}
