// mdp prisma: zdodqizydé"5273OUFHEZDQiudeqhd56Juu12 


const postFormApi = async () => {
	try {
		const res = await fetch(`https://jsonplaceholder.typicode.com/posts/1`);
		const data = await res.json();
		console.log(data);
	} catch (err) {
		console.log(err);
	}
};