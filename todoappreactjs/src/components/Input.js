import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import List from "./List";

export default function Input(){
    console.log(JSON.parse(localStorage.getItem('todoList')))
    const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('todoList')) || [])
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        setTodoList((prev)=>[{...data, uniqueId: new Date()}, ...prev])
        localStorage.setItem('todoList', JSON.stringify([data, ...todoList]))
        reset()
    };
    return(
        <div className=' h-[100%] flex flex-col justify-around'>
            <form className='create-section flex flex-row items-center justify-around w-[840px] h-[80px] rounded-xl' onSubmit={handleSubmit(onSubmit)}>
                <input {...register("title")} type='text' placeholder="title" className="outline-none title min-w-[200px] text-center bg-[transparent] "></input>
                <div className=" min-w-[200px] text-center">
                    <input type='date' {...register("deadline")} className='deadline bg-[transparent] text-white hover:cursor-pointer'></input>
                </div>
                <select name="status" id="status" {...register("status")} className="outline-none shadow-none min-w-[200px] text-center bg-[transparent] hover:cursor-pointer">
                    <option value="todo">todo</option>
                    <option value="in progress">in progress</option>
                    <option value="done">done</option>
                </select>
                <button className="min-w-[200px] text-center border-2 rounded-xl hover:bg-white">submit</button>
            </form>
            <div className='list h-[600px] bg-zinc-900/50 rounded-xl text-white overflow-scroll'>
                {todoList.map((todo, index)=>{
                return <List todo={todo} key={index} index={index+1}/>
                })}
            </div>
        </div>
    )
}