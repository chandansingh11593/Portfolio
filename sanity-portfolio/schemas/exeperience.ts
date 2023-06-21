import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'experience',
  type: 'document',
  title: 'Experience',
  fields: [
    defineField({
      name: 'designation',
      type: 'array',
      title: 'Designation',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'company',
      type: 'string',
      title: 'Company',
    }),
    defineField({
      name: 'startDate',
      type: 'date',
      title: 'Start Date',
    }),
    defineField({
      name: 'endDate',
      type: 'date',
      title: 'end Date',
    }),
    defineField({
      name: 'responsibilities',
      type: 'array',
      title: 'Responsibilities',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'companyIcon',
      title: 'Company Icon',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
