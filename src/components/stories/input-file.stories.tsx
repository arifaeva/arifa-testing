import type { Meta, StoryObj } from "@storybook/react";

import { InputFile } from "./input-file";

const meta = {
  title: "File Input",
  component: InputFile,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: { control: "text" },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof InputFile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FileInput: Story = {
  args: {
    placeholder: "Choose file",
  },
};
