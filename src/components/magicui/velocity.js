"use client";
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimationFrame, useMotionValue, useScroll, useSpring, useTransform, useVelocity, } from "framer-motion";
import { cn } from "../../lib/utils";
export const wrap = (min, max, v) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};
export function VelocityScroll({ text, default_velocity = 5, className, }) {
    function ParallaxText({ children, baseVelocity = 100, className, }) {
        const baseX = useMotionValue(0);
        const { scrollY } = useScroll();
        const scrollVelocity = useVelocity(scrollY);
        const smoothVelocity = useSpring(scrollVelocity, {
            damping: 50,
            stiffness: 400,
        });
        const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
            clamp: false,
        });
        const [repetitions, setRepetitions] = useState(1);
        const containerRef = useRef(null);
        const textRef = useRef(null);
        useEffect(() => {
            const calculateRepetitions = () => {
                if (containerRef.current && textRef.current) {
                    const containerWidth = containerRef.current.offsetWidth;
                    const textWidth = textRef.current.offsetWidth;
                    const newRepetitions = Math.ceil(containerWidth / textWidth) + 2;
                    setRepetitions(newRepetitions);
                }
            };
            calculateRepetitions();
            window.addEventListener("resize", calculateRepetitions);
            return () => window.removeEventListener("resize", calculateRepetitions);
        }, [children]);
        const x = useTransform(baseX, (v) => `${wrap(-100 / repetitions, 0, v)}%`);
        const directionFactor = React.useRef(1);
        useAnimationFrame((t, delta) => {
            let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
            if (velocityFactor.get() < 0) {
                directionFactor.current = -1;
            }
            else if (velocityFactor.get() > 0) {
                directionFactor.current = 1;
            }
            moveBy += directionFactor.current * moveBy * velocityFactor.get();
            baseX.set(baseX.get() + moveBy);
        });
        const colorsMap = {
            DESIGN: "text-orange-500",
            DEVELOPE: "text-white",
            CODE: "text-blue-500",
        };
        const words = children.split("->");
        return (_jsx("div", { className: "w-full overflow-hidden whitespace-nowrap", ref: containerRef, children: _jsx(motion.div, { className: cn("inline-block", className), style: { x }, children: Array.from({ length: repetitions }).map((_, i) => (_jsx("span", { ref: i === 0 ? textRef : null, children: words.map((word, index) => (_jsxs("span", { className: colorsMap[word] || "text-default-color", children: [word, " "] }, index))) }, i))) }) }));
    }
    return (_jsxs("section", { className: "relative w-full ", children: [_jsx(ParallaxText, { baseVelocity: default_velocity, className: className, children: text }), _jsx(ParallaxText, { baseVelocity: -default_velocity, className: className, children: text })] }));
}
