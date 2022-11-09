import { Meta, StoryObj } from '@storybook/react'

import { Profile1, ProfileProps } from './Profile1'

export default {
    title: 'Components/Profile1',
    component: Profile1,
    args: {
        children: 'Profile1',
    },
    argTypes: {
    }

} as Meta<ProfileProps>

export const Default: StoryObj<ProfileProps> = {}

