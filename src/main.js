import Vue from "vue";
import App from "./App.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faFileCode } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

library.add(faFile);
library.add(faFileCode);
library.add(faTimes);

Vue.component("font-awesome-icon", FontAwesomeIcon);
new Vue({
  render: (h) => h(App),
}).$mount("#app");

//Mid Drag

let handler = document.querySelector(".handler");
let wrapper = handler.closest(".wrapper");
let boxA = wrapper.querySelector(".box");
let isHandlerDragging = false;

document.addEventListener("mousedown", (e) => {
  if (e.target === handler) {
    isHandlerDragging = true;
  }
});

document.addEventListener("mousemove", (e) => {
  if (!isHandlerDragging) {
    return false;
  }
  let containerOffsetLeft = wrapper.offsetLeft;
  let pointerRelativeXpos = e.clientX - containerOffsetLeft;
  let boxAminWidth = 300;
  boxA.style.width = Math.max(boxAminWidth, pointerRelativeXpos - 8) + "px";
  boxA.style.flexGrow = 0;
});

document.addEventListener("mouseup", () => {
  isHandlerDragging = false;
});
