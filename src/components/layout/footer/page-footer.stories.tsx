import type { Meta, StoryObj } from '@storybook/react';

import { PageFooter } from './page-footer';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Layout/PageFooter',
  component: PageFooter,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<typeof PageFooter>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Base: Story = {
  args: {},
  render: (args) => {
    return <PageFooter {...args} />
  }
};
