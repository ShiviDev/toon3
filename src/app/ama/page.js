"use client";
import React, { useEffect } from "react";
import { createRoom } from "../../lib/createRoom";
import NavBar from "@/components/UI/NavBar";
import { AccessToken, Role } from "@huddle01/server-sdk/auth";

import { useRoom } from "@huddle01/react/hooks";

const Page = () => {
  const [roomId, setRoomId] = useState("");
  const { joinRoom, leaveRoom } = useRoom({
    onJoin: () => {
      console.log("joined");
    },
    onLeave: () => {
      console.log("left");
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await createRoom();
      const { roomId } = data;
      setRoomId(roomId);
    };

    fetchData();
  }, [roomId]);
  return (
    <>
      <div>
        <button onClick={() => joinRoom(roomId)}>Join Room</button>
        <button onClick={() => leaveRoom(roomId)}>Leave Room</button>
      </div>
    </>
  );
};

export default Page;
