"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import '../../App.css';
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Particles from "./particles";
const ParticlesDemo = () => {
    const { theme } = useTheme();
    const [color, setColor] = useState("#ffffff");
    useEffect(() => {
        setColor(theme === "dark" ? "#ffffff" : "#ffffff");
    }, [theme]);
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-[#05081E] md:shadow-xl px-4", children: [_jsx("div", { className: "relative z-10 flex flex-col items-center text-center", children: _jsxs("div", { className: "min-h-screen flex flex-col items-center justify-center text-center", children: [_jsx("h1", { className: "text-4xl md:text-7xl font-mystery-quest text-white mb-4", children: "LeetCode Diaries" }), _jsxs("p", { className: "text-lg md:text-5xl text-gray-300 mb-8 font-light", children: ["Your Ultimate Code Companion &", _jsx("br", {}), " Web Design Studio"] }), _jsxs("div", { className: " md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-8 mt-5", children: [_jsx("button", { className: "px-8 py-2 md:px-16 md:py-2 -ml-1 mx-4 md:mx-14 bg-white text-black rounded-md shadow-lg", children: "Join Us" }), _jsx("button", { className: "px-8 py-2 md:px-16 md:py-2 border border-white text-white rounded-md", children: "Services" })] })] }) }), _jsx(Particles, { className: "absolute inset-0", quantity: 100, ease: 80, color: color, refresh: true })] }) }));
};
export default ParticlesDemo;
