import { useState } from "react";
import { Link } from "react-router-dom";

import "./Join.css";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContaier">
        <h1 className="heading">Tham gia</h1>
        <div>
          <input
            placeholder="Tên của bạn"
            className="joinInput"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Mã phòng"
            className="joinInput mt-20"
            type="text"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
          />
        </div>
        <Link
          onClick={(e) => (!name || !room) && e.preventDefault()}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className="button mt-20" type="submit">
            Tham gia
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
