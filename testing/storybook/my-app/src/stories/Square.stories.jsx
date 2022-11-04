import React from "react";

import { Square } from '../index';

export default {
    title: 'Square',
    component: Square,
};

const Template = args => <Square {...args} />;

export const Default = Template.bind({});
Default.args = {
    value: null,
};
