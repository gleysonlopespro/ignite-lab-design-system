import {Meta, StoryObj} from '@storybook/react'
import { Text, TextProps } from './Text'

export default {
    tittle: 'components/Text',
    component: Text,
    args: {
        children: 'Loren ipsum',
        size: 'md',
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio'
            }
        },

        children: {
            table: {
                disable: true
            }
        },

        asChild: {
            table: {
                disable: true,
            }
        } 
    }
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const small: StoryObj<TextProps> = {
    args: {
        size: 'sm'
    }
}

export const large: StoryObj<TextProps> = {
    args: {
        size: 'lg'
    }
}

export const CustomComponent: StoryObj<TextProps> = {
    args: {
        asChild: true,
        children: (
            <p>Text with P tag</p>
        )
    },
}