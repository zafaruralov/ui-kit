import Radio from "./Radio.vue";

export default {
  title: "UI/Radio",
  component: Radio,
  argTypes: {
    id: { control: "text" },
    label: { control: "text" },
    name: { control: "text" },
    value: { control: "text" },
    modelValue: { control: "text" },
    disabled: { control: "boolean" }
  }
};

const Template = (args, { updateArgs }) => ({
  components: { Radio },
  setup() {
    const updateValue = (val) => updateArgs({ modelValue: val });
    return { args, updateValue };
  },
  template: `<Radio v-bind="args" />`
});

export const Default = Template.bind({});
Default.args = {
  id: "radio-1",
  label: "Option A",
  name: "example",
  value: "A",
  modelValue: "",
  disabled: false
};

export const Grouped = () => ({
  components: { Radio },
  data() {
    return {
      selected: "B"
    };
  },
  template: `
      <div style="display: flex; flex-direction: column; gap: 10px;">
        <Radio id="radio-a" label="Option A" name="group" value="A" v-model="selected" />
        <Radio id="radio-b" label="Option B" name="group" value="B" v-model="selected" />
        <Radio id="radio-c" label="Option C" name="group" value="C" v-model="selected" :disabled="true" />
        <div>Selected: {{ selected }}</div>
      </div>
    `
});
