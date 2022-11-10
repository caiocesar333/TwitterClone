import { Meta, StoryObj } from '@storybook/react'

import { CardsB, CardsBProps } from './CardsB'

export default {
    title: 'Components/CardsB',
    component: CardsB,
    args: {
        children: 'CardB',
    },
    argTypes: {
    }

} as Meta<CardsBProps>

export const Default: StoryObj<CardsBProps> = {}

