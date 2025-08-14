"use client"
import { headers } from "next/headers";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Room() {
  const router = useRouter();
  const [slug, setSlug] = useState("");
  const [rooms, setRooms] = useState<any[]>([]);

  async function fetchRooms() {
    try {
      const token = localStorage.getItem("token"); // read the token you stored at signin
      if (!token) {
        console.error("No token found. User might not be signed in.");
        return;
      }
      const response = await fetch("http://localhost:3002/rooms",{
        method:"GET",
        headers:{
          "Content-Type": "application/json",
          "Authorization":  token,
        }});
      console.log(response)
      if (!response.ok) {
        throw new Error(`Server error ${response.status}`);
      }
      const data = await response.json();
      setRooms(data.rooms?.rooms || []);
    } catch (error) {
      console.error("Error fetching rooms:", error);
    }
  }

  useEffect(() => {
    fetchRooms();
  }, []);

  async function createRoom() {
    try {
      const response = await fetch("http://localhost:3002/room", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": localStorage.getItem("token") || "",
        },
        body: JSON.stringify({ name:slug }),
      });

      if (!response.ok) {
        console.error(await response.text()); // Debug unexpected HTML/error
        return;
      }

      const roomData = await response.json(); // <-- parse JSON first
      setSlug("");
      await fetchRooms();
    } catch (error) {
      console.error("Error creating room:", error);
    }
  }

  function gotoRoom(roomid: number) {
    router.push(`/canvas/${roomid}`);
  }

  return (
    <div className="w-screen h-screen p-4 bg-black">
      <div className="h-40 flex flex-col justify-center items-center gap-4 border-b border-white pb-4">
        <p className="text-center text-white text-4xl">Create Room</p>
        <input
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          type="text"
          placeholder="Please enter your Room Name"
          className="text-white border border-white px-4 py-2 rounded-2xl w-80"
        />
        <button
          onClick={createRoom}
          className="border rounded-2xl px-4 py-2 text-white hover:bg-white hover:text-black"
        >
          Create Room
        </button>
      </div>

      <div className="pt-4 flex flex-col justify-center items-center gap-4">
        {rooms.map(room => (
          <div
            key={room.id}
            onClick={() => gotoRoom(room.id)}
            className="w-full px-4 py-2 text-white border border-gray-700 rounded-2xl cursor-pointer hover:bg-gray-800"
          >
            {room.slug || "Unnamed Room"}
          </div>
        ))}
      </div>
    </div>
  );
}