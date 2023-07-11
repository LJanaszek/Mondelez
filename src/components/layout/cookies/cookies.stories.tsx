import type { Meta, StoryObj } from '@storybook/react';

import { CookiesInfo } from './cookies';
import { BrowserRouter } from 'react-router-dom';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Components/CookiesInfo',
  component: CookiesInfo,
  tags: ['autodocs'],
  argTypes: {
    closeCookies: { action: 'closeCookies' }
  },
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<typeof CookiesInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Base: Story = {
  args: {},
  render: (args) => {
    return <BrowserRouter>
      <CookiesInfo {...args} />
    </BrowserRouter>
  }
};
