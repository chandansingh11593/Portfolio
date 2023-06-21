import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'testimonial',
  type: 'document',
  title: 'Testimonial',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
    }),
    defineField({
      name: 'position',
      type: 'string',
      title: 'Position',
    }),
    defineField({
      name: 'company',
      type: 'string',
      title: 'Company',
    }),
    defineField({
      name: 'feedback',
      type: 'string',
      title: 'Feedback',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Profile Image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
