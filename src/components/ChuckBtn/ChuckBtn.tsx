import { useState } from "react";

import gif from "./chucknorris.gif";
import img from "./chucknorris_1frame.gif";

import "./ChuckBtn.scss";

type ChuckBtnProps = {
  onClick: () => void
}

export default function ChuckBtn({ onClick }: ChuckBtnProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      className="chuckbtn"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      {hovered
        ? <img src={gif} alt="Chuck Norris" />
        : <img src={img} alt="Chuck Norris" />
      }
    </button>
  );
}