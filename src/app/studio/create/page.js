"use client";

import { useEffect, useState } from "react";
import "../../globals.css";
import Image from "next/image";

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

export default function Home() {
  const jsonBody = {};

  const [positivePrompt, setPositivePrompt] = useState("");
  const [negativePrompt, setNegativePrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [requestSent, setRequestSent] = useState(false);
  const [imageURL, setImageURL] = useState("https://picsum.photos/300/300");
  const [jobID, setJobID] = useState("");
  // const response = await getImageFromPrompt(jsonBody);
  // console.log(response.body.id);
  const onChangeHandler = (event) => {
    const name = event.target.name;
    if (name === "positive") {
      setPositivePrompt(event.target.value);
    } else {
      setNegativePrompt(event.target.value);
    }
  };

  const createJob = async () => {
    const url = "http://localhost:3000/api/generateImage";
    const body = {
      prompt: positivePrompt,
      negative_prompt: negativePrompt,
      width: "512",
      height: "512",
    };
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();
    setJobID(result.responseData.id);
    console.log("job has been created", result.responseData.id);
  };

  const handleClick = async () => {
    if (!requestSent) {
      console.log("doing job creation for the first time");
      await createJob();
      setIsLoading(true);
      setRequestSent(true);
      console.log("jobID has been set at this time");
    }
  };

  useEffect(() => {
    if (isLoading && requestSent) checkJobStatus();
  }, [jobID]);

  async function checkJobStatus() {
    if (jobID !== "" && jobID !== undefined && jobID !== null) {
      const queryJob = await queryJobID(jobID);
      if (queryJob.status) {
        setIsLoading(false);
        console.log("query job output ", queryJob.outputArray);
        setImageURL(queryJob.outputArray[0]);
        console.log(imageURL);
        return;
      } else {
        setTimeout(() => {
          checkJobStatus();
        }, 10000);
      }
    }
  }

  const queryJobID = async (jobID) => {
    const url = "http://localhost:3000/api/fetchingImage";
    const body = {
      request_id: jobID,
    };
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const jsonRes = await res.json();
    console.log("jsonRes", jsonRes);
    const outputArray = jsonRes.responseData.output;
    if (outputArray.length === 1) {
      return { outputArray, status: true };
    } else {
      return { outputArray, status: false };
    }
  };

  return (
    <>
      <section className="rounded-xl pt-32" id="intro">
        <div className="hero flex-row relative flex items-center justify-center h-1/2 ">
          <div className="w-1/2 rounded-lg">
            {isLoading && requestSent && imageURL !== "" ? (
              <img
                src={imageURL}
                width={300}
                height={300}
                alt="hehehe"
                className="justify-center items-center"
              />
            ) : (
              <>
                <div className="px-4 py-2 bg-yellow-200 rounded-t-lg ">
                  <label className="mb-2 text-black ">Positive prompt</label>
                  <textarea
                    rows="4"
                    className="w-full px-2 my-2 text-sm rounded-lg text-gray-900 bg-white border-1  "
                    placeholder="Write a positive prompt..."
                    name="positive"
                    onChange={onChangeHandler}
                    value={positivePrompt}
                  ></textarea>
                </div>
                <div className="px-4 py-2 bg-yellow-200 ">
                  <label className="mb-2 text-black ">Negative prompt</label>
                  <textarea
                    rows="4"
                    name="negative"
                    className="w-full px-2 my-2 text-sm rounded-lg text-gray-900 bg-white border-1 "
                    placeholder="Write a negative prompt..."
                    onChange={onChangeHandler}
                    value={negativePrompt}
                  ></textarea>
                </div>
                <div className="flex items-center bg-yellow-200 justify-between px-3 py-4 rounded-b-lg">
                  {!isLoading ? (
                    <button
                      onClick={handleClick}
                      className="inline-flex items-center py-2.5 px-4 text-sm font-semibold text-center text-black bg-blue-700 rounded-lg "
                      style={{ background: "#F7A34F" }}
                    >
                      GENERATE ARTWORK
                    </button>
                  ) : null}
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
