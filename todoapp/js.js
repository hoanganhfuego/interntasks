const submitbtn = document.querySelector('#submit')
const update = document.querySelector('#update')
const title = document.querySelector('#title')
const deadline = document.querySelector('#deadline')
const status = document.querySelectorAll('#status-field input')
const list = document.querySelector('#list')
const search = document.querySelector('#search')
const todoList = []

update.setAttribute('style', 'display:none')
submitbtn.addEventListener('click', handleSubmit)
update.addEventListener('click', handleUpdate)
search.addEventListener('input', throttled(handleSearch, 500))
window.addEventListener('load',() => {
    let saveList = JSON.parse(localStorage.getItem('todolist'))
    for(let i = 0; i < saveList.length; i++){
        todoList.push(saveList[i])
    }
    render(todoList)
});

function throttled(callback, delay) {
    let lastRun = delay;
    return () => {
        const now = new Date().getTime();
        if(now - lastRun >= delay){
            lastRun = now;
            callback();
        }
    }
}

function handleSearch(){
    const searchList = []
    let searchValue = search.value
    for(let i = 0; i < todoList.length; i++){
        searchList.push(todoList[i].title)
    }
}

function handleUpdate(){
    for(let i = 0; i < todoList.length; i++){
        if(todoList[i].isChooseToUpdate){
            const status = document.querySelectorAll('#status-field input')
            let statusChecked = ''
            for(let i = 0; i < status.length; i++){
                if(status[i].checked){
                    statusChecked = status[i].value
                }
            }
            todoList.splice(i, 1, {
                isChooseToUpdate: false,
                title: title.value,
                deadline: deadline.value,
                status: statusChecked
            })
        }
    }
    render(todoList)
    cleanUp()
    submitbtn.removeAttribute('style')
    update.setAttribute('style', 'display:none')
}

function handleSubmit(){
    const status = document.querySelectorAll('#status-field input')
    let statusChecked = ''
    for(let i = 0; i < status.length; i++){
        if(status[i].checked){
            statusChecked = status[i].value
        }
    }
    todoList.push({
        isChooseToUpdate: false,
        title: title.value,
        deadline: deadline.value,
        status: statusChecked
    })
    localStorage.setItem('todolist', JSON.stringify(todoList))
    render(todoList)
    cleanUp()
}

function handleDelete(event){
    let parentId = parseInt(event.target.parentNode.id)
    todoList.splice(parentId-1,1)
    render(todoList)
    localStorage.setItem('todolist', JSON.stringify(todoList))
}

function handleEdit(event){
    update.removeAttribute('style')
    submitbtn.setAttribute('style', 'display:none')
    let parentId = parseInt(event.target.parentNode.id)
    let todo = todoList[parentId-1]
    title.value = todo.title
    deadline.value = todo.deadline
    const status = document.querySelectorAll('#status-field input')
    for(let i = 0; i < status.length; i++){
        if(status[i].value == todo.status){
            status[i].checked = true
        }
    }
    todo.isChooseToUpdate = true
}
function checkStatus(deadline, status){
    let color = ''
    let today = new Date()
    let dl = new Date(deadline)
    if(status == 'inprogress'&& today > dl) return `background-color:red`
    if(status == 'done') color = 'green'
    if(status == 'inprogress') color = 'orange'
    return `background-color:${color}`
}

function template(index, infor){
    let {title, deadline, status} = infor
    return(
        `<div id='${index}' style='${checkStatus(deadline, status)}'>
            <h3>${index}</h3>
            <div class='content'>
                <p>${title}</p>
                <p>${deadline}</p>
                <p>${status}</p>
            </div>
            <button onclick='handleEdit(event)'>edit</button>
            <button onclick="handleDelete(event)">delete</button>
        </div>`
    )
}

function render(listToRender){
    let renderValue = ''
    for(let i = 0; i < listToRender.length; i++){
        renderValue += template(i+1, listToRender[i])
    }
    list.innerHTML = renderValue
}

function cleanUp(){
    const status = document.querySelectorAll('#status-field input')
    title.value = ''
    deadline.value = ''
    for(let i = 0; i < status.length; i++){
        status[i].checked = false
    }
}