import { Meta, StoryObj } from '@storybook/react'

import { New2, NewProps } from './New2'

export default {
    title: 'Components/New2',
    component: New2,
    args: {
        children: 'New2',
    },
    argTypes: {
    }

} as Meta<NewProps>

export const Default: StoryObj<NewProps> = {}

