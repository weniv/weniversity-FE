import React from "react";
import lectureData from "../../../public/data/lecture.json";
import CourseCard from "./CourseCard";

export default function CoursesList() {
  return (
    <ul>
      {lectureData.map((lecture, index) => (
        <li key={index}>
          <CourseCard data={lecture} />
        </li>
      ))}
    </ul>
  );
}
