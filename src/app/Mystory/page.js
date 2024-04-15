"use client";
import MyStory from "@/components/MyStory";
import React from "react";
import { motion } from "framer-motion";
import Nav from "@/components/Navbar";

const page = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="w-full"
    >
      <div className=" w-full fixed z-10 p-1">
        <Nav />
      </div>
      <MyStory />
    </motion.div>
  );
};

export default page;
