import type { Meta, StoryObj } from '@storybook/react';

import { MapComponent } from './map-component';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Components/MapComponent',
  component: MapComponent,
  tags: ['autodocs'],
  argTypes: {
    onPointerClicked: { action: 'onPointerClicked' }
  }
} satisfies Meta<typeof MapComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Base: Story = {
  args: {
    selectedPoint: '1',
    activePointIds: ['1', '2'],
    inactivePointIds: ['3', '4'],
    mapPointsData: [
      {
          id: '1',
          position: {
              x: 421,
              y: 425
          }
      },
      {
          id: '2',
          position: {
              x: 248,
              y: 77
          }
      },
      {
          id: '3',
          position: {
              x: 55,
              y: 267
          }
      },
      {
          id: '4',
          position: {
              x: 234,
              y: 646
          }
      },
      {
          id: '5',
          position: {
              x: 411,
              y: 898
          }
      },
      {
          id: '6',
          position: {
              x: 336,
              y: 687
          }
      },
      {
          id: '7',
          position: {
              x: 379,
              y: 712
          }
      }
  ]
  },
  render: (args) => {
    return <div style={{ height: '600px' }}>
      <MapComponent {...args} />
    </div>
  }
};

