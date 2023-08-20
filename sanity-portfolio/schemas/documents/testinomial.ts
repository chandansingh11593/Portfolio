import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'testimonial',
  type: 'document',
  title: 'Testimonials',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'position',
      type: 'string',
      title: 'Position',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'company',
      type: 'string',
      title: 'Company',
      validation: (rule) => rule.required(),
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
