import { createStore } from 'vuex'

export default createStore({
  state: {
    contacts: [],
    toast_message: ""
  },
  getters: {
    CONTACTS:(state) => {
      return state.contacts;
    },
    CONTACT_BY_ID:(state) => (contact_id) => {
      return state.contacts.find(item => item.id === contact_id);
    },
    TOAST_MESSAGE: (state) => {
      return state.toast_message;
    }
  },
  mutations: {
    SET_CONTACTS: (state, contacts) => {
      state.contacts = contacts;
    },
    ADD_CONTACT: (state, contact) => {
      state.contacts.push(contact)
    },
    UPDATE_CONTACT_DATA: (state, updated_contact) => {
      const index = state.contacts.findIndex((item) => item.id === updated_contact.id);
      state.contacts[index] = updated_contact;
    },
    DELETE_CONTACT_DATA: (state, contact_id) => {
      const index = state.contacts.findIndex(item => item.id === contact_id);
      state.contacts.splice(index, 1);
    },
    ADD_TOAST_MESSAGE: (state, message) => {
      state.toast_message = message;
    },
  },
  actions: {
    GET_CONTACTS({commit}) {
      commit("SET_CONTACTS", [
        {id: 1, fullName: "Айтишник Данила", phone: "+7(987)654-78-09", email: "nelfeelinggood@gmail.com", category: "Коллега", created_at: "22.09.23"},
        {id: 2, fullName: "Арендодатель Виктория", phone: "+7(987)654-78-10", email: "nelfeelinggood1@gmail.com", category: "Коллега", created_at: "22.09.23"},
        {id: 3, fullName: "Двери Вадим", phone: "+7(987)654-78-11", email: "nelfeelinggood2@gmail.com", category: "Коллега", created_at: "23.09.23"},
        {id: 4, fullName: "Доставка Андрей Стоянов", phone: "+7(987)654-78-12", email: "nelfeelinggood3@gmail.com", category: "Коллега", created_at: "24.09.23"},
      ])
    },
    CREATE_CONTACT({commit}, data) {
      commit("ADD_CONTACT", data)
    },
    UPDATE_CONTACT({commit}, data) {
      commit("UPDATE_CONTACT_DATA", data)
    },
    DELETE_CONTACT({commit}, data) {
      commit("DELETE_CONTACT_DATA", data)
    },
    CREATE_TOAST_MESSAGE({commit}, data) {
      commit("ADD_TOAST_MESSAGE", data)
    },
  },
  modules: {
  }
})
