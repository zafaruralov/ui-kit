import BaseButton from "./components/ui/BaseButton.vue";
import DynamicInput from "./components/ui/DynamicInput.vue";

export { BaseButton, DynamicInput };

export default {
  install(app) {
    app.component("UiButton", BaseButton);
    app.component("UiInput", DynamicInput);
  }
};
