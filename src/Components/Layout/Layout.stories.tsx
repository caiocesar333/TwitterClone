import { Meta, StoryObj } from '@storybook/react'

import { Layout, LayoutProps } from './Layout'

export default {
    title: 'Components/Layout',
    component: Layout,
    args: {
        children: 'Layout',
    },
    argTypes: {
    }

} as Meta<LayoutProps>

export const Default: StoryObj<LayoutProps> = {}

