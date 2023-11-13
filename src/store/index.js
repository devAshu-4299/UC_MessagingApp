import { createStore} from "vuex";
import Chat from "./chat.js"

const store = new createStore({
  modules: {
    Chat
  },
});

export default store;