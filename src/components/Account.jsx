import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabaseClient'

export default function Account({ email, username, loginSuccessCallback}) {
  // const [loading, setLoading] = useState(true)
  // const [username, setUsername] = useState(null)
  // const [website, setWebsite] = useState(null)
  // const [avatar_url, setAvatarUrl] = useState(null)

  // useEffect(() => {
  //   getProfile()
  // }, [session])

  // async function getProfile() {
  //   try {
  //     setLoading(true)
  //     const user = supabase.auth.user()

  //     let { data, error, status } = await supabase
  //       .from('profiles')
  //       .select(`username`)
  //       .eq('id', user.id)
  //       .single()

  //     if (error && status !== 406) {
  //       throw error
  //     }

  //     if (data) {
  //       setUsername(data.username)
  //       setWebsite(data.website)
  //       setAvatarUrl(data.avatar_url)
  //     }
  //   } catch (error) {
  //     alert(error.message)
  //   } finally {
  //     setLoading(false)
  //   }
  // }

  // async function updateProfile({ username, website, avatar_url }) {
  //   try {
  //     setLoading(true)
  //     const user = supabase.auth.user()

  //     const updates = {
  //       id: user.id,
  //       username,
  //       website,
  //       avatar_url,
  //       updated_at: new Date(),
  //     }

  //     let { error } = await supabase.from('profiles').upsert(updates, {
  //       returning: 'minimal', // Don't return the value after inserting
  //     })

  //     if (error) {
  //       throw error
  //     }
  //   } catch (error) {
  //     alert(error.message)
  //   } finally {
  //     setLoading(false)
  //   }
  // }

  return (
    <div className="flex flex-col justify-center h-screen items-center ">
      <div className="m-2">
        <label htmlFor="email" className="font-bold m-2">Email</label>
        <input className="rounded-md p-2 px-4 w-72" id="email" type="text" value={email} disabled />
      </div>

      <div>
        <label htmlFor="username" className="font-bold m-2">Name</label>
        <input
          className="rounded-md mb-5 p-2 px-4 w-72"
          id="username"
          type="text"
          value={username || ''}
          // onChange={(e) => setUsername(e.target.value)}
          disabled
        />
      </div>

      {/* <div>
        <button
          className="border-2 border-blue-700 rounded-xl p-2 m-1 uppercase  hover:bg-blue-400 font-bold"
          onClick={() => updateProfile({ username, website, avatar_url })}
          disabled={loading}
        >
          {loading ? 'Loading ...' : 'Update'}
        </button>
      </div> */}

      <div>
        <button className="border-2 border-red-700 rounded-xl p-2 px-8 m-1 uppercase  hover:bg-red-400 font-bold" onClick={() => loginSuccessCallback(false,'', '')}>
          Sign Out
        </button>
      </div>
    </div>
  )
}
