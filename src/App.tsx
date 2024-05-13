import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { renderComponent } from "./components/render/renderComponent";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { useElements } from "./core";

function App() {
  const { elements, setElements } = useElements();
  const project = {
    name: "Graph API",
    initials: "GA",
    href: "#",
    members: 16,
    bgColor: "bg-pink-600",
  };
  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };
  const locateElement = (id: string) => {
    let v;
    Object.keys(elements).forEach((key) => {
      console.log(elements[key]);
      if (typeof elements[key] === "string") {
        if (elements[key] === id) {
          v = elements[key];
        }
        return v;
      }
      if (Array.isArray(elements[key])) {
        elements[key].forEach((element) => {
          if (element.id === id) {
            v = element;
            return v;
          }

          if (element.children) {
            if (Array.isArray(element.children)) {
              element.children.forEach((child) => {
                if (child.id === id) {
                  v = child;
                  return v;
                }

                if (child.children) {
                  if (Array.isArray(child.children)) {
                    child.children.forEach((c) => {
                      if (c.id === id) {
                        v = c;
                        return v;
                      }
                    });
                  }
                }
              });
            }
          }
        });
        return v;
      }
    });
    return v;
  };
  // console.log()

  useEffect(() => {
    console.log(locateElement("title"))
    console.log(
       

    )
  }, []);

  return (
    <div className="flex flex-col min-h-screen p-4">
      <ul className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <li key={project.name} className="col-span-1 flex shadow-sm rounded-md">
          <input
            type="text"
            placeholder="change card title"
            value={"Graph API"}
            onChange={(e) => {
              const foundElement = elements;
              console.log(foundElement);
              if (foundElement) {
                foundElement.children = e.target.value;
                setElements(elements);
              }
            }}
          />
        </li>
        {
          elements.map((element) => {
            return renderComponent(element);
          })
        }
      </ul>
    </div>
  );
}

export default App;
