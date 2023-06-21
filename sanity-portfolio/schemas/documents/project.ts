import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Project Name',
    }),
    defineField({
      name: 'summary',
      type: 'array',
      of: [{type: 'block'}],
      title: 'Description',
    }),
    defineField({
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [{type: 'image'}],
    }),
    defineField({
      name: 'sourceCodeLink',
      title: 'Source Code Link',
      type: 'slug',
    }),
    defineField({
      name: 'sourceIcon',
      title: 'Source Icon',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [{type: 'tag'}],
    }),
  ],
})
