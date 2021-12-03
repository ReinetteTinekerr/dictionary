import { supabase } from "../../src/utils/supabaseClient";

export default async( req, res ) => {
	const user = await supabase.auth.user();
  return res.status(200).json({ user: user });
}