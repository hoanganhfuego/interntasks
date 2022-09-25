import { useSelector } from "react-redux"
import Todo from "./Todo"

export default function List(){
    const todoList = useSelector(state => state.listTodo)
    return (
        <div className='p-2 list h-[600px] w-[840px] rounded-xl text-white overflow-scroll'>
            {todoList.map((todo, index)=>{
                return <Todo todo={todo} key={index}/>
            })}
        </div>
    )
}