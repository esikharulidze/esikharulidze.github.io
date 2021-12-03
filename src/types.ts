export type WeekDays = 'ორშაბათი' | 'სამშაბათი' | 'ოთხშაბათი' | 'ხუთშაბათი' | 'პარასკევი' | 'შაბათი' | 'კვირა'
type TherapistHours = '10:00' | '12:00' | '14:00' | '16:00' | '18:00'

export interface BackendPost {
	_id: string
	id: string
	slug: string
	title: string
	author: BackendUser
	categories: BackendCategory[]
	comments: BackendComment[]
	likes: BackendCustomer[]
	content?: string
	avatar?: string
	cover?: string
	readingTime: string
	updatedAt: string
}

export interface BackendSurvey {
	_id: string
	age: number
	contact: {
		email: string
		phone: string
	}
	fullName: string
	partnerAge?: number
	partnerName?: string
	parentName?: string
	course?: BackendCourse
}

export interface BackendAppointment {
	_id: string
	code: string
	date: string
	paid: boolean
	paymentMethod: 'cash' | 'card'
	price: number
	status: 'closed' | 'current' | 'rejected' | 'refunded'
	therapist: BackendUser
	survey: BackendSurvey
	time: string
	type: 'psychologist' | 'psychiatrist' | 'grouptherapy' | 'educational'
}

export interface BackendUser {
	_id: string
	id: string
	firstName: string
	lastName: string
	email: string
	username: string
	age: number
	phone: string
	gender: string
	about: string
	jobTitle: string
	slug: string
	posts: BackendPost[]
	avatar?: string
	calendar: TherapistCalendar
}

export interface BackendCustomer {
	_id: string
	id: string
	firstName: string
	lastName: string
	email: string
	age: number
	phone: string
	gender: string
}

export interface TherapistCalendar {
	days: WeekDays[]
	hours: TherapistHours[]
	reserved: {
		appointment: string
		date: string
		time: string
	}[]
}

export interface BackendCategory {
	id: string
	title: string
	slug: string
	posts: BackendPost[]
	avatar?: string
	cover?: string
}

export interface BackendComment {
	_id: string
	author: string
	parent?: BackendComment
	replies: BackendComment[]
	likes: BackendCustomer[]
	abuse: boolean
	content: string
	updatedAt: string
}

export interface BackendCourse {
	_id: string
	title: string
	description: string
	slug: string
	underage: boolean
	content?: string
	cost?: number
	period?: string
	avatar?: string
	cover?: string
	service: BackendService
}

export interface BackendService {
	id: string
	title: string
	slug: 'individual' | 'teens' | 'adults' | 'kids'
	description: string
	courses: BackendCourse[]
}

enum Type {
	individual = 'individual',
	adults = 'adults',
	teens = 'teens',
	kids = 'kids',
	groups = 'groups'
}

export interface CustomerInput {
	name: string
	email: string
	phone: string
	age: number
	type: Type
	problem?: string
	parent?: string
	course?: string
}

export interface TrainingInput {
	name: string
	email: string
	phone: string
	age: number
}

export interface Answer {
	id: number
	answer: string
}

export interface Quizz {
	id: number
	slug: string
	question: string
	answers: Answer[]
}
