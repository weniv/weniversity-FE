import React from "react";

export async function generateStaticParams() {
  const courses = [{ id: "1" }, { id: "2" }];

  return courses.map((course) => ({
    id: course.id,
  }));
}
export default function lecture({ params }) {
  return <section>강의실</section>;
}
