

"use client";
import React from 'react'
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function page() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title and description are required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div>
       
        <input   onChange={(e) => setTitle(e.target.value)}    type="text" placeholder='   Title' style={{ height: "40px", fontSize: "100%", boxShadow: " 0 0 10px rgba(10, 10, 10, 10)", marginBottom: "15px", borderRadius: "10px", marginLeft: "20%", border: "1px solid black", width: "940px" }} />
        <input   onChange={(e) => setDescription(e.target.value)}    type="text" placeholder='  Topic Description' style={{ height: "40px", fontSize: "100%", boxShadow: " 0 0 10px rgba(10, 10, 10, 10)", borderRadius: "10px", marginLeft: "20%", border: "1px solid black", width: "940px" }} />

      
      <button   onClick={handleSubmit}  style={{ height: "45px", marginLeft: "20%", borderRadius: "8px", fontWeight: "bolder", fontSize: "110%", boxShadow: " 0 0 10px rgba(10, 10, 10, 10)", marginTop: "15px", backgroundColor: "green", color: "white", width: "110px" }}>Add Topic</button>


    </div>
  )
}







