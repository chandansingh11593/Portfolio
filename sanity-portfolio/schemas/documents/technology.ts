import {defineType} from 'sanity'
import {TerminalIcon} from '@sanity/icons'

export default defineType({
  name: 'technology',
  type: 'document',
  title: 'Technologies',
  icon: TerminalIcon,
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Experience',
    },
    {
      name: 'experience',
      title: 'Experience',
      type: 'string',
      options: {
        list: ['Amateur', 'Beginner', 'Advance', 'Expert'].map((value) => ({
          key: value,
          title: value,
          value,
        })),
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'Amateur',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Icon',
      options: {
        hotspot: true,
      },
    },
  ],
})
