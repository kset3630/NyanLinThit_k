"use client";

import React from "react";
import { useState } from "react";
import facebook from "@/assets/facebook.svg";
import telegram from "@/assets/telegram.svg";
import instagram from "@/assets/instagram.svg";
import twitter from "@/assets/twitter.svg";
import expand from "@/assets/uparrow.svg";

// import { DisplayTheme } from "../Context/context";
import NLT from "@/assets/NLTA-DarkIcon.png";
import Image from "next/image";
import { useForm } from "react-hook-form";

const backgroundImage = {
  backgroundColor: "#193967",
  backgroundSize: "cover",
};

const FooterBar = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [subscriber, setSubscriber] = useState({
    name: "",
    email: "",
  });

  const scrollToTop = () =>
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

  return (
    <footer
      style={backgroundImage}
      className="max-container h-96 bg-blue-500 px-12 py-8"
    >
      {/* flex container */}
      <div className="flex flex-row justify-between item-center w-full h-full  ">
        {/* Left Section */}
        {/* Left Container */}
        <div className="w-1/3 flex flex-col justify-end items-start text-white">
          <div className="text-3xl text-start  font-medium mb-2 ">
            <a href="mailto:info.nyanlynnthit@gmail.com" target="_blank">
              Contact Us
            </a>
          </div>
          <div className="text-2xl text-start  font-light mb-2">
            <a href="mailto:info.nyanlynnthit@gmail.com" target="_blank">
              info.nyanlynnthit@gmail.com
            </a>
          </div>
          <div className="mt-4">
            <div className="text-[32px] text-start  font-medium">
              <p> Subscribe to Newsletter, Updates & Events</p>
            </div>
            {/* Form Section */}
            <form className="">
              <div className="my-2 sm:my-4 w-full">
                <input
                  type="mail"
                  className={`w-full text-black border ${
                    errors.mail ? "border-red-600" : "border-theme"
                  } rounded-3xl py-1 indent-3`}
                  {...register("mail", { required: true })}
                  aria-invalid={errors.mail ? "true" : "false"}
                  placeholder="Email"
                  value={subscriber.email}
                  onChange={(e) =>
                    setSubscriber((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                />
                {errors.mail?.type === "required" && (
                  <p role="alert">Email is required</p>
                )}
              </div>
              <div className="flex flex-col sm:flex-row gap-2 w-full">
                <div className="w-full sm:w-2/3">
                  <input
                    className={`border text-black ${
                      errors.name ? "border-red-600" : "border-theme"
                    } rounded-3xl w-full py-1 indent-3`}
                    {...register("name", { required: true })}
                    aria-invalid={errors.name ? "true" : "false"}
                    placeholder="Name"
                    value={subscriber.name}
                    onChange={(e) =>
                      setSubscriber((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                  />
                  {errors.name?.type === "required" && (
                    <p role="alert">Name is required</p>
                  )}
                </div>
                <div className="w-full sm:w-1/3">
                  <input
                    className="w-full border border-white py-1 px-2 rounded-3xl cursor-pointer"
                    type="submit"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Right Section */}
        {/* Right Conatiner */}
        <div className="w-auto flex flex-col justify-center items-center">
        <div className="pt-6 w-1/2 h-40 ">
            <Image src={NLT} className="w-full h-full" alt="Logo" />
          </div>
          <div className="flex sm:hidden md:flex justify-between gap-12 pt-6 sm:pb-6 text-2xl  w-full sm:w-fit text-white">
          <div>
          <a
              href="https://www.facebook.com/nyanlynnthitanalytica/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl"
            >
              <Image src={facebook} />
            </a>
            
          </div>
          <div>
          <a
              href="https://t.me/nltasince2017"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={telegram} />
            </a>
            
          </div>
          <div>
          <a
              href="https://www.instagram.com/nyanlynnthit_analytica/"
              target="_blank"
              rel="noopener noreferrer"
            >
               <Image src={instagram} />
            </a>
           
          </div>
          <div>
          <a
              href="https://twitter.com/NyanLynnThit"
              target="_blank"
              rel="noopener noreferrer"
            >
               <Image src={twitter} />
            </a>
           
          </div>
          </div>


          <div className="w-full justify-end pt-6 pb-6 hidden sm:flex">
            <div
              onClick={scrollToTop}
              className="cursor-pointer flex justify-center items-center p-2 font-bold text-black bg-white rounded-full"
            >
              <Image src={expand} />
            </div>
          </div>
          
            
          
        </div>
      </div>
    </footer>
  );
};

export default FooterBar;
