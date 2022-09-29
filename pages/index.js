import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Image from "next/image";
import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Ben Goulding | Portfolio</title>
        <meta name="description" content="Portfolio website for Ben Goulding" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="text-xl font-burtons">Ben Goulding</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Ben Goulding
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-200">
              Freelancer providing services for your web development and design
              needs. Visit my socials via the links below.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <a href="https://twitter.com/bengouldingdev">
              <AiFillTwitterCircle />
            </a>
            <a href="https://www.linkedin.com/in/bengoulding/">
              <AiFillLinkedin />
            </a>
            <a href="https://www.youtube.com/channel/UCN-iFfYXv_n0J_UFWnXE8dw">
              <AiFillYoutube />
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image
              src={deved}
              layout="fill"
              objectFit="cover"
              alt="Ben Goulding"
            />
          </div>
        </section>

        <section>
          <div className="mt-10 text-center">
            <h3 className="text-3xl py-1 dark:text-white">My Services</h3>
            <p className="text-md py-2 leading-8 text-gray-800 max-w-4xl mx-auto dark:text-gray-200">
              Since the beginning of my self-taught journey as a freelance
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 max-w-4xl mx-auto dark:text-gray-200">
              I offer from a range of services that include Web Development,
              WordPress Development, SEO Optimisation and design.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={design} width={100} height={100} alt="design" />
              <h3 className="text-lg font-medium py-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant, simple designs tailored to you and your
                businesses core values.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">XD</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} alt="design" />
              <h3 className="text-lg font-medium py-8 pb-2">Web Development</h3>
              <p className="py-2">
                Unique, functional pages that reflect your and your companies
                values.
              </p>
              <h4 className="py-4 text-teal-600">Development Tools I Use</h4>
              <p className="text-gray-800 py-1">PHP</p>
              <p className="text-gray-800 py-1">JavaScript</p>
              <p className="text-gray-800 py-1">Laravel</p>
              <p className="text-gray-800 py-1">Vue</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} alt="design" />
              <h3 className="text-lg font-medium py-8 pb-2">
                WordPress Development
              </h3>
              <p className="py-2">Simple, effective, fast.</p>
              <h4 className="py-4 text-teal-600">WordPress Tools I Use</h4>
              <p className="text-gray-800 py-1">PHP</p>
              <p className="text-gray-800 py-1">jQuery</p>
              <p className="text-gray-800 py-1">Elementor</p>
            </div>
          </div>
        </section>
        <section>
          <div className="text-center">
            <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 max-w-4xl mx-auto dark:text-gray-200">
              Since the beginning of my self-taught journey as a freelance
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 max-w-4xl mx-auto dark:text-gray-200">
              I offer from a range of services that include Web Development,
              WordPress Development, SEO Optimisation and design.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                src={web1}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                alt="project"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web2}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                alt="project"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web3}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                alt="project"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web4}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                alt="project"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
