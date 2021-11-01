import React, {useEffect, useState} from "react";
import "./ADD.css"
import {sendBekend} from "../services/task.service";

export const ADD = ({flag,setFlag, setAddTitle, setFlagUpdate, flagUpdate}) => {
    const [form, setForm] = useState(null);

    useEffect(() => {
        localStorage.setItem("flag", flag)
    }, [flag, flagUpdate])


    const changeHandler = e => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const send = async (e) =>{
        // e.preventDefault()
        setAddTitle(form)
        setFlag(!flag)
        setFlagUpdate(!flagUpdate)
        await sendBekend(form)
    }
    return(
        <div className={flag ? "modal active" : "modal"} onClick={() => {
            setFlag(!flag)
        }}>
            <div className={flag ? "modal_content active" : "modal"} onClick={event => event.stopPropagation()}>
                    <div className='labelClass'>Завдання</div>
                    <input className="inputClass"
                           id="title"
                           type="text"
                           name="title"
                           onChange={changeHandler}
                    />
                <div className={"btn_class"}><button onClick={send}>add</button></div>
            </div>
        </div>
    )
}