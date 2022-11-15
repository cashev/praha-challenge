import React from 'react';

import Board from '../Board'

export default {
    title: 'Board',
    component: Board,
};

const Template = args => <Board {...args} />;

export const Default = Template.bind({});
Default.args = {
    squares: Array(9).fill(null),
};

export const WinCross = Template.bind({});
WinCross.args = {
    squares: [null, 'X', 'O', null, 'X', 'O', null, 'X', null],
};

export const WinCircle = Template.bind({});
WinCircle.args = {
    squares: [null, null, 'O', 'X', 'X', 'O', 'X', null, 'O'],
};

export const Draw = Template.bind({});
Draw.args = {
    squares: ['O', 'X', 'X', 'X', 'X', 'O', 'O', 'O', 'X'],
};

export const FillWithCross = Template.bind({});
FillWithCross.args = {
    squares: Array(9).fill('X'),
};

export const FillWithCircle = Template.bind({});
FillWithCircle.args = {
    squares: Array(9).fill('O'),
};

export const FillWithTriangle = Template.bind({});
FillWithTriangle.args = {
    squares: Array(9).fill('△'),
};
