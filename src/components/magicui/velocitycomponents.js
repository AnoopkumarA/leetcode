import { jsx as _jsx } from "react/jsx-runtime";
import { VelocityScroll } from "./velocity";
export function ScrollBasedVelocityDemo() {
    return (_jsx(VelocityScroll, { text: 'DESIGN->DEVELOPE->CODE->DESIGN->DEVELOPE->CODE->DESIGN', default_velocity: 3, className: "font-display text-center text-4xl font-bold tracking-[-0.02em] drop-shadow-sm dark:text-white md:text-5xl md:leading-[4.2rem]" }));
}
