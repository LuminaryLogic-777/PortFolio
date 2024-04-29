import React from "react";
import Button from "../Button";
import { useRouter } from "next/router";
import yourData from "../../data/portfolio.json";

const Socials = ({ className }) => {
  const router = useRouter();

  const handleSocialClick = (link) => {
    if (link.startsWith("http")) {
      window.open(link, "_blank");
    } else {
      router.push(link);
    }
  };

  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link`}>
      {yourData.socials.map((social, index) => (
        <Button
          key={index}
          onClick={() => handleSocialClick(social.link)}
        >
          {social.title}
        </Button>
      ))}
    </div>
  );
};

export default Socials;
