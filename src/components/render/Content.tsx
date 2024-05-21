import React from "react";
import { Element, useSelectedElement } from "../../core";

export const ContentElement = (config: Element["content"]) => {
  console.log(config);
  const { selectedElement, setSelectedElement } = useSelectedElement();
  const isSelected =
    selectedElement?.content?.text?.id === config?.text?.id ||
    selectedElement?.content?.media?.id === config.media?.id ||
    selectedElement?.content?.cta?.id === config.cta?.id;
  return (
    <div
      style={{ border: isSelected ? "1px solid red" : "1px solid transparent" }}
      onClick={() => setSelectedElement(config)}
    >
      {config.text && !config.text.hide && <p>{config.text.content}</p>}
      {config.media && !config.media.hide && (
        <img src={config.media.src} alt={config.media.alt} width={"100%"} />
      )}
      {config.cta && !config.cta.hide && <button>{config.cta.title}</button>}
    </div>
  );
};
