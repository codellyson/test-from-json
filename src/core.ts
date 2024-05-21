import { CSSProperties } from "react";
import { create } from "zustand";

export type Element = {
  type: "content" | "divider";
  id: string;
  subType?: "cta" | "text" | "media";
  content: {
    text?: {
      id: string;
      content: string;
      hide?: boolean;
    };
    media?: {
      id: string;
      src: string;
      alt: string;
      hide?: boolean;
      type: "image" | "video" | "link";
    };
    cta?: {
      id: string;
      title: string;
      link: string;
      hide?: boolean;
      component?:{
        id: string;
        type: "button" | "link";
       
        props: {
           style:CSSProperties
      }};
    };
  };
  divider?: {
    id: string;
    type: "line" | "space";
  };
};

type Store = {
  elements: Element[];
  setElements: (elements: Element[]) => void;
 selectedElement: Element  | null;
 setSelectedElement: (element: Element) => void;
};
const randomId = () => Math.random().toString(36).substr(2, 9);
export const useStore = create<Store>((set) => ({
  elements: [
    {
      type: "content",
      id: randomId(),
      content: {
        text: {
          id: "1",
          content: "Hello World",
          hide: false,
        },
        media: {
          id:randomId(),
          src: "https://via.placeholder.com/150",
          alt: "placeholder",
          type: "image",
          hide: false,
        },
        cta: {
          id: randomId(),
          title: "Click Me",
          link: "https://www.google.com",
          hide: false,
          component:{
            id: randomId(),
            type: "button",
            props: {
              style:{
                backgroundColor: "blue",
                color: "white",
              }
            }
            }
        }
      },
    },
  ],

  setElements: (elements) => set({ elements }),
  selectedElement: null,
  setSelectedElement: (selectedElement) => set({ selectedElement }),
}));

export const useElements = () => {
  const elements = useStore((state) => state.elements);
  const setElements = useStore((state) => state.setElements);
  return { elements, setElements };
};


export const useSelectedElement = () => {
  const selectedElement = useStore((state) => state.selectedElement);
  const setSelectedElement = useStore((state) => state.setSelectedElement);
  return { selectedElement, setSelectedElement };
}