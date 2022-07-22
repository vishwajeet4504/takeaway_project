import { useState } from "react";
import React from "react";
import "./Add.css";
const Add = (props) => {
  const [changed, setChanged] = useState(false);

  //storing the data which we got in the props which is supposed to be changed
  //   const { name, sem1, sem2, sem3, sem4 } = props?.userData;

  //usestates to change input

  const [name, changeName] = useState("");
  const [sem2, changeSem2] = useState(-100);
  const [sem3, changeSem3] = useState(-100);
  const [sem4, changeSem4] = useState(-100);
  const [sem1, changeSem1] = useState(-100);
  useState(() => {
    changeName("");
    changeSem1(-100);
    changeSem2(-100);
    changeSem3(-100);
    changeSem4(-100);
    setChanged(false);
  }, []);
  return props.isAdd ? (
    <div className="popup">
      <div className="popupData">
        <div className="popup_content">
          <h3>Enter New Student Details</h3>
          <form>
            <input
              required
              id="name"
              type="text"
              placeholder="Enter Student's full Name"
              onChange={(e) => {
                console.log(e.target.value);
                changeName(e.target.value);
                setChanged(true);
              }}
            />
            <input
              id="sem1"
              type="number"
              required
              placeholder="Sem 1 Marks"
              onInput={(e) => {
                if (e.target.value === "") changeSem1(-100);
                changeSem1(e.target.value);
                setChanged(true);
              }}
            />
            <input
              id="sem2"
              type="number"
              required
              placeholder="Sem 2 Marks"
              onChange={(e) => {
                if (e.target.value === "") changeSem2(-100);
                changeSem2(e.target.value);
                setChanged(true);
              }}
            />
            <input
              id="sem3"
              type="number"
              required
              placeholder="Sem 3 Marks"
              onInput={(e) => {
                if (e.target.value === "") changeSem3(-100);
                changeSem3(e.target.value);
                setChanged(true);
              }}
            />
            <input
              id="sem4"
              type="number"
              required
              placeholder="Sem 4 Marks"
              onChange={(e) => {
                if (e.target.value.length === 0) changeSem4(-100);
                changeSem4(e.target.value);
                setChanged(true);
              }}
            />
            <div className="popup_buttons">
              <button
                id="save"
                type="submit"
                disabled={!changed}
                onClick={(e) => {
                  if (
                    name === "" ||
                    sem1 < 0 ||
                    sem2 < 0 ||
                    sem3 < 0 ||
                    sem4 < 0
                  )
                    alert("please fill all the fields properly");
                  else {
                    if (
                      sem1 < 0 ||
                      sem1 > 100 ||
                      sem2 < 0 ||
                      sem2 > 100 ||
                      sem3 < 0 ||
                      sem3 > 100 ||
                      sem4 < 0 ||
                      sem4 > 100
                    ) {
                      alert("semester marks has to between 0 and 100");
                    } else {
                      props.handleAdd(name, sem1, sem2, sem3, sem4);
                      props.changeAddState(false);
                    }
                  }
                  e.preventDefault();
                }}
              >
                Save
              </button>
              <button
                id="Cancel"
                onClick={(e) => {
                  props.changeAddState(false);
                  e.preventDefault();
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

export default Add;
