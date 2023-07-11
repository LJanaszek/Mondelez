import type { Meta, StoryObj } from '@storybook/react';

import { PointsList } from './points-list';
import { GeoInfo } from '../geo-info/geo-info';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: 'Components/CompassView/PointsList',
    component: PointsList,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen'
    }
} satisfies Meta<typeof PointsList>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Base: Story = {
    args: {},
    render: (args) => {
        return <PointsList>
            <GeoInfo key={'p1'} bering={123} name={['Nazwa 1', 'Nazwa 2']} distance={123} />
            <GeoInfo key={'p2'} bering={123} name={['Nazwa 1', 'Nazwa 2']} distance={321} />
            <GeoInfo key={'p3'} bering={123} name={['Nazwa 1', 'Nazwa 2']} distance={2132} />
        </PointsList>
    }
};
