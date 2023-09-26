import React from "react";

import Game from '../Game';

export default {
    title: 'Game',
    component: Game,
};

const Template = args => <Game {...args} />;

export const Default = Template.bind({});
Default.args = {
    history: [{
        squares: Array(9).fill(null),
    }],
    stepNumber: 0,
    xIsNext: true,
};

export const WinCross = Template.bind({});
WinCross.args = {
    history: [
        {squares: Array(9).fill(null)},
        {squares: [null, null, null, null, 'X', null, null, null, null]},
        {squares: ['O', null, null, null, 'X', null, null, null, null]},
        {squares: ['O', null, null, 'X', 'X', null, null, null, null]},
        {squares: ['O', 'O', null, 'X', 'X', null, null, null, null]},
        {squares: ['O', 'O', null, 'X', 'X', 'X', null, null, null]},
    ],
    stepNumber: 5,
    xIsNext: false,
};

export const WinCircle = Template.bind({});
WinCircle.args = {
    history: [
        {squares: Array(9).fill(null)},
        {squares: [null, null, null, null, 'X', null, null, null, null]},
        {squares: ['O', null, null, null, 'X', null, null, null, null]},
        {squares: ['O', null, null, 'X', 'X', null, null, null, null]},
        {squares: ['O', 'O', null, 'X', 'X', null, null, null, null]},
        {squares: ['O', 'O', null, 'X', 'X', null, 'X', null, null]},
        {squares: ['O', 'O', 'O', 'X', 'X', null, 'X', null, null]},
    ],
    stepNumber: 6,
    xIsNext: true,
};

export const Draw = Template.bind({});
Draw.args = {
    history: [
        {squares: Array(9).fill(null)},
        {squares: [null, null, null, null, 'X', null, null, null, null]},
        {squares: ['O', null, null, null, 'X', null, null, null, null]},
        {squares: ['O', null, null, 'X', 'X', null, null, null, null]},
        {squares: ['O', null, null, 'X', 'X', 'O', null, null, null]},
        {squares: ['O', 'X', null, 'X', 'X', 'O', null, null, null]},
        {squares: ['O', 'X', null, 'X', 'X', 'O', null, 'O', null]},
        {squares: ['O', 'X', 'X', 'X', 'X', 'O', null, 'O', null]},
        {squares: ['O', 'X', 'X', 'X', 'X', 'O', 'O', 'O', null]},
        {squares: ['O', 'X', 'X', 'X', 'X', 'O', 'O', 'O', 'X']},
    ],
    stepNumber: 9,
    xIsNext: true,
};
