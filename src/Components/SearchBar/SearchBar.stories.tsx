import { Meta, StoryObj } from '@storybook/react'

import { SearchBar, SearchBarProps } from './SearchBar'

export default {
    title: 'Components/SearchBar',
    component: SearchBar,
    args: {
        children: 'SearchBar',
    },
    argTypes: {
    }

} as Meta<SearchBarProps>

export const Default: StoryObj<SearchBarProps> = {}

