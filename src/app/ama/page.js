"use client"
import React, { useEffect } from "react";
import { createRoom } from "../../lib/createRoom"
import NavBar from "@/components/UI/NavBar";
const Page = () => {
    useEffect(() => {
        const fetchData = async () => {
            const data = await createRoom();
            console.log(data);
        };

        fetchData();
    }, []);
    return (<> <div style={{ color: 'white  ' }}>hello</div></>);


};

export default Page;
