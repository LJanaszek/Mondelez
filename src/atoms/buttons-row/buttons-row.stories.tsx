import type { Meta, StoryObj } from '@storybook/react';

import { ButtonsRow } from './buttons-row';
import { ButtonLike } from '../button-like';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: 'Atoms/ButtonsRow',
    component: ButtonsRow,
    tags: ['autodocs']
} satisfies Meta<typeof ButtonsRow>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Left: Story = {
    args: {},
    render: (args) => {
        return <ButtonsRow {...args}>
            <ButtonLike><div>Button 1</div></ButtonLike>
            <ButtonLike><div>Button 2</div></ButtonLike>
            <ButtonLike><div>Button 3</div></ButtonLike>
        </ButtonsRow>
    }
};

export const Center: Story = {
    args: {
        align: 'center'
    },
    render: Left.render
};

export const Right: Story = {
    args: {
        align: 'right'
    },
    render: Left.render
};
