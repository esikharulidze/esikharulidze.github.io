import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDtN78JlDIkn2btREkrB7iVplCtEexL6mA",
    authDomain: "animus-92a15.firebaseapp.com",
    projectId: "animus-92a15",
    storageBucket: "animus-92a15.appspot.com",
    messagingSenderId: "553192900117",
    appId: "1:553192900117:web:e8cade826dbd047e4af01c",
    measurementId: "G-LWN2M1PJF9"
}

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore()

export const getPosts = async () => {
	const posts: any = []
	await db.collection('posts').get().then((snapshot) => {
		snapshot.forEach(async (doc) => {
			const data: any = {
				id: doc.id,
				...doc.data()
			}
			await db.collection('users').doc(data.authorId).get().then(doc => {
				if (doc.exists) {
					posts.push({
						...data,
						author: doc.data()
					})
				}
			}).catch(e => console.log(e))
		})
	}).catch(e => console.log(e))
	console.log(posts)
	return posts
}

export const getCategories = () => {
	const categories: any = []
	return db.collection('taxonomies').get().then(snapshot => {
		snapshot.forEach(doc => {
			categories.push({
				id: doc.id,
				...doc.data()
			})
		})
		return categories
	}).catch(e => console.log(e))
}