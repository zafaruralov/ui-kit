import BaseButton from "./BaseButton.vue";
import "@/assets/base.css";

export default {
  title: "UI/BaseButton",
  component: BaseButton,
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "secondary", "info", "success", "warning", "error"]
    },
    variant: {
      control: "select",
      options: ["solid", "outline", "text", "tag"]
    },
    size: {
      control: "select",
      options: ["small-x", "small", "medium", "large", "large-x"]
    },
    disabled: { control: "boolean" },
    icon: { control: "boolean" },
    badge: { control: "boolean" },
    badgeText: { control: "text" },
    badgePosition: {
      control: "select",
      options: ["in-block", "on-top", "on-hover"]
    },
    badgeDirection: {
      control: "select",
      options: ["top", "right", "bottom", "left"]
    },
    grouped: { control: "boolean" }
  }
};

const Template = (args) => ({
  components: { BaseButton },
  setup() {
    return { args };
  },
  template: `<BaseButton v-bind="args">Click Me</BaseButton>`
});

export const Default = Template.bind({});
Default.args = {
  color: "primary",
  variant: "solid",
  size: "medium",
  disabled: false,
  icon: false,
  badge: true,
  badgeText: "New!",
  badgePosition: "on-top",
  badgeDirection: "top",
  grouped: false
};
