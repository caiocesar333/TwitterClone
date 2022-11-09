import { Meta, StoryObj } from '@storybook/react'

import { CardsC, CardsCProps } from './CardsC'

export default {
    title: 'Components/CardsC',
    component: CardsC,
    args: {
        children: 'CardB',
    },
    argTypes: {
    }

} as Meta<CardsCProps>

export const Default: StoryObj<CardsCProps> = {}

