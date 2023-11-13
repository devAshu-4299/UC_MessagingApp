import axiosWebApi from "../plugins/axios.js";
import Api from "@/constants/api";
import store from "./index.js";

export default {
  state: {
    username: "",
    selectedChatId: 1,
    chats: [],
  },
  getters: {
    getUserName: (state) => state.username,
    getChats: (state) => state.chats,
  },
  mutations: {
    SET_USERNAME(state, resp) {
      state.username = resp;
    },
    SELECT_CHAT(state, chatId) {
      state.selectedChatId = chatId;
    },
    SET_ALL_CHATS(state, resp) {
      state.chats = resp.chats;
    },
    ADD_MESSAGE(state, { chatId, messages }) {
      const chat = state.chats.find((c) => c.id === chatId);
      if (chat) {
        chat.messages.push(messages);
      }
    },
    ADD_CHAT(state, payload) {
      state.chats.push(payload);
    },
  },
  actions: {
    async LogInSuccessful({ commit }, payload) {
      const resp = await axiosWebApi.post(
        Api.messageBoard.setUserNames,
        { username: payload },
        { isMock: true }
      );
      console.log(resp);
      if (resp.status == 200) {
        commit("SET_USERNAME", payload);
      }
      return resp;
    },
    async getAllChats({ commit }, payload) {
      const resp = await axiosWebApi.post(
        Api.messageBoard.getAllChats,
        {},
        { isMock: true }
      );
      if (resp.status == 200) {
        commit("SET_ALL_CHATS", resp.data);
      }
      return resp;
    },
    async AddChatInStore({ commit }, payload) {
      commit("ADD_CHAT", payload);
    },
    async AddMessagesInStore({ commit }, payload) {
      commit("ADD_MESSAGE", payload);
    },
  },
};
