import { useState } from 'react'
import { supabase } from '../utils/supabaseClient'

export default function Auth({loginSuccessCallback}) {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorLogin, setErrorLogin] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault()
    console.log(e.target[0].value)
    console.log(e.target[1].value)
    try {
      setLoading(true)
      setErrorLogin(false)
      let { data, error, status } = await supabase
      .from('profiles')
      .select(`username, email`)
        .eq('email', email)
        .eq('password', password)
      .single()
    if (error) {
      throw error
    }
    console.log(data);
    loginSuccessCallback(true, data.email, data.username)
    } catch (error) {
      console.log(errorLogin, 'error', error)
      setErrorLogin(true)
    } finally {
      setLoading(false)
    }
  }


  return (
    <div className="flex justify-center h-screen items-center text-center">
      <div className="">
        <h1 className="text-4xl font-bold m-3">Research work in Information Security and Assurance 1</h1>
        <h2 className="text-xl font-bold mb-10">Dictionary Attack Demo</h2>
        <form className="flex flex-col items-center" method="GET" onSubmit={handleLogin}>
          <input
            className="rounded-md block p-1 px-2 py-2 mb-2 w-96"
            type="email"
            placeholder="godwin.bardiago06@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="rounded-md block p-1 px-2 py-2 w-96"
            type="password"
            placeholder="admin123"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type='submit'
            // onClick={(e) => {
            //   e.preventDefault()
            //   handleLogin(email,password)
            // }}
            className="border-2 border-black rounded-xl p-2 m-3 uppercase  hover:bg-green-400 font-bold px-8"
            disabled={loading}
          >
            <span>{loading ? 'Loading' : 'Log in'}</span>
          </button>
        </form>
        <div className="font-bold bg-red-500">
          {errorLogin ? 'Login Failed': ''}
        </div>
      </div>
    </div>
  )
}