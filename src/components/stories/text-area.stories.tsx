import type { Meta, StoryObj } from "@storybook/react";

import { Textarea } from "./text-area";

const meta = {
  title: "Text area",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextInput: Story = {
  args: {
    placeholder: "Add long text here",
  },
};
