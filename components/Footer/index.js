import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
  return (
    <div className="flex flex-col justify-center items-center mt-5 laptop:mt-40 p-2 laptop:p-0">
      <div className="text-center">
        <h1 className="text-4xl text-bold">Contact </h1>
        <div className="mt-10">
          <h1 className="text-3xl tablet:text-6xl items-center laptop:text-6xl laptopl:text-8xl text-bold inline-block">
            {`LET'S WORK TOGETHER`}
          </h1>
          <div className="mt-4">
            <Button
              type="primary"
              onClick={() => window.open("mailto:sonaibarua55@gmail.com")}
            >
              Schedule a call
            </Button>
          </div>
          <div className="mt-10 flex justify-center">
            <Socials />
          </div>
        </div>
      </div>
      <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
        Made With ❤ by{" "}
        <Link href="https://www.linkedin.com/in/sonai-barua/">
          <a className="underline underline-offset-1">SonaiBarua</a>
        </Link>
      </h1>
    </div>
  );
};

export default Footer;
