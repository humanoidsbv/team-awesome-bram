import { ReactPortal } from "react";
import { Button } from "../components/button/Button";

export default {
  title: "Button",
  component: Button,
  decorators: [(Story: () => ReactPortal) => <div style={{ margin: "3em" }}>{Story()}</div>],
  argTypes: {
    onClick: { action: "clicked" },
    secondary: {
      options: [true, false],
      control: { type: "radio" },
    },
    icon: {
      options: [true, false],
      control: { type: "radio" },
    },
    label: {
      defaultValue: "Hello",
    },
  },
};

interface ButtonProps {
  icon?: boolean;
  label: string;
  onClick?: () => void;
  secondary?: boolean;
  type?: "button" | "submit" | "reset";
}

export const Primary = (args: ButtonProps) => <Button {...args} />;
