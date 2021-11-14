interface Answer {
	_id: string
	question: Question | string
	answer: string
	jumpTo?: Question | string
}

interface Question {
	_id: string
	question: string
	answers: Answer[]
	multiple: boolean
	next?: Question | string
	first?: boolean
	underage?: boolean
	couple?: boolean
	forMe?: boolean
	forElse?: boolean
	educational?: boolean
	isIdentityQuestion?: boolean
	isReligionQuestion?: boolean
	isGenderQuestion?: boolean
	isNameInput?: boolean
	isParentInput?: boolean
	isPartnerInput?: boolean
}
