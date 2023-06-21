import {defineType} from 'sanity'
import {transformStringToDropdownOption} from '../utils'

export default defineType({
  name: 'tag',
  type: 'object',
  title: 'Tag',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Tag name',
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'color',
      type: 'string',
      title: 'Tag Color',
      options: {
        list: [
          {title: 'red', value: '#ffddee'},
          {title: 'yellow', value: '#ffabed'},
          {title: 'right', value: '#dedede'},
        ],
        layout: 'dropdown',
      },
    },
  ],
})
