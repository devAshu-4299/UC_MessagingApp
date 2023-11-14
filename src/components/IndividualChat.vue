<template>
<div class="chat-sms-app-alt">
  <div class="chat-sms-app" v-for="item in messages.messages" :key="item.id">
    <div class="chat-box" v-if="item.sender != getUserName">
      <div class="chat-box-align" >
        <span class="avatar">{{ item.sender[0].toUpperCase() }}</span>

        <span class="message-display">
          <span class="message-content">{{ item.content }}</span>
          <span class="message-time">{{ formatDate(item.timestamp) }}</span>
        </span>
      </div>
      </div>
      <div class="chat-box chat-box-right" v-else>
      <div class="chat-box-align-right" >
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
      const options = {
        // day: '2-digit',
        // month: 'short',
        // year: 'numeric',
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };

      const formattedDate = dateObject.toLocaleDateString("en-US", options);
      return formattedDate;
    },
  },
};
</script>

<style >
</style>
