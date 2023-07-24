import type { Meta, StoryObj } from '@storybook/react';

import { FindDiff } from './find-diff';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Components/FindDiff',
  component: FindDiff,
  tags: ['autodocs'],
  argTypes: {
    onComplete: { action: 'onComplete' }
  }
} satisfies Meta<typeof FindDiff>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Base: Story = {
  args: {},
  render: (args) => {
    return <div style={{ height: '600px' }}>
      <FindDiff {...args} />
    </div>
  }
};
