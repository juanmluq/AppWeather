import React from "react";
import style from "./Temp.css";

export default function Temp ({ label, value }) {
    return (
        <div className={style.temp}>
            <span className={style.label}>{label}</span>
            <span className={style.value}>{value}</span>
        </div>
    )
}