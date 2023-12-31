export async function POST(request) {
  const body = await request.json();
  const jsonBody = {
    ...body,
    key: process.env.NEXT_PUBLIC_STABLE_DIFFUSION_KEY,
    model_id: "anything-v5",
    samples: "1",
    num_inference_steps: "30",
    safety_checker: "no",
    enhance_prompt: "yes",
    seed: null,
    guidance_scale: 7.5,
    multi_lingual: "no",
    panorama: "no",
    self_attention: "no",
    upscale: "no",
    embeddings: "embeddings_model_id",
    lora: "lora_model_id",
    webhook: null,
    track_id: null,
  };

  const url = "https://stablediffusionapi.com/api/v4/dreambooth";

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
