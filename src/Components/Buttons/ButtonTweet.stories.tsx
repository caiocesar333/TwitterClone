import { Meta, StoryObj } from '@storybook/react'

import { ButtonTweet, ButtonTProps } from './ButtonTweet'

export default {
    title: 'Components/Button Tweet',
    component: ButtonTweet,
    args: {
        children: 'Tweet',
    },
    argTypes: {
    }

} as Meta<ButtonTProps>

export const Default: StoryObj<ButtonTProps> = {}

