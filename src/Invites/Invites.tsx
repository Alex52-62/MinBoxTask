import React, { FC, useState, useCallback, useEffect } from "react";

import "./style.css";

interface Props {
  invites: string[];
  onAdd: (name: string) => void;
}

export const Invites: FC<Props> = ({ invites, onAdd }) => {
  const [name, setName] = useState("");
  const handleChangeName = useCallback(
    (event: any) => {
      setName(event.target.value);
    },
    [setName]
  );
  const handleSubmit = useCallback(() => {
    setName('');
    onAdd(name);
  }, [name, onAdd]);

  const getRandomInRange = (min:number, max:number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    setName('');
  }, [invites]);

  return (
    <div className="invites">
      <div className="invites--form">
        <input
          className="invites--form-input"
          onChange={handleChangeName}
          type="text"
          value={name}
        />
        <button className="invites--form-submit" onClick={handleSubmit}>
          Invite
        </button>
      </div>
      <div className="invites--delimiter" />
      <ul className="invites--items">
        {invites.map(name => (
          <li className="invites--item" key={getRandomInRange(1,1000)}>{name}</li>
        ))}
      </ul>
    </div>
  );
};
