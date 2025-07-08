import Input from "./DynamicInput.vue";

export default {
  title: "UI/Input",
  component: Input,
  argTypes: {
    modelValue: { control: "text" },
    label: { control: "text" },
    placeholder: { control: "text" },
    preaddon: { control: "text" },
    postaddon: { control: "text" },
    required: { control: "boolean" },
    type: {
      control: "select",
      options: ["text", "password", "email", "number"]
    },
    status: {
      control: "select",
      options: ["success", "error"]
    },
    message: { control: "text" },
    disabled: { control: "boolean" },
    readonly: { control: "boolean" },
    isStaticLabel: { control: "boolean" }
  }
};
const Template = (args) => ({
  components: { Input },
  data() {
    return {
      model: args.modelValue
    };
  },
  watch: {
    model(val) {
      this.$emit?.("update:modelValue", val);
    }
  },
  template: `<Input v-bind="args" v-model="model" />`
});
export const Default = Template.bind({});
Default.args = {
  modelValue: "",
  label: "Your name",
  placeholder: "Enter your name",
  type: "text",
  required: true,
  preaddon: "👤",
  postaddon: "",
  status: undefined,
  message: "",
  disabled: false,
  readonly: false,
  isStaticLabel: false
};
export const FloatingLabel = Template.bind({});
FloatingLabel.args = {
  ...Default.args,
  label: "Email",
  placeholder: "Enter your email",
  isStaticLabel: false,
  type: "email"
};

export const WithStatus = Template.bind({});
WithStatus.args = {
  ...Default.args,
  label: "Phone",
  modelValue: "998",
  status: "success",
  message: "Looks good!"
};

export const WithError = Template.bind({});
WithError.args = {
  ...Default.args,
  label: "Phone",
  modelValue: "",
  status: "error",
  message: "This field is required"
};
