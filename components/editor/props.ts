import { EditorProps } from "@tiptap/pm/view";

import { handleImageUpload } from "./utils";

export const TiptapEditorProps: EditorProps = {
  attributes: {
    class:
      "prose prose-stone prose-headings:font-cal focus:outline-none max-w-full dark:prose-invert",
  },
  handleDOMEvents: {
    keydown: (_view, event) => {
      // prevent default event listeners from firing when slash command is active
      if (["ArrowUp", "ArrowDown", "Enter"].includes(event.key)) {
        const slashCommand = document.querySelector("#slash-command");
        if (slashCommand) {
          return true;
        }
      }
    },
  },
  handleDrop: (view, event, _slice, moved) => {
    if (
      !moved &&
      event.dataTransfer &&
      event.dataTransfer.files &&
      event.dataTransfer.files[0]
    ) {
      event.preventDefault();
      const file = event.dataTransfer.files[0];
      return handleImageUpload(file, view, event);
    }
    return false;
  },
  handlePaste: (view, event) => {
    if (
      event.clipboardData &&
      event.clipboardData.files &&
      event.clipboardData.files[0]
    ) {
      event.preventDefault();
      const file = event.clipboardData.files[0];
      return handleImageUpload(file, view, event);
    }
    return false;
  },
};
