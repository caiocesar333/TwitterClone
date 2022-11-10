import { Meta, StoryObj } from '@storybook/react'

import { WhatsHappening, WhatsHappeningProps } from './WhatsHappening'

export default {
    title: 'Components/WhatsHappening',
    component: WhatsHappening,
    args: {
        children: 'WhatsHappening',
    },
    argTypes: {
    }

} as Meta<WhatsHappeningProps>

export const Default: StoryObj<WhatsHappeningProps> = {}

