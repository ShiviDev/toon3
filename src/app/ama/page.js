import React, { useEffect } from "react";
import { createRoom } from "./api";
const Page = () => {
  useEffect(() => {
    const fetchData = async () => {
      const data = await createRoom();
      console.log(data);
    };

    fetchData();
  }, []);
  return <div>hello</div>;
};

export default Page;
