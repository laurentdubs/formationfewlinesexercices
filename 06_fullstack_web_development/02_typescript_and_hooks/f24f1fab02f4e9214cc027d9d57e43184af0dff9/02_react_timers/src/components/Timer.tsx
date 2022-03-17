import React from "react";

type TimerProps = {
  timerId: string;
  removeTimer: (createdAt: string) => void;
};

export const Timer: React.FC<TimerProps> = ({ timerId, removeTimer }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  }, [count]);

  return (
    <li className="list-group-item d-flex align-items-center  justify-content-between" id={timerId}>
      <p className="text-center">{count} seconds</p>
      <div className="btn btn-danger" onClick={removeTimer}>
        Delete
      </div>
    </li>
  );
};
