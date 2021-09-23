export interface BackendPost {
    id: string
    slug: string
    title: string
    author: BackendUser
    categories: BackendCategory[]
    comments: BackendComment[]
    likes: number
    content?: string
    avatar?: string
    cover?: string
    readingTime: string
    updatedAt: string
}

export interface BackendUser {
    id:string
    firstName: string
    lastName: string
    email: string
    username: string
    age: number
    phone: string
    gender: string
    about: string
    posts: BackendPost[]
    avatar?: string
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
    id: string
    author: string
    parent?: BackendComment
    replies: BackendComment[]
    likes: number
    abuse: boolean
    content: string
    updatedAt: string
}

export interface BackendCourse {
    id: string
	title: string
	description: string
	slug: string
	content?: string
	cost?: number
	period?: string
	avatar?: string
	cover?: string
}