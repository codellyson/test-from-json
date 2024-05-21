import React from "react";
import { useElements, useSelectedElement } from "../../core";
import { Stack, Switch, Text } from "@mantine/core";

export const ElementController = () => {
  const { selectedElement } = useSelectedElement();
  const { setElements, elements } = useElements();
  console.log(selectedElement, "elements");

  const updateElement = (e:HTMLInputElement, type: "media" | "text" | "cta") => {
    console.log(selectedElement?.content , "selectedElement?.content?.media?.id")
    const id = type === "media" ? selectedElement?.media?.id : type === "text" ? selectedElement?.text?.id : selectedElement?.cta?.id;
     const findElement = elements.find((el) => {
      if (el.content?.media?.id === id) {
        return el;
      }
      if (el.content?.text?.id === id) {
        return el;
      }
      if (el.content?.cta?.id === id) {
        return el;
      }
     })!;
     console.log(findElement, "findElement", id)
    if (findElement) {
      if (type === "media") {
        findElement!.content!.media!.hide = e.target.checked;
            setElements([...elements]);
      }
      if (type === "text") {
        findElement!.content!.text!.hide = e.target.checked;
        setElements([...elements]);
      }
      if (type === "cta") {
        findElement!.content!.cta!.hide = e.target.checked;
        setElements([...elements]);
      }
    }
  };
  if (!selectedElement) {
    return null;
  }
  return (
    <Stack>
      <Text fw="bold">Section Element</Text>
      <Stack>
        <Text>
          <Switch
            label="Media"
            checked={selectedElement?.content?.media?.hide}
            onChange={(e) => updateElement(e, "media")}
          />
        </Text>
        <Text>
          <Switch
            label="Text"
            checked={selectedElement?.content?.text?.hide}
            onChange={(e) => updateElement(e, "text")}
          />
        </Text>
        <Text>
          <Switch
            label="CTA"
            checked={selectedElement?.content?.cta?.hide}
            onChange={(e) => updateElement(e, "cta")}
          />
        </Text>
      </Stack>
    </Stack>
  );
};
