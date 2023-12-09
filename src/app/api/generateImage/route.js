import { json } from "micro";

export async function POST(request) {
  console.log(request.params);
  const body = JSON.parse(request.body);

  return new Response(body);
  // return new Response(testResponse.body);
  // const body2 = NextRequest.body;

  // console.log("body", body2);


  // return new Response(response);
}
