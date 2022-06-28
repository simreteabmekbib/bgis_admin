import React from "react";

export const columns = [
    {
      title: "Subject",
      field: "name"
    },
    {
      title: "Type",
      field: "type"
    },
    {
      title: "Weight",
      field: "weight"
    },
    {
      title: "Result",
      field: "result"
    }
  ];

  export const rows= [
    { result: "10", weight: "10%", type: "test 1", name: "Physics"},
    { result: "20", weight: "10%", type: "test 2", name: "Physics" },
    { result: "18", weight: "10%", type: "test 1", name: "Chemistry"},
    { result: "16", weight: "20%", type: "mid", name: "Physics"},
    { result: "40",  weight: "50%", type: "final", name: "Amharic"},
    { result: "19", weight: "10%", type: "test 2", name: "Chemistry" },
    { result: "14",  weight: "10%", type: "test 1", name: "Biology" },
    { result: "16", weight: "10%", type: "test 2", name: "Biology" },
  ];
