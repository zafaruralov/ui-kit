import ToggleSwitch from "./Switch.vue";

export default {
  title: "UI/ToggleSwitch",
  component: ToggleSwitch,
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "secondary", "info", "success", "warning", "error"]
    },
    modelValue: { control: "boolean" },
    label: { control: "text" },
    name: { control: "text" },
    disabled: { control: "boolean" },
    id: { control: "text" }
  }
};

const Template = (args) => ({
  components: { ToggleSwitch },
  setup() {
    return { args };
  },
  template: `<ToggleSwitch v-bind="args" />`
});

export const Default = Template.bind({});
Default.args = {
  id: "toggle-id",
  color: "primary",
  modelValue: false,
  label: "Toggle me",
  name: "toggle",
  disabled: false
};
