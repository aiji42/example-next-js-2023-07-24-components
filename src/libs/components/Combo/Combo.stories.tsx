import { Combo } from '.'
import {Meta, StoryObj} from '@storybook/react'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Combo> = {
  title: 'Combo',
  component: Combo,
}
export default meta

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: StoryObj<typeof Combo> = {

}