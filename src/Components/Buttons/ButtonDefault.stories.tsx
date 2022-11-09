import { Meta, StoryObj } from '@storybook/react'

import { ButtonDefault, ButtonProps } from './ButtonDefault'

export default {
    title: 'Components/Button Default',
    component: ButtonDefault,
    args: {
        children: 'Tweet',
    },
    argTypes: {
    }

} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}

