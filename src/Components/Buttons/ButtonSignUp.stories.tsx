import { Meta, StoryObj } from '@storybook/react'

import { ButtonSignUp, ButtonSignUpProps } from "./ButtonSignUp";

export default {
    title: 'Components/ButtonSignUp',
    component: ButtonSignUp,
    args: {
        children: 'Sign Up',
    },
    argTypes: {
    }

} as Meta<ButtonSignUpProps>

export const Default: StoryObj<ButtonSignUpProps> = {}