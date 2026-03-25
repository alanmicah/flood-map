import { useState } from "react";
import { FloodIcon } from "./FloodIcon";
import { BoroughPopup } from "../Popup/BoroughPopup";

export const Borough = ({ name, data }) => {
  const [selected, setSelected] = useState(false);

  return (
    <g onClick={() => setSelected(true)}>
      <path d="M10 10 L100 10 L100 100 Z" fill="#ddd" />

      {data && <FloodIcon severity={data.severity} />}

      {selected && (
        <BoroughPopup
          name={name}
          data={data}
          onClose={() => setSelected(false)}
        />
      )}
    </g>
  );
};