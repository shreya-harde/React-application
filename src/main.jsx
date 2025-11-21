import { createRoot } from 'react-dom/client'
import Home from"./Home";
import About from "./About";
import Contact from "./Contact";
import './index.css'


const root = createRoot(document.getElementById("root"));
const path= window.location.pathname;

console.log("current path",path);
if(  path =="/") {
    root.render(<Home/>);
}else if (  path =="/About") {
    root.render(<About/>);
}else if (  path =="/Contact") {
    root.render(<Contact/>);
}