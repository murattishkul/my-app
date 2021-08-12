import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Select } from "../components/Select/Select";

export default {
    title: "Example/Select",
    component: Select,
    argTypes: {
      backgroundColor: { control: "color" },
    },
  } as ComponentMeta<typeof Select>;
  
  const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;
  
  export const Primary = Template.bind({});
  Primary.args = {
  };
  
  export const EmptyOptions = Template.bind({});

  EmptyOptions.args = {
    options: []
  };
  
  export const SomeOptions = Template.bind({});

  SomeOptions.args = {
      options: [{value: 'KZ', label: 'KZ'},{value: 'UA', label: 'UA'},{value:'US', label: 'US'}]
  };
  
  