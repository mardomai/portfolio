"use client"
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
export default function Navbar(){

  return (
    <header className="flex justify-between px-5 py-2 bg-primary text-white fixed w-full z-10">
      <a href="/" className="logo text-2xl font-bold text-accent">
        Welcome
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex gap-6">
          <li>
            <a href="/#about">About</a>
          </li>
          <li>
            <a href="/#projects">Projects</a>
          </li>
          <li>
            <a to="/#blog">Blog</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>

        </ul>
      </nav>
    </header>
  );
};

