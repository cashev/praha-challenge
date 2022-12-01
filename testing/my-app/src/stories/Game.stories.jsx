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
