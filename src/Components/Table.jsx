import React, { useState, useEffect, useContext } from "react";
import "./Table.css";
import Prompt from "./Prompt";
import dataobj from "../data.json";
import AppContext from "./Prompt";
const Table = () => {
  const [data, setData] = useState();
  const [user, setUser] = useState(dataobj);
  const popupPrompt = (e) => {
    changeState(true);
    changeId(e.target.id);
  };

  const [promptState, changeState] = useState(false);
  const [id, changeId] = useState();
  const [userData, setUserData] = useState({});
  const [isUpdating, setIsUpdating] = useState(false);

  const context = useContext(AppContext);
  useEffect(() => {}, [user]);

  return (
    <div className="student_table">
      <table border={0}>
        <thead>
          <th></th>
          <th colSpan={2}>First Year</th>
          <th colSpan={2}>Second Year</th>
          <th colSpan={1}></th>
        </thead>
        <thead>
          <th>Student Name</th>
          <th>Semester 1</th>
          <th>Semester 2</th>
          <th>Semester 3</th>
          <th>Semester 4</th>
          <th></th>
        </thead>
        {!isUpdating && (
          <tbody>
            {user?.map((student, index) => {
              return (
                <tr>
                  <td>{student.name}</td>
                  <td>{student.sem1}</td>
                  <td>{student.sem2}</td>
                  <td>{student.sem3}</td>
                  <td>{student.sem4}</td>
                  <td>
                    <button
                      onClick={() => {
                        setUserData(student);
                        popupPrompt();
                      }}
                      id={index}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        )}
      </table>
      {
        <Prompt
          trigger={promptState}
          setTrigger={changeState}
          id={id}
          data={data}
          isUpdating={isUpdating}
          setIsUpdating={setIsUpdating}
          userData={userData}
        />
      }
    </div>
  );
};

export default Table;
