const survey = [
	{
		slug: 'psychologist',
		title: 'ანიმუსი - ფსიქოლოგთან ვიზიტი',
		description: 'ჩანიშნეთ იდნვიდუალური ვიზიტი სპეციალისტთან.',
		image: '{https://animuscontent.s3.eu-central-1.amazonaws.com/Psychologist-Appointment-OG.png'
	},
	{
		slug: 'psychiatrist',
		title: 'ანიმუსი - ფსიქიატრთან კონსულტაცია',
		description: 'გაიარეთ კონსულტაცია ემოციის ექიმთან.',
		image: 'https://animuscontent.s3.eu-central-1.amazonaws.com/Psychiatrist-Appointment-OG.png'
	},
	{
		slug: 'grouptherapy',
		title: 'ანიმუსი - ჯგუფური შეხვედრები',
		description: 'მიიღეთ მონაწილეობა თერაპიულ ჯგუფებში.',
		image: 'https://animuscontent.s3.eu-central-1.amazonaws.com/Grouptherapy-Appointment-OG.png'
	},
	{
		slug: 'educational',
		title: 'ანიმუსი - საგანმანათლებლო პროგრამები',
		description: 'მიიღეთ მონაწილეობა საგანმანათლებლო პროგრამებში.',
		image: 'https://animuscontent.s3.eu-central-1.amazonaws.com/Educational-Appointment-OG.png'
	}
]

module.exports.getSurveyBySlug = slug => survey.filter(survey => survey.slug === slug)[0]
