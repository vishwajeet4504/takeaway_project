import React, { useEffect, useState } from "react";
import "./Prompt.css";

const Prompt = (props) => {
  //changed usestate is used to check if there are any changes made so that the save button becomes visible
  const [changed, setChanged] = useState(false);

  //storing the data which we got in the props which is supposed to be changed
  const { name, sem1, sem2, sem3, sem4 } = props?.userData;

  //usestates to change the sem marks when editing is done
  const [tempsem1, changeSem1] = useState(sem1);
  const [tempsem2, changeSem2] = useState(sem2);
  const [tempsem3, changeSem3] = useState(sem3);
  const [tempsem4, changeSem4] = useState(sem4);

  useEffect(() => {
    changeSem1(sem1);
    changeSem2(sem2);
    changeSem3(sem3);
    changeSem4(sem4);
  }, [props?.userData]);
  return props.trigger ? (
    <div className="popup">
      <div className="popupData">
        <div className="popup_content">
          <h2>Edit {name}'s Data</h2>
          <form>
            <input
              id="sem1"
              type="number"
              defaultValue={sem1}
              onInput={(e) => {
                changeSem1(e.target.value);
                setChanged(true);
              }}
            />
            <input
              id="sem2"
              type="number"
              defaultValue={sem2}
              onInput={(e) => {
                changeSem2(e.target.value);
                setChanged(true);
              }}
            />
            <input
              id="sem3"
              type="number"
              defaultValue={sem3}
              onInput={(e) => {
                changeSem3(e.target.value);
                setChanged(true);
              }}
            />
            <input
              id="sem4"
              type="number"
              defaultValue={sem4}
              onInput={(e) => {
                changeSem4(e.target.value);
                setChanged(true);
              }}
            />
            <div className="popup_buttons">
              <button
                id="save"
                type="submit"
                disabled={!changed}
                onClick={() => {
                  props.setIsUpdating(true);

                  //passing the data back to the Table.jsx component
                  props.handleEdit(
                    props.userData.name,
                    tempsem1,
                    tempsem2,
                    tempsem3,
                    tempsem4
                  );
                  props.setTrigger(false);
                }}
              >
                Save
              </button>
              <button
                id="Cancel"
                onClick={() => {
                  // setUser({
                  //   name : props.name,
                  //   sem1 :
                  // })
                  props.setTrigger(false);
                  //   props.onClick((event)=>{
                  //     props.onChangeevent.)
                  //   })
                  // }}
                  // >
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Prompt;
