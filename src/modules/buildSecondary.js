import * as monaco from "monaco-editor";
import { data2 } from "./text.js";

export default function buildSecondary() {
  const secCon = document.getElementById("sec-con");
  let secondaryContainer = monaco.editor.create(secCon, {
    value: data2,
    automaticLayout: true,
    language: "ruby",
    wordWrap: "on",
    scrollBeyondLastLine: false,
    scrollbar: {
      useShadows: false,
      vertical: "visible",
      verticalScrollbarSize: 25,
      arrowSize: 30,
    },
  });

  secondaryContainer.onMouseDown(() => {
    window.selection = secondaryContainer
      .getModel()
      .getValueInRange(secondaryContainer.getSelection());
  });
}
