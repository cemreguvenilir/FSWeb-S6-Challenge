import { useState } from "react";

export default function Accordeon(props) {
  const { children, title } = props;
  const [closed, setClosed] = useState(true);
  const toggle = () => setClosed(!closed);
  return (
    <div className="accordeon">
      <div className="accordeon__title" onClick={() => toggle()}>
        {title}{" "}
      </div>
      {!closed && <div className="accordeon__detail">{children} </div>}
    </div>
  );
}
