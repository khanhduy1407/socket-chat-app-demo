import onlineIcon from "../../icons/onlineIcon.png";

import "./TextContainer.css";

const TextContainer = ({ users }: { users: any }) => {
  //

  return (
    <div className="textContainer">
      <div>
        <h1>
          Realtime Chat Demo{" "}
          <span role="img" aria-label="emoji">
            💬
          </span>
        </h1>
        <h2>
          Công nghệ sử dụng: React, Express, Node và Socket.IO{" "}
          <span role="img" aria-label="emoji">
            ❤️
          </span>
        </h2>
      </div>
      {users ? (
        <div>
          <h1>Những người hiện đang trò chuyện:</h1>
          <div className="activeContainer">
            <h2>
              {users.map(({ name }: { name: any }) => (
                <div key={name} className="activeItem">
                  {name}
                  <img alt="Online Icon" src={onlineIcon} />
                </div>
              ))}
            </h2>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default TextContainer;
