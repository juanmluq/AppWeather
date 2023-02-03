import React from "react";
import './about.css';


export default function About() {
return (
    <div className="centrado">
    <div className="abou">
        Esta aplicacion fue creada por:
        <h5 className="texto"> Juan M. Luque </h5>
        <h6 className="texto"> Full Stack Developer</h6>
        <a href={"https://www.linkedin.com/in/juan-manuel-luque-6b146439"} type="button">Linkedln</a>
        <a href={"https://github.com/juanmluq"} type="button">GitHub</a>
        <a href={"https://portfolio-eta-seven-60.vercel.app/"} type="button">Portfolio</a>
    </div>
    </div>
)
}
