import { useDispatch } from "react-redux"
import { deleteTodo, editTodo } from "../redux/listState"

export default function Todo({todo}){
    const {title, deadline, status, id} = todo
    const dispatch = useDispatch()

    return (
        <div className="w-[100%] flex items-center justify-around h-10 rounded-xl mt-4 bg-zinc-900/50" id='list'>
            <p className="min-w-[200px] text-center">{title}</p>
            <p className="min-w-[200px] text-center">{deadline}</p>
            <p className="min-w-[200px] text-center">{status}</p>
            <div className="min-w-[200px] flex justify-around">
                <button className="border-2 rounded-lg min-w-[60px] hover:bg-black text-center" onClick={()=>dispatch(editTodo(id))}>edit</button>
                <button className="border-2 rounded-lg min-w-[60px] hover:bg-black text-center" onClick={()=>dispatch(deleteTodo(id))}>delete</button>
            </div>
        </div>
    )
}