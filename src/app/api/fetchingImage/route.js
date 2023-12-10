export async function POST(request) {
  const body = await request.json();
  const jsonBody = {
    ...body,
    key: process.env.NEXT_PUBLIC_STABLE_DIFFUSION_KEY,
  };

  const url = "https://stablediffusionapi.com/api/v4/dreambooth/fetch";

  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(jsonBody),
    headers: {
      "Content-Type": "application/json",
    },
  });
  // Send the response from the stable diffusion API back to the client
  const responseData = await response.json();
  return Response.json({ responseData });
}
