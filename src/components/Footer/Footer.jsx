import React from "react";
import { Container, Logo } from "../index";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="w-[100vw] container border-t-2 mx-auto p-6 lg:py-8 ">
      <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0 flex flex-col-reverse items-center gap-2 md:block">
          <Logo className="cursor-pointer" clickable />
          <p className="text-gray-500 font-[cursive] ">
            A hub for writers & readers
          </p>
        </div>
        <div className="grid grid-cols-3 gap-8 sm:gap-6">
          <div>
            <h2 className="mb-3 text-sm font-semibold text-gray-400 uppercase   ">
              Resources
            </h2>
            <ul className="text-gray-500  font-medium  space-y-1">
              <li>
                <a target="_blank" href="/" className="hover:underline">
                  Blogger&apos;s Point
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://tailwindcss.com/"
                  className="hover:underline"
                >
                  Tailwind CSS
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-3 text-sm font-semibold text-gray-400 uppercase">
              Follow US
            </h2>
            <ul className="text-gray-500  font-medium space-y-1">
              <li>
                <a
                  target="_blank"
                  href="https://linkedin.com/in/maharanasoumyaranjan"
                  className="hover:underline "
                >
                  Soumya
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://linkedin.com/in/maharanasoumyaranjan"
                  className="hover:underline "
                >
                  Umesh
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://linkedin.com/in/maharanasoumyaranjan"
                  className="hover:underline "
                >
                  Sankarshan
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-3 text-sm font-semibold text-gray-400 uppercase ">
              Legal
            </h2>
            <ul className="text-gray-500 font-medium space-y-1">
              <li>
                <a target="_blank" href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a target="_blank" href="#" className="hover:underline">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-4 border-gray-200 w-full mx-auto" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 sm:text-center">
          &copy; 2024{" "}
          <a target="_blank" href="/" className="hover:underline">
            Blogger&apos;sPoint™
          </a>
          . All Rights Reserved.
        </span>
        <div className="flex mt-4 gap-3 sm:justify-center items-center sm:mt-0">
          <a target="_blank" href="#">
            <img
              align="center"
              src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg"
              alt="twitter_logo"
              height="20"
              width="20"
            />
          </a>
          <a target="_blank" href="#">
            <img
              align="center"
              src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
              alt="Linkedin_logo"
              height="20"
              width="20"
            />
          </a>
          <a target="_blank" href="#">
            <img
              align="center"
              src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg"
              alt="instagram_logo"
              height="20"
              width="20"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
