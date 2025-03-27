import {useState} from 'react'
import logo from '../assets/images/celebration.png'
import { Link } from 'react-router-dom'

const Login = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  return (
    <div className="flex justify-center items-center mt-20 p-3 ">
  <div className="w-full max-w-md bg-white p-6 shadow-lg rounded-lg">
    
    {/* Welcome Message */}
    <div className="flex justify-center items-center gap-2 mb-6">
      <h1 className="text-xl font-semibold text-center">
        Hello! <span className="text-[#01b5c5]">Welcome</span> Back
      </h1>
      <img src={logo} className="h-7 w-7" alt="Logo" />
    </div>

    <form>
      <div className="mb-4">
        <input
          type="email"
          placeholder="Enter your Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-[#01b5c5] shadow-md"
        />
      </div>

      <div className="mb-4">
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-[#01b5c5] shadow-md"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#01b5c5] hover:bg-[#0190a5] text-white font-semibold py-3 rounded-md transition cursor-pointer"
      >
        Login
      </button>
      <p className='mt-5 text-[#4E545F] text-center'>
        Don&apos;t have an account?<Link to='/signup' className='text-blue-700 cursor-pointer'> Register</Link>
      </p>
    </form>

  </div>
</div>

  )
}

export default Login
Login