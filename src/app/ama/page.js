"use client";
import React, { useEffect } from "react";
import { createRoom } from "../../lib/createRoom";
import NavBar from "@/components/UI/NavBar";
import { AccessToken, Role } from "@huddle01/server-sdk/auth";

import { useRoom } from "@huddle01/react/hooks";

export const accessToken = new AccessToken({
  apiKey,
  roomId: roomId,
  role: Role.HOST,
  permissions: {
    admin: true,
    canConsume: true,
    canProduce: true,
    canProduceSources: {
      cam: true,
      mic: true,
      screen: true,
    },
    canRecvData: true,
    canSendData: true,
    canUpdateMetadata: true,
  },
  options: {
    metadata: {
      // you can add any custom attributes here which you want to associate with the user
      walletAddress: "axit.eth",
    },
  },
});

const Page = () => {
    const [ roomId, setRoomId ] = useState('');
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
      console.log(roomId);
    };

      fetchData();
      setRoomId(roomId);
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
