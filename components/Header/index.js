import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../Button";
// Local Data
import data from "../../data/portfolio.json";

const Header = ({ handleWorkScroll, handleAboutScroll, isBlog }) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const { name, showBlog, showResume } = data;

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      setHeaderVisible(
        prevScrollPos > currentScrollPos ||
          currentScrollPos < 100 // Adjust the scroll threshold as needed
      );

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <>
      <div
        className={`${
          headerVisible ? "" : "hidden"
        } block tablet:hidden mt-5`}
      >
        <Popover>
          {({ open }) => (
            <>
              <div className="flex items-center justify-between p-4 laptop:p-0 shadow-md">
                <h1
                  onClick={() => router.push("/")}
                  className="font-medium p-2 laptop:p-0 link text-4xl laptop:text-4xl" // Adjust text size here
                  // style={{ padding: "0.5rem 1rem" }} 
                >
                  {name}
                </h1>

                <div className="flex items-center">
                  {data.darkMode && (
                    <Button
                      onClick={() =>
                        setTheme(theme === "dark" ? "light" : "dark")
                      }
                    >
                      <img
                        className="h-6"
                        src={`/images/${
                          theme === "dark" ? "moon.svg" : "sun.svg"
                        }`}
                        alt="theme-toggle"
                      ></img>
                    </Button>
                  )}

                  <Popover.Button>
                    <img
                      className="h-5"
                      src={`/images/${
                        !open
                          ? theme === "dark"
                            ? "menu-white.svg"
                            : "menu.svg"
                          : theme === "light"
                          ? "cancel.svg"
                          : "cancel-white.svg"
                      }`}
                      alt="menu-toggle"
                    ></img>
                  </Popover.Button>
                </div>
              </div>
              <Popover.Panel
                className={`absolute right-0 z-10 w-11/12 p-4 ${
                  theme === "dark" ? "bg-slate-800" : "bg-white"
                } shadow-md rounded-md`}
              >
                {!isBlog ? (
                  <div className="grid grid-cols-1">
                    <Button onClick={handleWorkScroll}>Work</Button>
                    <Button onClick={handleAboutScroll}>About</Button>
                    {showBlog && (
                      <Button onClick={() => router.push("/blog")}>
                        Blog
                      </Button>
                    )}
                    {showResume && (
                      <Button
                        onClick={() =>
                          window.open("mailto:sonaibarua55@gmail.com")
                        }
                      >
                        Resume
                      </Button>
                    )}

                    <Button
                      onClick={() =>
                        window.open("mailto:sonaibarua55@gmail.com")
                      }
                    >
                      Contact
                    </Button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1">
                    <Button onClick={() => router.push("/")} classes="first:ml-1">
                      Home
                    </Button>
                    {showBlog && (
                      <Button onClick={() => router.push("/blog")}>
                        Blog
                      </Button>
                    )}
                    {showResume && (
                      <Button
                        onClick={() => router.push("/resume")} 
                        classes="first:ml-1"
                      >
                        Resume
                      </Button>
                    )}

                    <Button
                      onClick={() =>
                        window.open("mailto:sonaibarua55@gmail.com")
                      }
                    >
                      Contact
                    </Button>
                  </div>
                )}
              </Popover.Panel>
            </>
          )}
        </Popover>
      </div>
      <div
        className={`${
          headerVisible ? "" : "hidden"
        } mt-10 hidden flex-row items-center justify-between sticky ${
          theme === "light" && "bg-white"
        } dark:text-white top-0 z-10 tablet:flex`}
      >
        <h1
          onClick={() => router.push("/")}
          className="font-medium p-2 laptop:p-0 link text-lg laptop:text-4xl" // Adjust text size here
          style={{ padding: "0.5rem 1rem" }} // Add padding here
        >
          {name}
        </h1>
        {!isBlog ? (
          <div className="flex">
            <Button onClick={handleWorkScroll}>Work</Button>
            <Button onClick={handleAboutScroll}>About</Button>
            {showBlog && (
              <Button onClick={() => router.push("/blog")}>Blog</Button>
            )}
            {showResume && (
              <Button onClick={() => router.push("/resume")} classes="first:ml-1">
                Resume
              </Button>
            )}

            <Button onClick={() => window.open("mailto:sonaibarua55@gmail.com")}>
              Contact
            </Button>
            {mounted && theme && data.darkMode && (
              <Button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <img
                  className="h-6"
                  src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                  alt="theme-toggle"
                ></img>
              </Button>
            )}
          </div>
        ) : (
          <div className="flex">
            <Button onClick={() => router.push("/")}>Home</Button>
            {showBlog && (
              <Button onClick={() => router.push("/blog")}>Blog</Button>
            )}
            {showResume && (
              <Button onClick={() => router.push("/resume")} classes="first:ml-1">
                Resume
              </Button>
            )}

            <Button onClick={() => window.open("mailto:sonaibarua55@gmail.com")}>
              Contact
            </Button>

            {mounted && theme && data.darkMode && (
              <Button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <img
                  className="h-6"
                  src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                  alt="theme-toggle"
                ></img>
              </Button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
