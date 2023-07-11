import type { Meta, StoryObj } from '@storybook/react';

import { GeoInfo } from './geo-info';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Components/CompassView/GeoInfo',
  component: GeoInfo,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<typeof GeoInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Base: Story = {
  args: {
    distance: 1234,
    name: ['Pierwsza czesc nazwy', 'druga czesc nazwy'],
    bering: 155
  },
  render: (args) => {
    return <GeoInfo {...args} />
  }
};
