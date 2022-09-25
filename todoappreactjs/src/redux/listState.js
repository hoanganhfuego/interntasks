import { createSlice } from '@reduxjs/toolkit'

const initialState = JSON.parse(localStorage.getItem('todoList')) || []

export const ListStore = createSlice({
    name: 'ListStore',
    initialState,
    reducers: {
        addTodo: (state, action)=> {
            state.unshift(action.payload)
            localStorage.setItem('todoList', JSON.stringify(state))
        },
        deleteTodo: (state, action) => {
            state.forEach((todo, index) => {
                if(todo.id === action.payload) state.splice(index,1)
            });
            localStorage.setItem('todoList', JSON.stringify(state))
        },
        editTodo: (state, action) => {

        }
    },
})

export const {addTodo, deleteTodo, editTodo} = ListStore.actions

export default ListStore.reducer