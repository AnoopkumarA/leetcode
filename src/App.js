import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import './App.css';
import Home from "./pages/home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
const about = () => {
    return (_jsx(_Fragment, { children: _jsx("div", { className: "bg-[#05081E]", children: _jsxs(Router, { children: [_jsx(Navbar, {}), _jsx(Routes, { children: _jsx(Route, { path: "/", element: _jsx(Home, {}) }) })] }) }) }));
};
export default about;
