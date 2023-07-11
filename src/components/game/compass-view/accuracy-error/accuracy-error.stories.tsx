import type { Meta, StoryObj } from '@storybook/react';

import { AccuracyErrorTemplate } from './accuracy-error';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Components/CompassView/AccuracyError',
  component: AccuracyErrorTemplate,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<typeof AccuracyErrorTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Base: Story = {
  args: {
    accuracy: 40,
    minGeoAccuracy: 20
  },
  render: (args) => {
    return <AccuracyErrorTemplate {...args} />
  }
};
