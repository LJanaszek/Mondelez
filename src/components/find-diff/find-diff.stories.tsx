import type { Meta, StoryObj } from '@storybook/react';

import { FindDiff } from './find-diff';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Components/FindDiff',
  component: FindDiff,
  tags: ['autodocs'],
  argTypes: {
  }
} satisfies Meta<typeof FindDiff>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Base: Story = {
  args: {
    targets: [{
      id: 'b01',
      position: {
        x: 160,
        y: 135
      }
    },
    {
      id: 'b02',
      position: {
        x: 610,
        y: 76
      }
    },
    {
      id: 'b03',
      position: {
        x: 515,
        y: 205
      }
    },
    {
      id: 'b04',
      position: {
        x: 650,
        y: 195
      }
    },
    {
      id: 'b05',
      position: {
        x: 240,
        y: 220
      }
    },
    {
      id: 'b06',
      position: {
        x: 135,
        y: 390
      }
    },
    {
      id: 'b07',
      position: {
        x: 400,
        y: 400
      }
    },
    {
      id: 'b08',
      position: {
        x: 135,
        y: 495
      }
    },
    {
      id: 'b09',
      position: {
        x: 230,
        y: 565
      }
    },
    {
      id: 'b10',
      position: {
        x: 520,
        y: 545
      }
    },
    ],
    imgWidth: 443,
    imgHeight: 788,
    img1src: '/find-diff-demo-1.jpg',
    img2src: '/find-diff-demo-2.jpg',
  },
  render: (args) => {
    return <div>
      <FindDiff {...args} />
    </div>
  }
};
