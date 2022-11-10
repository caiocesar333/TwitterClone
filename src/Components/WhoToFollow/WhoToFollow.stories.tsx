import { Meta, StoryObj } from '@storybook/react'

import { WhoToFollow, WhoToFollowProps } from './WhoToFollow'

export default {
    title: 'Components/WhoToFollow',
    component: WhoToFollow,
    args: {
        children: 'WhoToFollow',
    },
    argTypes: {
    }

} as Meta<WhoToFollowProps>

export const Default: StoryObj<WhoToFollowProps> = {}

