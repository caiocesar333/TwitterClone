import { Meta, StoryObj } from '@storybook/react'

import { New, NewProps } from './New'

export default {
    title: 'Components/New',
    component: New,
    args: {
        children: 'New',
    },
    argTypes: {
    }

} as Meta<NewProps>

export const Default: StoryObj<NewProps> = {}

