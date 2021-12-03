import { useState, useEffect ,useContext} from 'react'
import AuthContext from '../context/authContext';
import { supabase } from '../utils/supabaseClient'

export default function Account() {
  const [loading, setLoading] = useState(false)
  const { user, error,  logout } = useContext(AuthContext);
  const [username, setUsername] = useState(null)

  useEffect(async () => {
    await getProfile()
  }, [user])

  async function getProfile() {
    try {
      setLoading(true)
      console.log('user is ', user.id)
      let { data, error, status } = await supabase
        .from('profiles')
        .select(`username`)
        .eq('id', user.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setUsername(data.username)
      }
    } catch (error) {
      // alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  async function updateProfile() {
    try {
      setLoading(true)

      const updates = {
        id: user.id,
        username,
        updated_at: new Date(),
      }

      let { error } = await supabase.from('profiles').upsert(updates, {
        returning: 'minimal', // Don't return the value after inserting
      })

      if (error) {
        throw error
      }
    } catch (error) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className="flex flex-col justify-center h-screen items-center ">
      <div className="m-2">
        <label htmlFor="email" className="font-bold m-2">Email</label>
        <input className="rounded-md p-2 px-4 w-72" id="email" type="text" value={user?.email || ''}  disabled />
      </div>

      <div>
        <label htmlFor="username" className="font-bold m-2">Name</label>
        <input
          className="rounded-md mb-5 p-2 px-4 w-72"
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div>
      <button className="border-2 border-red-700 rounded-xl p-2 px-2 mx-14 m-1 uppercase  hover:bg-red-400 font-bold" onClick={logout}>
          Log out
        </button>
        <button
          className="border-2 bg-green-300 border-green-700 rounded-xl px-4 p-2 m-1 uppercase  hover:bg-green-400 font-bold"
          onClick={updateProfile}
          disabled={loading}
        >
          {loading ? 'Loading ...' : 'Update'}
        </button>
      </div>
    </div>
  )
}
