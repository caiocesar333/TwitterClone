import { Meta, StoryObj } from '@storybook/react'

import { New3, NewProps } from './New3'

export default {
    title: 'Components/New3',
    component: New3,
    args: {
        children: 'New3',
    },
    argTypes: {
    }

} as Meta<NewProps>

export const Default: StoryObj<NewProps> = {}

