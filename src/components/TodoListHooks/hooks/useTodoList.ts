import { reactive } from 'vue'

export interface ITodoListItem {
  id: number
  title: string
  done: boolean
}

export default function useTodoList() {
  const todoList = reactive<ITodoListItem[]>([
    { id: 1, title: 'Task1', done: false },
    { id: 2, title: 'Task2', done: false },
    { id: 3, title: 'Task3', done: true },
  ])
  function addNewOne() {
    todoList.push({
      id: todoList.length,
      title: 'newTask',
      done: false,
    })
  }

  function removeOne(id: number) {
    const idx = todoList.findIndex((todo) => {
      return todo.id === id
    })
    if (idx !== -1) {
      todoList.splice(idx, 1)
    }
  }
  return {
    todoList,
    addNewOne,
    removeOne,
  }
}
