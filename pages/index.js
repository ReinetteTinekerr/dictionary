import { useState, useEffect } from 'react'
import { supabase } from '../src/utils/supabaseClient'
import Auth from '../src/components/Auth'
import Account from '../src/components/Account'

export default function Home() {
  const [session, setSession] = useState(null)
  const [loginSuccess, setLoginSuccess] = useState(false)
  const [email, setEmail] = useState(false)
  const [username, setUsername] = useState(false)
	console.log('success: ',loginSuccess)

	const loginSuccessCallback = (isLogin, email, username) => {
		setLoginSuccess(isLogin)
		setEmail(email)
		setUsername(username)
	}

  useEffect(() => {
    setSession(supabase.auth.session())

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <div className="h-screen bg-gradient-to-b
		from-red-300 to-green-300" >
			{!loginSuccess ? <Auth loginSuccessCallback={loginSuccessCallback} /> : <Account email={email} username={username} loginSuccessCallback={loginSuccessCallback} />}
    </div>
  )
}