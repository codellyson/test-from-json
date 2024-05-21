import { createElement } from "react";
import { Div } from "./Div";
import { Li } from "./Li";
import { P } from "./P";
import { Button } from "./Button";
import { VerticalDots } from "./VerticalDots";
import { Img } from "./Img";
import { Tr } from "./Tr";
import { Td } from "./Td";
import { Table } from "./Table";
import { Th } from "./Th";
import { Element } from "../../core";
import { ContentElement } from "./Content";
import { Divider } from "@mantine/core";

const keysToComponentMap = {
  div: Div,
  li: Li,
  p: P,
  button: Button,
  verticalDots: VerticalDots,
  img: Img,
  table: Table,
  td: Td,
  tr: Tr,
  th: Th,
};

const stylesMap = (styles) => {
  let mappedStyles = {};
  styles.forEach((style) => {
    mappedStyles[style.name] = style.value;
  });
  return mappedStyles;
};

// export const renderComponent = (config) => {
//   if (typeof keysToComponentMap[config.component] !== "undefined") {
//     return createElement(
//       keysToComponentMap[config.component],
//       {
//         id: config.id,
//         key: config.id,
//         className: config.className ? config.className : null,
//         ariaHidden: config.ariaHidden ? config.ariaHidden : null,
//         style: config.styles ? stylesMap(config.styles) : null,
//         src: config.src,
//         alt: config.alt,
//       },
//       config.children &&
//         (typeof config.children === "string"
//           ? config.children
//           : config.children.map((c) => renderComponent(c)))
//     );
//   }
// };

export const renderElement = (element: Element) => {
  switch (element.type) {
    case "content":
      return <ContentElement cta={
        element.content.cta
      } media={
        element.content.media
      } text={
        element.content.text
      }
      key={element.id}
      
      />;
    case "divider":
      return <Divider
        key={element.id}
        variant={element.divider?.type ==='line' ? 'solid' : 'dashed'}
        my={element.divider?.type ==='line' ? 'md' : 'xs'}
      />
    default:
      return null;
  }
};
