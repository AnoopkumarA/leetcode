import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
// Example image sources (replace with your own)
const images = [
    '/src/assets/posters.png',
];
export default function Slideshow() {
    const [currentSlide, setCurrentSlide] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => prevSlide === images.length - 1 ? 0 : prevSlide + 1);
        }, 3000); // Change slide every 3 seconds
        return () => clearInterval(interval);
    }, []);
    return (_jsxs("div", { className: "relative w-full max-w-5xl md:h-[30rem] mx-auto overflow-hidden rounded-lg border border-neutral-800", children: [_jsx("div", { className: "flex transition-transform ease-in-out duration-700", style: { transform: `translateX(-${currentSlide * 100}%)` }, children: images.map((image, index) => (_jsx("img", { src: image, alt: `Slide ${index + 1}`, className: "w-full object-cover" }, index))) }), _jsx("div", { className: "absolute bottom-4 left-0 right-0 flex justify-center space-x-2", children: images.map((_, index) => (_jsx("div", { className: `w-3 h-3 rounded-full cursor-pointer ${index === currentSlide ? 'bg-white' : 'bg-gray-400'}`, onClick: () => setCurrentSlide(index) }, index))) })] }));
}
