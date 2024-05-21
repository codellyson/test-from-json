import { useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  renderComponent,
  renderElement,
} from "./components/render/renderComponent";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { useElements } from "./core";
import { PropertyControl } from "./PropertyControl";
import {
  Box,
  Button,
  Flex,
  Grid,
  Group,
  MantineProvider,
  ScrollArea,
  Stack,
  rem,
} from "@mantine/core";
import { ElementController } from "./components/render/ElementController";

function App() {
  const { elements, setElements } = useElements();

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
  console.log(elements);

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Flex pos={"relative"}>
        <Box
          pos="fixed"
          sx={{
            width: "100%",
            maxWidth: "300px",
            height: "100vh",
            zIndex: 100,
            backgroundColor: "white",
          }}
        >
          <Stack>
            <ScrollArea.Autosize mah={600}>
              {elements.map((element) => {
                return (
                  <PropertyControl
                    key={element.id}
                    element={element}
                    setElements={(element) => {
                      const newElements = elements.map((el) => {
                        if (el.id === element.id) {
                          return element;
                        }
                        return el;
                      });
                      setElements(newElements);
                    }}
                  />
                );
              })}
            </ScrollArea.Autosize>
          </Stack>
          <Group>
            <Button
              onClick={() => {
                setElements([
                  ...elements,
                  {
                    type: "content",
                    id: Math.random().toString(36).substr(2, 9),
                    content: {
                      text: {
                        id: Math.random().toString(36).substr(2, 9),
                        content: "Hello World",
                        hide: false,
                      },
                      media: {
                        id: Math.random().toString(36).substr(2, 9),
                        src: "https://via.placeholder.com/150",
                        alt: "placeholder",
                        type: "image",
                        hide: false,
                      },
                    },
                  },
                ]);
              }}
            >
              Add Content
            </Button>
            <Button
              onClick={() => {
                setElements([
                  ...elements,
                  {
                    type: "divider",
                    id: Math.random().toString(36).substr(2, 9),
                    divider: {
                      id: Math.random().toString(36).substr(2, 9),
                      type: "line",
                    },
                  },
                ]);
              }}
            >
              Add Divider
            </Button>
          </Group>
        </Box>
        <Box
          bg="gray.1"
          pos={"relative"}
          sx={{
            width: "100%",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <Box
            sx={{
              maxWidth: "calc(100% - 300px)",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              width: "100%",
            }}
          >
            {elements.map((element) => {
              return renderElement(element);
            })}
          </Box>
        </Box>
        <Box
          pos={"fixed"}
          right={0}
          bg="white"
          sx={{
            width: "100%",
            height: "100vh",
            maxWidth: "300px",
          }}
        >
          <ElementController />
        </Box>
      </Flex>
    </MantineProvider>
  );
}

export default App;
