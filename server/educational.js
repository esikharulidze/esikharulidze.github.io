const educational = [
	{
		slug: 'practical-grammar',
		title: 'პრაქტიკული გრამატიკა',
		description: 'ჩვენ გთავაზობთ სკოლის მოსწავლეებისთვის და არა მარტო მათთვის, ქართული ენის გრამატიკის კურსს, რომელიც აგებულია თანამედროვე სტანდარტებზე, სიმარტივეზე და რა თქმა უნდა, დაფუძნებულია პრაქტიკულ სამუშაოზე.',
		image: 'https://animuscontent.s3.eu-central-1.amazonaws.com/ogs/grammerog.png'
	},
	{
		slug: 'preparing-for-school',
		title: 'სასკოლო მზაობის პროგრამა',
		description: 'ბავშვები ავითარებენ უნარებს, რომლებიც მათი ასაკობრივი შესაძლებლობების მაქსიმალურად გამოყენებაში, უცხო გარემოში მარტივად ადაპტაციაში, სკოლაში მიწოდებული ინფორმაციისა და ცოდნის უკეთ ათვისებაში დაეხმარებათ.',
		image: 'https://animuscontent.s3.eu-central-1.amazonaws.com/ogs/preschoolog.png'
	}
]

module.exports.getEducationalBySlug = slug => educational.filter(therapy => therapy.slug === slug)[0]
