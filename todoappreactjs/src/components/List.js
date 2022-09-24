export default function List(props){
    const {todo} = props
    const {title, status, deadline} = todo
    return (
        <div className="w-[840px] flex items-start justify-around overflow-scroll h-9 mt-4" id='list'>
            <p className="min-w-[200px] text-center">{title}</p>
            <p className="min-w-[200px] text-center">{deadline}</p>
            <p className="min-w-[200px] text-center">{status}</p>
            <div className="min-w-[200px] flex justify-around">
                <button className="border-2 rounded-lg min-w-[60px] hover:bg-black text-center">edit</button>
                <button className="border-2 rounded-lg min-w-[60px] hover:bg-black text-center">delete</button>
            </div>
        </div>
    )
}