import { useState, useEffect } from "react";
import StudentService from "../Routes/StudentService";

// const [resultData, setResultData] = useState([]);

// useEffect(() => {
   
//   let studentService = new StudentService();
//     studentService
//     .getResultById()
//     //.then((result) => console.log(result.data[0]));
//     .then((result) => {
//       setResultData(result.data);
//     });
// }, []);


export const columns = [
    {
      title: "Subject",
      field: "id"
    },
    {
      title: "Type",
      field: "interviewResult"
    },
    {
      title: "Weight",
      field: "examResult"
    },
    // {
    //   title: "Result",
    //   field: "result"
    // }
  ];

  // export {resultData, columns}

  // export const rows= [
  //   { result: "10", weight: "10%", type: "test 1", name: "Physics"},
  //   { result: "20", weight: "10%", type: "test 2", name: "Physics" },
  //   { result: "18", weight: "10%", type: "test 1", name: "Chemistry"},
  //   { result: "16", weight: "20%", type: "mid", name: "Physics"},
  //   { result: "40",  weight: "50%", type: "final", name: "Amharic"},
  //   { result: "19", weight: "10%", type: "test 2", name: "Chemistry" },
  //   { result: "14",  weight: "10%", type: "test 1", name: "Biology" },
  //   { result: "16", weight: "10%", type: "test 2", name: "Biology" },
  // ];
