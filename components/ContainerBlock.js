import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ContainerBlock({ children, ...customMeta }) {
  const router = useRouter();

  const meta = {
    title: "Murtaza Sarwar - Full Stack Development Expert",
    description: `I've been working as a Full Stack Developer for over 5 years now. I've worked with over 50 clients and have built over 100 custom full stack applications on ReactJS, NodeJS, NextJS, MERN Stack. I've worked with clients like Rhino Systems, TwinRay Academy, theChapter Academy, and many more.`,
    image: "/avatar.jpeg",
    type: "website",
    ...customMeta,
  };
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <link rel="shortcut icon" type="image/png" href="/self-favicon.jpg" />
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://murtazasarwar.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://murtazasarwar.com${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Murtaza Sarwar" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@murtazasarwar" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <main className="dark:bg-gray-800 w-full">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
}
