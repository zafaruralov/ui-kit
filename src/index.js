import BaseButton from "./components/ui/BaseButton.vue";
import DynamicInput from "./components/ui/DynamicInput.vue";
import TooltipBadge from "./components/ui/TooltipBadge.vue";

export { BaseButton, DynamicInput };

export default {
  install(app) {
    app.component("UiButton", BaseButton);
    app.component("UiInput", DynamicInput);
    app.component("UiTooltip", TooltipBadge);
  }
};
