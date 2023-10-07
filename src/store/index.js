import { createStore } from 'vuex'

export default createStore({
  state: {
    contacts: []
  },
  getters: {
    CONTACTS(state) {
      return state.contacts;
    }
  },
  mutations: {
    SET_CONTACTS: (state, contacts) => {
      state.contacts = contacts;
    },
    ADD_CONTACT_DATA: (state, data) => {
      state.contacts.push(data)
    }
  },
  actions: {
    GET_CONTACTS({commit}) {
      // какой-то запрос
      commit("SET_CONTACTS", [
        {id: 1, fullName: "Айтишник Данила", phone: "+7(987)654-78-09", email: "nelfeelinggood@gmail.com", category: "Коллега", created_at: "22.09.23"},
        {id: 2, fullName: "Арендодатель Виктория", phone: "+7(987)654-78-10", email: "nelfeelinggood1@gmail.com", category: "Коллега", created_at: "22.09.23"},
        {id: 3, fullName: "Двери Вадим", phone: "+7(987)654-78-11", email: "nelfeelinggood2@gmail.com", category: "Коллега", created_at: "23.09.23"},
        {id: 4, fullName: "Доставка Андрей Стоянов", phone: "+7(987)654-78-12", email: "nelfeelinggood3@gmail.com", category: "Коллега", created_at: "24.09.23"},
      ])
    }
  },
  modules: {
  }
})
