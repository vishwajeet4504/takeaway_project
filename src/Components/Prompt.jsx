import React, { createContext, useEffect, useState } from "react";
import "./Prompt.css";

const Prompt = (props) => {
  const [changed, setChanged] = useState(false);
  const { name, sem1, sem2, sem3, sem4 } = props?.userData;
  const [cngdata, setchgdata] = useState();
  const [changedUser, funChangedUser] = useState();
  const [user, setUser] = useState({
    name,
    sem1,
    sem2,
    sem3,
    sem4,
  });
  useEffect(() => {}, [user]);
  return props.trigger ? (
    <div className="popup">
      <div className="popupData">
        <div className="popup_content">
          <h2>Edit {name}'s Data</h2>

          <input
            id="sem1"
            defaultValue={sem1}
            type="number"
            name="sem1"
            onChange={(e) => {
              setUser({
                ...user,
                sem1: e.target.value,
              });
              setChanged(true);
            }}
            placeholder="enter sem1 marks"
          />
          <input
            id="sem2"
            defaultValue={sem2}
            onChange={(e) => {
              setUser({
                ...user,
                sem2: e.target.value,
              });
              setChanged(true);
            }}
            type="number"
            name="sem2"
            placeholder="enter sem2 marks"
          />
          <input
            id="sem3"
            defaultValue={sem3}
            onChange={(e) => {
              setUser({
                ...user,
                sem3: e.target.value,
              });
              setChanged(true);
            }}
            type="number"
            name="sem3"
            placeholder="enter sem3 marks"
          />
          <input
            id="sem4"
            defaultValue={sem4}
            onChange={(e) => {
              setUser({
                ...user,
                sem4: e.target.value,
              });
              setChanged(true);
            }}
            type="number"
            name="sem4"
            placeholder="enter sem4 marks"
          />
          <div className="popup_buttons">
            <button
              id="save"
              disabled={!changed}
              onClick={() => {
                props.setIsUpdating(true);
                const filteredUser = props.data.map((j) => {
                  if (user.name !== j.name) {
                    return j;
                  }
                });
                const ussr = [...filteredUser, user];
              }}
            >
              Save
            </button>
            <button
              id="Cancel"
              onClick={() => {
                props.setTrigger(false);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Prompt;
