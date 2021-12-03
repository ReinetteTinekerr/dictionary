import 'tailwindcss/tailwind.css'
import { AuthProvider } from '../src/context/authContext'

function MyApp({ Component, pageProps }) {
  return <div className="h-screen bg-gradient-to-b
  from-red-300 to-green-300" >
    <AuthProvider><Component {...pageProps} /></AuthProvider>
  </div>
}

export default MyApp
