"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../../App.css';
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "../../lib/utils";
export const TextRevealByWord = ({ text, className, }) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    });
    const words = text.split(" ");
    return (_jsx("div", { className: cn("relative z-0 h-[200vh]", className), children: _jsx("div", { ref: targetRef, className: "sticky top-0 mx-auto flex h-[50%] max-w-7xl items-center bg-transparent px-[1rem] py-[5rem]", children: _jsx("p", { className: "flex flex-wrap p-5 font-mono font-extrabold text-black/20 dark:text-white/20 md:p-8 text-lg md:text-2xl lg:p-10 lg:text-2xl xl:text-2xl tracking-tighter", children: words.map((word, i) => {
                    const start = (i / words.length) * 0.75; // Delay by increasing start
                    const end = start + 1.2 / words.length; // Shorten the range
                    return (_jsx(Word, { progress: scrollYProgress, range: [start, end], children: word }, i));
                }) }) }) }));
};
const Word = ({ children, progress, range }) => {
    const opacity = useTransform(progress, range, [0, 1]);
    return (_jsxs("span", { className: "xl:lg-3 relative mx-1 lg:mx-2.5", children: [_jsx("span", { className: "absolute opacity-30", children: children }), _jsx(motion.span, { style: { opacity }, className: "text-white dark:text-white", children: children })] }));
};
export default TextRevealByWord;
