import React from 'react';

import { Board } from '../index'

export default {
    title: 'Board',
    component: Board,
};

const Template = args => <Board {...args} />;

export const Default = Template.bind({});
Default.args = {
    squares: Array(9).fill(null),
};
