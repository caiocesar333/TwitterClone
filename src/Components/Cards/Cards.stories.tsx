import { Meta, StoryObj } from '@storybook/react'

import { Cards, CardProps } from './Cards'

export default {
    title: 'Components/Cards',
    component: Cards,
    args: {
        children: 'Card',
    },
    argTypes: {
    }

} as Meta<CardProps>

export const Default: StoryObj<CardProps> = {}

