import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'experience',
  type: 'document',
  title: 'Experiences',
  preview: {
    select: {
      title: 'company',
      subtitle: 'designation',
      startDate: 'startDate',
      endDate: 'endDate',
      media: 'companyIcon',
    },
    prepare(experience, options) {
      const {title, subtitle, startDate, endDate, media} = experience

      const formatDate = (date: string) => {
        if (date) {
          return date.split('-')[0]
        }
        return 'present'
      }

      return {
        title,
        subtitle: `${subtitle}( ${formatDate(startDate)} - ${formatDate(endDate)} )`,
        media,
      }
    },
  },
  fields: [
    defineField({
      name: 'designation',
      type: 'string',
      title: 'Designation',
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
