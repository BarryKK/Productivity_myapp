import axios from 'axios'

const API_URL="http://localhost:8000/"

export const state = () => ({
  tasks: []
});

export const actions = {
  async getAllTasks({commit}){
    const res = await axios.get(`${API_URL}/tasks/`)
    commit('set', res.data)
   }
}

export const mutations = {
  set(state, tasks){
    state.tasks = tasks
  },
  add(state, text) {
    state.tasks.push({
      text,
      done: false
    });
  },
  edit(state, payload) {
    const { index, text } = payload;

    const updatedTask = {
      ...state.tasks[index],
      text
    };
    state.tasks.splice(index, 1, updatedTask);
  },
  remove(state, index) {
    state.tasks.splice(index, 1);
  },
  toggle(state, todo) {
    todo.done = !todo.done;
  }
};
