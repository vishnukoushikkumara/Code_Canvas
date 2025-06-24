import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/rooms.css";

function RoomSelection() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [roomId, setRoomId] = useState("");

  useEffect(() => {
    // Redirect to the login page if the user is not authenticated
    const jwtoken = localStorage.getItem("jwtoken");
    if (jwtoken === null || jwtoken === undefined) {
      navigate("/login");
    }
  });

  const joinRoom = (event) => {
    event.preventDefault();
    const trimmedUsername = username.trim();
    const trimmedRoomId = roomId.trim();

    if (!trimmedUsername) {
      alert("Please enter a username.");
      return;
    }
    if (!trimmedRoomId) {
      alert("Please enter a Room ID to join.");
      return;
    }

    setUsername(trimmedUsername);
    setRoomId(trimmedRoomId);

    navigate(`/rooms/${trimmedRoomId}`, {
      state: { username: trimmedUsername },
    });
  };

  const createRoom = (event) => {
    event.preventDefault();
    const trimmedUsername = username.trim();

    if (!trimmedUsername) {
      alert("Please enter a username to create a room.");
      return;
    }

    setUsername(trimmedUsername);
    let newRoomId = roomId;
    if (!roomId.trim()) {
      newRoomId = Math.random().toString(36).substring(2, 8);
    }
    navigate(`/rooms/${newRoomId}`, { state: { username: trimmedUsername } });
  };

  return (
    <div className="room-page">
      <h1>Get Started: Join or Create a Room </h1>
      <div className="form-container">
        <form>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="User Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
          />
          {/* <br /> */}
          <label htmlFor="roomId">RoomId</label>
          <input
            type="text"
            id="roomId"
            name="roomId"
            placeholder="Not needed if to create Room"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            autoComplete="off"
          />
          {/* <br /> */}
          <button onClick={joinRoom}>Join Room</button>
          <button onClick={createRoom}>Create Room</button>
        </form>
      </div>
    </div>
  );
}

export default RoomSelection;
