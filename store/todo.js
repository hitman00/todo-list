export const state = () => ({
  todos: [],
})

export const mutations = {
  addtodos(state, todo) {
    state.todos.push(todo)
  },

  removetodos(state, id) {
    state.todos.splice(id, 1)
  },
  removeall(state) {
    state.todos = []
  },
}
