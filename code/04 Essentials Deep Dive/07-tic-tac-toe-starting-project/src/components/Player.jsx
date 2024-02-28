import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  let playerName = <span className="player">{name}</span>;

  function handleEditClick() {
    setIsEditing(true);
  }

  if (isEditing) {
    playerName = <input type="text" required />;
  }

  return (
    <li>
      <span className="player">{playerName}</span>
      <span className="player-symbol">{symbol}</span>
      <button onClick={handleEditClick}>Edit</button>
    </li>
  );
}
