import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/listState";
import nextId from "react-id-generator";
import { useEffect } from "react";

export default function Input(){
    const dispatch = useDispatch()
    const editChoose = useSelector(state => state.listTodo.isEditChoose)
    console.log(editChoose)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        const id = nextId()
        dispatch(addTodo({...data, id: id}))
        reset()
    };

    useEffect(()=>{
        console.log(1)
        reset(editChoose[0])
    }, [editChoose])

    return(
        <div className='h-[15%] flex flex-col justify-around'>
            <form className=' p-2 create-section flex flex-row items-center justify-around w-[840px] h-[80px] rounded-xl' onSubmit={handleSubmit(onSubmit)}>
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
        </div>
    )
}