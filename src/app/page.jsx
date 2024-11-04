import Banner from "@/components/banner/Banner";
import CoursesList from "@/components/courses/CoursesList";
import Header from "@/components/header/Header";
import ProfileCard from "@/components/profile/ProfileCard";
import React from "react";

export default function page() {
  const isLogin = false;
  const categories = ["FE", "BE", "AI", "DataAnalytics"];
  return (
    <>
      <Header />

      <main>
        <Banner />
        <ProfileCard />
        <form action="#">
          <label htmlFor="search">검색</label>
          <input type="text" placeholder="어떤 강의를 찾고계시나요?" />
        </form>
        <form action="#">
          <p>카테고리</p>
          {categories.map((category) => (
            <label htmlFor={category}>
              #{category}
              <input type="checkbox" name={category} id={category} />
            </label>
          ))}
        </form>

        <section>
          <CoursesList />
        </section>
      </main>

      <footer>footer</footer>
    </>
  );
}
