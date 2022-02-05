const groupTherapy = [
	{
		slug: 'kundalini-yoga',
		title: 'ცნობიერების ამაღლება - კუნდალინი იოგა',
		description: 'პრაქტიკა ადამიანებისთვის, რომლებსაც სწრაფი ნაბიჯებით სურთ წინსვლა და მუდმივი განვითარების სურვილი აქვთ.',
		image: 'https://animuscontent.s3.eu-central-1.amazonaws.com/ogs/kundalini-yoga.png'
	},
	{
		slug: 'fable-therapy',
		title: 'კრიტიკული აზროვნება - იგავოთერაპია',
		description: 'ჩვენ გვჯერა, რომ ადამიანი ცოდნით რეალიზდება ამ სამყაროში. სწორედ ამისთვის, გადავწყვიტეთ, შეგვექმნა ის კურსი, რომელშიც მოზარდს, იგავების გამოყენებით, სამყაროში საკუთარი “მეს” აღმოჩენას ვთავაზობთ.',
		image: 'https://animuscontent.s3.eu-central-1.amazonaws.com/ogs/igavo-therapy.png'
	},
	{
		slug: 'self-confidence',
		title: 'მსურს მქონდეს ჯანსაღი თვითშეფასება',
		description: 'პირველი ახალი ნაბიჯი, რომელიც, ვფიქრობთ, მეტად თავდაჯერებულს გაგხდით.',
		image: 'https://animuscontent.s3.eu-central-1.amazonaws.com/ogs/self-confidence.png'
	},
	{
		slug: 'effective-communications',
		title: 'კომუნიკაციის ეფექტური უნარები',
		description: 'ეფექტური კომუნიკაცია გვაძლევს შესაძლებლობას მარტივად დავამყაროთ ურთიერთობა გარშემომყოფებთან, რაც თავის მხრივ, ერთ-ერთი გზაა წარმატებისკენ.',
		image: 'https://animuscontent.s3.eu-central-1.amazonaws.com/ogs/self-confidence.png'
	},
	{
		slug: 'arttherapy-development',
		title: 'მოტორული განვითარება',
		description: 'სასკოლო მზაობისა და ზოგადად დამოუკიდებლად ცხოვრებისათვის საჭირო უნარებისთვის აუცილებელი წინაპირობაა ბავშვის ნატიფი მოტორიკის განვითარება.',
		image: 'https://animuscontent.s3.eu-central-1.amazonaws.com/ogs/Motor-development.png'
	}
]

module.exports.getGroupTherapyBySlug = slug => groupTherapy.filter(therapy => therapy.slug === slug)[0]
