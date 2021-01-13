import * as monaco from "monaco-editor";
import { data1 } from "./text.js";

export default function buildPrimary() {
  const priCon = document.getElementById("pri-con");
  let primaryContainer = monaco.editor.create(priCon, {
    value: data1,
    automaticLayout: true,
    language: "ruby",
    wordWrap: "on",
    scrollBeyondLastLine: false,
    verticalHasArrows: true,
    scrollbar: {
      useShadows: false,
      vertical: "visible",
      verticalScrollbarSize: 25,
      arrowSize: 30,
    },
  });

  primaryContainer.onMouseUp((event) => {
    if (window.selection == false) {
      return;
    }
    let posColumn = event.target.position.column;
    let posLine = event.target.position.lineNumber;
    let textArray = primaryContainer.getValue().split("\n");
    let lineElement = textArray[posLine - 1];
    let draggedText = window.selection;
    textArray[posLine - 1] = [
      lineElement
        .slice(0, posColumn - 1)
        .concat(draggedText, lineElement.slice(posColumn - 1)),
    ].join("");
    primaryContainer.setValue(textArray.join("\n"));
    window.selection = "";
  });
}
