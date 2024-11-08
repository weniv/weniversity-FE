import React from "react";

export async function generateStaticParams() {
  const courses = [{ id: "1" }, { id: "2" }];

  return courses.map((course) => ({
    id: course.id,
  }));
}

export default function course({ params }) {
  return <div>Course {params.id}</div>;
}
