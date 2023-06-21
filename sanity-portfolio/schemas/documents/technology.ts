import {defineType} from 'sanity'

export default defineType({
  name: 'technology',
  type: 'document',
  title: 'Technologies',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
  ],
})
