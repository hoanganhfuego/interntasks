import { createSlice } from '@reduxjs/toolkit'

const initialState = JSON.parse(localStorage.getItem('todoList')) || []

export const ListStore = createSlice({
    name: 'ListStore',
    initialState: {
        todolist: initialState,
        isEditChoose: {}
    },
    reducers: {
        addTodo: (state, action)=> {
            state.todolist.unshift(action.payload)
            localStorage.setItem('todoList', JSON.stringify(state.todolist))
        },
        deleteTodo: (state, action) => {
            state.todolist.forEach((todo, index) => {
                if(todo.id === action.payload) state.todolist.splice(index,1)
            });
            localStorage.setItem('todoList', JSON.stringify(state.todolist))
        },
        editTodo: (state, action) => {
            // console.log(action)
            state.todolist.forEach((todo, index)=>{
                if(todo.id === action.payload){
                    state.isEditChoose = state.todolist.slice(index, 1)
                }
            })
        }
    },
})

export const {addTodo, deleteTodo, editTodo} = ListStore.actions

export default ListStore.reducer