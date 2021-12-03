import { supabase } from "../../src/utils/supabaseClient";

export default async( req, res ) => {
	// if (req.method == 'GET') {
	// 	const { identifier, password } = req.body;
	// 	console.log(identifier, password, 'login')
		// let { data, error,  } = await supabase
		// 	.from('profiles')
		// 	.select(`username, email`)
		// 	.eq('email', email)
		// 	.eq('password', password)
		// 	.single()
		// if (error) {
		// 	res.status(403).json({ message: "User forbidden" });
		// } else {
		// 	await supabase.from('profiles').update({online: true})
		// 	res.status(200).json({ username: data.username, email: data.email });
		// }
	// }

		const { email, password } = req.query;
		let { user, error } = await supabase.auth.signIn({
			email: email,
			password: password,
		});
		// console.log({ error });
		// console.log({ user });
		if (error) return res.status(401).json({ error: error.message });
		return res.status(200).json({ user: user });
}