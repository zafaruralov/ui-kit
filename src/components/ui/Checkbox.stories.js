import Checkbox from "./Checkbox.vue";

export default {
  title: "UI/Checkbox",
  component: Checkbox,
  argTypes: {
    id: { control: "text" },
    label: { control: "text" },
    value: { control: "text" },
    modelValue: {
      control: "object",
      description: "Boolean or Array depending on usage"
    },
    disabled: { control: "boolean" }
  }
};

const Template = (args, { updateArgs }) => ({
  components: { Checkbox },
  setup() {
    const updateValue = (val) => updateArgs({ modelValue: val });
    return { args, updateValue };
  },
  template: `<Checkbox v-bind="args" />`
});

export const Default = Template.bind({});
Default.args = {
  id: "checkbox-1",
  label: "I agree to terms",
  modelValue: false,
  value: true,
  disabled: false
};

export const GroupedCheckboxes = () => ({
  components: { Checkbox },
  data() {
    return {
      selected: ["apple"]
    };
  },
  template: `
      <div style="display: flex; flex-direction: column; gap: 10px;">
        <Checkbox id="cb-apple" label="Apple" value="apple" v-model="selected" />
        <Checkbox id="cb-banana" label="Banana" value="banana" v-model="selected" />
        <Checkbox id="cb-cherry" label="Cherry" value="cherry" v-model="selected" :disabled="true" />
        <div>Selected: {{ selected }}</div>
      </div>
    `
});
