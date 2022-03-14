import React from "react";

export const HideOrNotHide = () => {
  // Code here
  const [hidden, setHidden] = React.useState(true);

  return (
    <div>
      <button onClick={() => setHidden(!hidden)}>Click me: {hidden ? "Hide content" : "Reveal Content"}</button>
      {hidden ? <p>some text</p> : null}
    </div>
  );
};
