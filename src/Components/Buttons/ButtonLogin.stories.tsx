import { Meta, StoryObj } from '@storybook/react'

import { ButtonLogin, ButtonLoginProps  } from "./ButtonLogin";

export default {
    title: 'Components/Button Login',
    component: ButtonLogin,
    args: {
        children: 'Login',
    },
    argTypes: {
    }

} as Meta<ButtonLoginProps>

export const Default: StoryObj<ButtonLoginProps> = {}