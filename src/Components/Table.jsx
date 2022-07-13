import React, { useEffect, useState } from "react";
import Prompt from "./Prompt";
import dataobj from "../data.json";
import "./Table.css";

const Table = () => {
  //usestate which stores the data which we got from the data.json file
  const [user, setUser] = useState([]);

  useEffect(() => {
    setUser(dataobj);
  }, []);

  const popupPrompt = (e) => {
    changeState(true);
    changeId(e.target.id);
  };

  const [promptState, changeState] = useState(false);
  const [id, changeId] = useState();
  const [userData, setUserData] = useState({});
  const [isUpdating, setIsUpdating] = useState(false);

  //function to make the changes in the old data. parameters we get from Prompt.jsx component.
  const handleEdit = (name, tempsem1, tempsem2, tempsem3, tempsem4) => {
    //using map function on users array which contains student objects to change the data
    user.map((element, index) => {
      if (element.name === name) {
        user[index] = {
          name: name,
          sem1: tempsem1 === undefined ? element.sem1 : tempsem1,
          sem2: tempsem2 === undefined ? element.sem2 : tempsem2,
          sem3: tempsem3 === undefined ? element.sem3 : tempsem3,
          sem4: tempsem4 === undefined ? element.sem4 : tempsem4,
        };
      }
    });
  };

  //fucnction for search functionality
  const filterStudent = (e) => {
    if (e.target.value !== "") {
      setUser(
        user.filter(function (student) {
          let str = student.name.substr(0, e.target.value.length);
          console.log(str);
          if (str.toLowerCase() === e.target.value.toLowerCase())
            return student;
        })
      );
    } else {
      setUser(dataobj);
    }
  };

  return (
    <div className="student_table">
      <table border={0}>
        <thead>
          <th>Student Name</th>
          <th colSpan={2}>First Year</th>
          <th colSpan={2}>Second Year</th>
          <th colSpan={1}></th>
        </thead>
        <thead>
          <th>
            <input
              type="text"
              id="searchStudent"
              placeholder="Search Student"
              onChange={filterStudent}
            />
          </th>
          <th>Semester 1</th>
          <th>Semester 2</th>
          <th>Semester 3</th>
          <th>Semester 4</th>
          <th></th>
        </thead>
        {
          <tbody>
            {user?.map((student, index) => {
              return (
                <tr key={index}>
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
                        console.log(userData);
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
        }
      </table>
      {
        <Prompt
          trigger={promptState}
          setTrigger={changeState}
          id={id}
          isUpdating={isUpdating}
          setIsUpdating={setIsUpdating}
          userData={userData}
          handleEdit={handleEdit}
        />
      }
    </div>
  );
};

export default Table;
