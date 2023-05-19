import Head from "next/head";
import styles from "../styles/Home.module.css";
import React from "react";
import ContainerBlock from "../components/ContainerBlock";
import Thinkific from "@components/Thinkific";

export default function Home() {
  return (
    <ContainerBlock
      title="Waleed Shahid - Full Stack Developer"
      description="I've been working with Thinkific for over 3 years now. I've worked with over 50 clients and have built over 100 course websites on Thinkific. I've worked with clients like NAS Academy, TwinRay Academy, theChapter Academy, and many more."
    >
      <Thinkific />
    </ContainerBlock>
  );
}
