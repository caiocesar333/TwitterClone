import { Meta, StoryObj } from '@storybook/react'

import { Profile2, ProfileProps } from './Profile2'

export default {
    title: 'Components/Profile2',
    component: Profile2,
    args: {
        children: 'Profile2',
    },
    argTypes: {
    }

} as Meta<ProfileProps>

export const Default: StoryObj<ProfileProps> = {}

