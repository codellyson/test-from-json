import { ReactNode, useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";

import {
  TextInput,
  Paper,
  Group,
  SegmentedControl,
  Stack,
  Text,
  Textarea,
  FileInput,
  FileButton,
  Button,
} from "@mantine/core";
import { Element, useElements } from "./core";
interface PropertyControlProps {
  element: Element;
  setElements: (element: Element[]) => void;
}

export const PropertyControl: React.FC<PropertyControlProps> = ({
  element,
}) => {
  const { elements, setElements } = useElements();
  function updateElement(id: string, value: string, type: string) {
    const updatedElements = elements.map((el) => {
      if (el.id === id) {
        return { ...el, [type]: value };
      }
      return el;
    });
    setElements(updatedElements);
  }
  console.log(JSON.stringify(element, null, 2));

  switch (element.type) {
    case "content":
      return (
        <Paper p="md" shadow="md" withBorder>
          <Stack spacing="md">
            <Text>Uploads</Text>
            <SegmentedControl
              data={[
                { value: "image", label: "Image" },
                { value: "video", label: "Video" },
                { value: "link", label: "Link" },
              ]}
              value={element.content?.media?.type}
              onChange={(value: typeof element.content.media.type) => {
                const findElement = elements.find(
                  (el) => el.id === element.id
                )!;
                if (findElement) {
                  findElement!.content!.media!.type = value;
                  setElements([...elements]);
                }
              }}
            />
            {
              {
                image: (
                  <FileButton accept="image/png,image/jpeg">
                    {(props) => <Button {...props}>Upload image</Button>}
                  </FileButton>
                ),
                video: (
                  <FileButton accept="image/png,image/jpeg">
                    {(props) => <Button {...props}>Upload Video</Button>}
                  </FileButton>
                ),

                link: (
                  <TextInput
                    placeholder="Enter URL"
                    value={element.content?.media?.src}
                    onChange={(event) => {
                      const findElement = elements.find(
                        (el) => el.id === element.id
                      )!;
                      if (findElement) {
                        findElement!.content!.media!.src =
                          event.currentTarget.value;
                        setElements([...elements]);
                      }
                    }}
                  />
                ),
              }[element.content?.media?.type]
            }
          </Stack>

          <Stack spacing="xs" my="lg">
            <Text>Text</Text>
            <Textarea
              value={element.content?.text?.content}
              onChange={(event) =>
                updateElement(element.id, event.currentTarget.value, "content")
              }
            />
          </Stack>

          <Stack spacing="md">
            <Group position="apart">
              <Text size="sm">CTA</Text>
              <SegmentedControl
                data={[
                  { value: "button", label: "Button" },
                  { value: "link", label: "Link" },
                ]}
                value={element.content?.cta?.component?.type}
                onChange={(value) => {
                  const findElement = elements.find(
                    (el) => el.id === element.id
                  )!;
                  if (findElement) {
                    findElement!.content!.cta!.component!.type = value;
                    setElements([...elements]);
                  }
                }}
              />
            </Group>
            <TextInput
              placeholder="Title"
              value={element.content?.cta?.title}
              onChange={(event) => {
                const findElement = elements.find(
                  (el) => el.id === element.id
                )!;
                if (findElement) {
                  findElement!.content!.cta!.title = event.currentTarget.value;
                  setElements([...elements]);
                }
              }}
            />
            <TextInput
              placeholder="Link"
              value={element.content?.cta?.link}
              onChange={(event) => {
                const findElement = elements.find(
                  (el) => el.id === element.id
                )!;
                if (findElement) {
                  findElement!.content!.cta!.link = event.currentTarget.value;
                  setElements([...elements]);
                }
              }}
            />
          </Stack>
        </Paper>
      );
    case "divider":
      return (
        <Paper p="md" shadow="md" withBorder>
          <Stack spacing="md">
            <Group position="apart">
              <Text size="sm">Type</Text>
              <SegmentedControl
                data={[
                  { value: "line", label: "Line" },
                  { value: "space", label: "Space" },
                ]}
                value={element.divider?.type}
                onChange={(value) => {
                  const findElement = elements.find(
                    (el) => el.id === element.id
                  )!;
                  if (findElement) {
                    findElement!.divider!.type = value;
                    setElements([...elements]);
                  }
                }}
              />
            </Group>
          </Stack>
        </Paper>
      );
    default:
      return null;
  }
};
