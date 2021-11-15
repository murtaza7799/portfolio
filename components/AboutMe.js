import React from "react";
import userData from "@constants/data";

export default function AboutMe() {
  return (
    <section className="bg-[#F1F1F1] dark:bg-gray-900 py-10">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row">
        <div className="text-container max-w-6">
          <h1 className="text-6xl md:text-7xl max-w-lg font-bold my-10 dark:text-gray-600 text-center md:text-left" >
            Meet Waleed Shahid
          </h1>
          <p className="text-lg mx-4">
            I have 3+ years SOLID experience working as a Website Developer focused on UX .I work with Javascript, HTML, CSS, SASS, React, NextJS, PHP, NODEJS, Express, and Tailwind CSS.
            <br />
            User experience matters the most to me, and I love to develop great User Experiences that brings great results to your business as well as the audience.
            <br />
            I have worked with all the popular CMS and LMS Platforms including, WordPress, Shopify, Teachable, Thinkific and any similar platform.
          </p>
        </div>
        <div className="w-full">
          <img src={userData.avatarUrl} alt="Waleed" className="shadow rounded-full" />
        </div>
      </div>
    </section>
  );
}
