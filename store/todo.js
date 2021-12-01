export const state = () => ({
  todos: [],
})

export const mutations = {
  addtodos(state, todo) {
    state.todos.push(todo)
    // state.todos.splice(state.todos.length, 0, todo)
  },

  removetodos(state, id) {
    state.todos.splice(id, 1)
  },
  removeall(state) {
    state.todos.splice(0, state.todos.length)
  },
}
