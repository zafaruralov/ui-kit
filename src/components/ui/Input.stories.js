import { ref, watch } from "vue";
import InputText from "./DynamicInput.vue";
import "@/assets/main.css";

export default {
  title: "UI/InputText",
  component: InputText,
  argTypes: {
    modelValue: { control: "text" },
    label: { control: "text" },
    placeholder: { control: "text" },
    preaddon: { control: "text" },
    postaddon: { control: "text" },
    required: { control: "boolean" },
    readonly: { control: "boolean" },
    disabled: { control: "boolean" },
    type: {
      control: "select",
      options: ["text", "email", "password", "number"]
    },
    status: {
      control: "select",
      options: ["success", "error", ""]
    },
    message: { control: "text" },
    isStaticLabel: { control: "boolean" }
  }
};

const Template = (args) => ({
  components: { InputText },
  setup() {
    const model = ref(args.modelValue);
    watch(model, (val) => {
      args.modelValue = val;
    });
    return { args, model };
  },
  template: `
    <InputText v-bind="args" v-model="model">
      <template v-if="args.preappend" #preappend>
        <button class="input-button left">{{ args.preappend }}</button>
      </template>
      <template v-if="args.append" #append>
        <button class="input-button right">{{ args.append }}</button>
      </template>
    </InputText>
  `
});

export const Default = Template.bind({});
Default.args = {
  modelValue: "",
  label: "Ваше Ф.И.О.",
  placeholder: "hi",
  status: "",
  required: true,
  postaddon: ".com",
  isStaticLabel: true,
  message: "Пользователь уже существует!",
  append: null,
  preappend: null
};

export const WithPreaddon = Template.bind({});
WithPreaddon.args = {
  modelValue: "",
  label: "Website",
  placeholder: "",
  preaddon: "https://",
  postaddon: ".com",
  isStaticLabel: false
};

export const WithPostaddonAndAppend = Template.bind({});
WithPostaddonAndAppend.args = {
  modelValue: "",
  label: "Email",
  placeholder: "Enter your email",
  postaddon: ".com",
  append: "Check",
  isStaticLabel: true
};

export const FloatingLabelWithIcons = Template.bind({});
FloatingLabelWithIcons.args = {
  modelValue: "",
  label: "Your Name",
  placeholder: "John Doe",
  hasIconLeft: true,
  hasIconRight: true,
  isStaticLabel: false,
  message: "Looks good",
  status: ""
};

export const ReadonlySuccess = Template.bind({});
ReadonlySuccess.args = {
  modelValue: "readonly@example.com",
  label: "Email (Readonly)",
  isStaticLabel: true,
  status: "success",
  readonly: true,
  message: "Email is read only"
};

export const GroupedInputs = () => ({
  components: { InputText },
  setup() {
    const username = ref("");
    const domain = ref("");
    return { username, domain };
  },
  template: `
    <div style="display: flex; gap: 8px;">
      <InputText v-model="username" placeholder="username" label="Login" :is-static-label="true" />
      <InputText v-model="domain" placeholder="domain.com" postaddon=".com" label="Domain" :is-static-label="true" />
    </div>
  `
});
