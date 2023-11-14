<template>
  <div class="chat-sms-app-alt">
    <div class="chat-sms-app" v-for="item in messages.messages" :key="item.id">
      <div class="chat-box" v-if="item.sender != getUserName">
        <div class="chat-box-align">
          <span class="avatar">{{ item.sender[0].toUpperCase() }}</span>

          <span class="message-display">
            <span class="message-content">{{ item.content }}</span>
            <span class="message-time">{{ formatDate(item.timestamp) }}</span>
          </span>
        </div>
      </div>
      <div class="chat-box chat-box-right" v-else>
        <div class="chat-box-align-right">
          <span class="message-display">
            <span class="message-content">{{ item.content }}</span>
            <span class="message-time">{{ formatDate(item.timestamp) }}</span>
          </span>
          <span class="avatar">{{ item.sender[0].toUpperCase() }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "ChatSmsApp",
  data() {
    return {};
  },
  props: {
    messages: {
      default: {},
      type: Object,
    },
  },
  computed: {
    ...mapGetters({
      getUserName: "getUserName",
    }),
  },
  methods: {
    ...mapActions({}),
    formatDate(value) {
      const dateObject = new Date(value);
      const hours = dateObject.getHours();
      const minutes = dateObject.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      const formattedHours = hours % 12 || 12;
      const formattedTime = `${String(formattedHours).padStart(
        2,
        "0"
      )}:${String(minutes).padStart(2, "0")} ${ampm}`;

      return formattedTime;
    },
  },
};
</script>

<style></style>
