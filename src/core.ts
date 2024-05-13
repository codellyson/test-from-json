import {create} from 'zustand'

export type Element = {
  component: string
  id: string
  src?: string;
  alt?: string;
  className: string
  children?: Element[] | string
}

type Store ={
  elements: Element
  setElements: (elements: Element) => void

}

export const useStore = create<Store>((set) => ({
   elements:[{
    component: "li",
    id: "cardWrapper",
    className: "col-span-1 flex shadow-sm rounded-md",
    children: [
      {
        component: "img",
        id: "reactLogo",
        src:  "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",  
        alt: "React Logo",
        className: "w-14 h-12 flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md",
        
      },
      {
        component: "div",
        id: "infoWrapper",
        className:
          "flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate",
        children: [
          {
            component: "div",
            id: "info",
            className: "flex-1 px-4 py-2 text-sm truncate",
            children: [
              {
                component: "p",
                id: "title",
                className: "text-gray-900 font-medium hover:text-gray-600",
                children: "GraphQL",
              },
              {
                component: "p",
                id: "readTime",
                className: "text-gray-500",
                children: "10 min read",
              },
              {
                component:"button",
                className:"bg-black text-white px-2 py-1 rounded-md",
                id:"actionButton",
                children: 'View More'
              }
            ],
          },
          {
            component: "div",
            id: "buttonWrapper",
            className: "flex-shrink-0 pr-2",
            children: [
              {
                component: "button",
                id: "optionButton",
                className:
                  "w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                children: [
                  {
                    component: "span",
                    id: "optionButtonSr",
                    className: "sr-only",
                    children: "Open Options",
                  },
                  {
                    component: "verticalDots",
                    id: "verticalDots",
                    className: "w-5 h-5",
                    ariaHidden: "true",
                  },
                ],
              },
            ],
          },
         
        ],
      },
    ],
  }, {
    component: 'table',
    id: 'my-table',
    className: 'w-full border-collapse',
    children: [
      {
        component: 'tr',
        className: 'bg-gray-200',
        children: [
          {
            component: 'th',
            className: 'px-4 py-2 border',
            children: 'Column 1'
          },
          {
            component: 'th',
            className: 'px-4 py-2 border',
            children: 'Column 2'
          },
          {
            component: 'th',
            className: 'px-4 py-2 border',
            children: 'Column 3'
          },
          {
            component: 'th',
            className: 'px-4 py-2 border',
            children: 'Column 4'
          }
        ]
      },
      {
        component: 'tr',
        children: [
          {
            component: 'td',
            className: 'px-4 py-2 border',
            children: 'Cell 1'
          },
          {
            component: 'td',
            className: 'px-4 py-2 border',
            children: 'Cell 2'
          },
          {
            component: 'td',
            className: 'px-4 py-2 border',
            children: 'Cell 3'
          },
          {
            component: 'td',
            className: 'px-4 py-2 border',
            children: 'Cell 4'
          }
        ]
      }
    ]
  }],

  setElements: (elements) => set({elements}),
}))

export const useElements = () => {
  const elements = useStore((state) => state.elements)
  const setElements = useStore((state) => state.setElements)
  return {elements, setElements}
}