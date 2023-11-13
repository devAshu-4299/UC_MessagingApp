<template>
  <Form @submit="LogInUser" ref="form">
    <div class="base-container">
      <div class="rectangle-1"></div>
      <div class="group-8">
        <div class="group-7">
          <!-- Child divs within the nested div -->
          <img src="./../assets/images/Group7.svg" alt="" />
        </div>
        <!-- Other child divs within the second nested div -->
        <div class="other-child-div-1">Let’s Conect</div>
        <div class="other-child-div-2">One click away from your Circle!!</div>
        <div class="other-child-div-3">
          Nisi nunc et mi egestas nibh eget. Est cras suspendisse id erat elit
          felis, eu. Sollicitudin ullamcorper massa dictum enim id malesuada
          orci nibh pulvinar. Sed at feugiat arcu lorem et porttitor.
          Scelerisque amet orci congue dignissim.
        </div>
      </div>
      <div class="frame-5">
        <!-- Nested divs within the third nested div -->
        <div class="nested-div-1">Log in</div>
        <div class="nested-div-2">
          <!-- Child divs within the nested div -->
          <div class="child-div-1">
            Email
            <!-- Other child divs within the child div -->
            <div class="other-child-div-1">
              <InputValidator
                name="text"
                rules="required|email"
                v-slot="{ field, errors }"
              >
                <InputText
                  :class="errors && errors[0] ? 'error_msgs' : ''"
                  v-bind="field"
                  field="email"
                  v-model="email"
                />
                <span class="error_msg">
                  <small v-if="errors && errors[0]">{{ errors[0] }}</small>
                </span>
              </InputValidator>
            </div>
            <div class="other-child-div-2"></div>
            <div class="other-child-div-3"></div>
            <div class="other-child-div-4"></div>
          </div>
          <Button label="Log In" type="submit" />
          <div class="child-div-3">
            <!-- Other child divs within the child div -->
            <div class="other-child-div-1">
              <div class="nested-div-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Form>
</template>

<script>
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      email: "",
    };
  },
  components: {
    InputText,
    Button,
  },
  computed: {
    ...mapGetters({
      getUserName: "getUserName",
    }),
  },
  methods: {
    ...mapActions({
      LogInSuccessful: "LogInSuccessful",
    }),
    async LogInUser() {
      const resp = await this.LogInSuccessful(this.email);
      if (resp.status == 200) {
        localStorage.setItem("username", this.getUserName);
        this.$router.push("/chats");
      }
    },
  },
  async mounted() {},
};
</script>
<style></style>
