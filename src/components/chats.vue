<template>
  <section class="loggedin-section">
    <div class="rectangle-1">
      <div class="alignElements">
        <img class="img-span" src="./../assets/images/Group7.svg" alt="" />
        <InputText
          :class="errors && errors[0] ? 'error_msgs' : ''"
          v-bind="field"
          field="searchChats"
          placeholder="Search"
          v-model="searchChats"
        >
        </InputText>
        <img class="img-search" src="./../assets/images/search.svg" alt="" />
      </div>
      <span class="user-txt"> {{ getUserName[0]?.toUpperCase() }} </span>
    </div>

    <span style="display: flex">
      <div class="rectangle-4">
        <div class="frame-8">
          <span class="chats">Chats</span>

          <span class="img-add">
            <img
              class="img-addlayout"
              @click="AddChats"
              src="./../assets/images/add.svg"
              alt=""
            />
          </span>
        </div>
        <div
          class="chat-layout"
          :class="item.id == messages.id ?'bg-color-gray':''"
          v-for="item in displayChats"
          :key="item.id"
          @click="openChat(item)"
        >
          <span class="rectangle-5">
            <span class="participant">
              {{ getShortNameForChats(item.name) }}
            </span>
          </span>
          <span class="frame-16">
            <div class="frame-15">
              <span class="txt-1"> {{ item.name }}</span>
              <span class="txt-2"
                >Created {{ formatDate(item.createdAt) }}</span
              >
            </div>
          </span>
        </div>
      </div>
      <div class="frame-18">
        <div class="text">
          {{ messages.name }}

          <img
            class="img-info"
            src="./../assets/images/info_outline.svg"
            alt=""
          />
        </div>
    <IndividualChat :messages="messages" />
      <div class="chat-text-field">
        <Form @submit="sendChatMessage" ref="sendSMS">
          <div class="chat-input-field">
            <img class="img-info" src="./../assets/images/attach_file.svg" alt="" />

            <InputText field="addNewMessage" v-model="addNewMessage" />
            <button type="submit" class="img-add">
              <img
                @click="sendChatMessage"
                src="./../assets/images/send.svg"
                alt=""
              />
            </button>
          </div>
        </Form>
      </div>
      </div>
    </span>
  </section>
  <Dialog
    v-model:visible="visible"
    modal
    :closable="true"
    :header="headerValue"
    :style="{ width: '50vw' }"
  >
  <span class="close-icon">X</span>
      <p>
      Chats are where your circle communicates. They are best when organised
      around a topic - #Writing, for example</p>
      <p class="name-label"><strong>Name</strong></p>

      <InputText field="contentValue" v-model="contentValue" />
   
    <template #footer>
      <Button
        label="Create"
        icon="pi pi-check"
        @click="AddDialogChat"
        autofocus
      />
    </template>
  </Dialog>
</template>
<script>
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import IndividualChat from "./IndividualChat.vue";
import { mapActions, mapGetters } from "vuex";
import { v4 as uuidv4 } from "uuid";

export default {
  data() {
    return {
      messages: [],
      searchChats: "",
      addNewMessage: "",
      contentValue: "",
      visible: false,
      headerValue: "Create a Chat",
    };
  },
  components: {
    InputText,
    Button,
    IndividualChat,
  },
  computed: {
    ...mapGetters({
      getChats: "getChats",
      getUserName: "getUserName",
    }),
  },
  methods: {
    ...mapActions({
      getAllChats: "getAllChats",
      AddChatInStore: "AddChatInStore",
      LogInSuccessful: "LogInSuccessful",
      AddMessagesInStore: "AddMessagesInStore",
    }),
    AddChats() {
      this.visible = true;
    },
    async sendChatMessage() {
      if (!this.addNewMessage) {
        return;
      }
      let payload = {
        chatId: this.messages.id,
        messages: {
          id: uuidv4(),
          content: this.addNewMessage,
          sender: this.getUserName,
          timestamp: new Date().toISOString(),
        },
      };
      await this.AddMessagesInStore(payload);
      this.displayChats = this.getChats;
      this.addNewMessage = "";
    },
    async AddDialogChat() {
      if (!this.contentValue) {
        return;
      }
      let payload = {
        id: uuidv4(),
        name: this.contentValue,
        createdAt: new Date().toISOString(),
        messages: [],
      };
      await this.AddChatInStore(payload);
      this.contentValue = "";
      this.visible = false;
    },
    openChat(item) {
      this.messages = item;
    },
    getShortNameForChats(item) {
      const name = item.split(" ");
      if (name.length <= 1) {
        return name[0][0];
      } else {
        return name[0][0] + name[1][0];
      }
    },
    formatDate(value) {
      const dateObject = new Date(value);
      const day = dateObject.getDate();
      const month = new Intl.DateTimeFormat("en", { month: "short" }).format(
        dateObject
      );
      const year = dateObject.getFullYear();

      const formattedDate = `${day} ${month} ${year}`;
      return formattedDate;
    },
  },
  async mounted() {
    if (!localStorage.getItem("username")) {
      this.$router.push("/");
    } else {
      await this.LogInSuccessful(localStorage.getItem("username"));
      await this.getAllChats();
    }
    this.messages = this.getChats[0];
    this.displayChats = this.getChats;
    console.log(this.getChats);
  },
  watch: {
    searchChats() {
      this.displayChats = this.getChats.filter((chat) =>
        chat.name.toLowerCase().includes(this.searchChats.toLowerCase())
      );
    },
  },
};
</script>
<style></style>
