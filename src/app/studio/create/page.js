// import NavBar from "../../../components/UI/NavBar";
import "../../globals.css";

async function getImageFromPrompt(body) {
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

  const url = "https://stablediffusionapi.com/api/v4/dreambooth/fetch";

  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(jsonBody),
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log("from function", response.body.id);

  return response;
}

export default async function Home() {
  const jsonBody = {
    prompt:
      "actual 8K portrait photo of gareth person, portrait, happy colors, bright eyes, clear eyes, warm smile, smooth soft skin, big dreamy eyes, beautiful intricate colored hair, symmetrical, anime wide eyes, soft lighting, detailed face, by makoto shinkai, stanley artgerm lau, wlop, rossdraws, concept art, digital painting, looking into camera",
    negative_prompt:
      "painting, extra fingers, mutated hands, poorly drawn hands, poorly drawn face, deformed, ugly, blurry, bad anatomy, bad proportions, extra limbs, cloned face, skinny, glitchy, double torso, extra arms, extra hands, mangled fingers, missing lips, ugly face, distorted face, extra legs, anime",
    width: "512",
    height: "512",
  };

  const response = await getImageFromPrompt(jsonBody);
  console.log(response.body.id);
  return (
    <>
      {/* <NavBar /> */}
      <h1>Hellow World!</h1>
      <p>{response.body.id}</p>
    </>
  );
}
