import { Meta, StoryObj } from '@storybook/react'

import { ButtonFollow, ButtonProps } from './ButtonFollow'

export default {
    title: 'Components/Button Follow',
    component: ButtonFollow,
    args: {
        children: 'Follow',
    },
    argTypes: {
    }

} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}

