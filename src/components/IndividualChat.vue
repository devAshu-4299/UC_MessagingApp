<template>
  <div class="chat-sms-app" v-for="item in messages.messages" :key="item.id">
    <div class="chat-box">
      <div v-if="item.sender != getUserName">
        <div class="avatar">{{ item.sender[0].toUpperCase() }}</div>

        <div class="message-display">
          <div class="message-content">{{ item.content }}</div>
          <div class="message-time">{{ formatDate(item.timestamp) }}</div>
        </div>
      </div>
      <div v-else>
        <div class="message-display">
          <div class="message-content">{{ item.content }}</div>
          <div class="message-time">{{ formatDate(item.timestamp) }}</div>
        </div>
        <div class="avatar">{{ item.sender[0].toUpperCase() }}</div>
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

<style scoped lang="scss">
/* Add your SCSS styles here */
.chat-sms-app {
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 24px;
  display: inline-flex;
}

.chat-box {
  align-self: stretch;
  padding: 8px;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  display: inline-flex;

  .avatar {
    width: 40px;
    height: 40px;
    position: relative;
    background: #9c9b9f;
    border-radius: 9999px;

    &::before {
      content: "";
      position: absolute;
      left: 7px;
      top: 10.5px;
      text-align: center;
      color: white;
      font-size: 16px;
      font-family: Work Sans;
      font-weight: 600;
      word-wrap: break-word;
    }
  }

  .message-display {
    flex: 1 1 0;
    padding: 2px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8px;
    display: inline-flex;

    .message-header {
      width: 229px;
      height: 50px;
      padding: 8px;
      background: white;
      border-radius: 40px;
      justify-content: flex-start;
      align-items: center;
      gap: 10px;
      display: inline-flex;

      .message-title {
        flex: 1 1 0;
        align-self: stretch;
        justify-content: flex-start;
        align-items: center;
        display: flex;

        .message-time {
          width: 56px;
          align-self: stretch;
          padding-right: 4px;
          justify-content: flex-end;
          align-items: center;
          gap: 10px;
          display: flex;
        }
      }
    }

    .message-content {
      align-self: stretch;
      height: 79px;
      padding: 8px;
      background: white;
      border-radius: 40px;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 10px;
      display: flex;

      .message-inner {
        align-self: stretch;
        height: 63px;
        padding-top: 4px;
        padding-left: 8px;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 4px;
        display: flex;

        .message-text {
          align-self: stretch;
          padding-left: 4px;
          padding-right: 4px;
          justify-content: flex-start;
          align-items: flex-start;
          gap: 10px;
          display: inline-flex;

          .message-content {
            flex: 1 1 0;
            text-align: center;
            color: #393640;
            font-size: 16px;
            font-family: Work Sans;
            font-weight: 400;
            word-wrap: break-word;
          }

          .message-time {
            align-self: stretch;
            padding-bottom: 2px;
            padding-right: 12px;
            justify-content: flex-end;
            align-items: flex-start;
            gap: 10px;
            display: inline-flex;
          }
        }
      }
    }
  }
}
</style>
