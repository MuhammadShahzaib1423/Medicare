import {useState} from 'react';
import { Link } from 'react-router-dom';
import signupimg from '../assets/images/signup.gif';
import signuplogo from '../assets/images/doctor-img01.png'

const Signup = () => {

  const [selectedFile,setselectedFile]=useState(null)
  const [previewURL,setpreviewURL]=useState(null)


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    photo:selectedFile,
    gender:'',
    role:'patient'
  });

  const handleInputchange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleFileChange= async(e)=>{
  const file=e.target.files[0]
  }

  const submithandler= async (e)=>{
  e.preventDefault()
  }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg flex w-full max-w-6xl overflow-hidden">
        {/* Left Side - Image */}
        <div className="w-1/2 hidden md:block">
          <img src={signupimg} alt="Signup" className="w-full h-full object-cover" />
        </div>

        {/* Right Side - Signup Form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Create an <span className="text-blue-700">Account</span></h1>
          
          <form className="space-y-4" onSubmit={submithandler}>
          <div >
          <input type="text" placeholder="Full Name" value={formData.name}
          onChange={handleInputchange}  className="w-full px-4 py-2 border-b border-gray-400 focus:border-blue-500 focus:ring-0 focus:outline-none"
/>
</div>

        <div className=''>
            <input type="email" placeholder="Email Address" 
            value={formData.email}
            onChange={handleInputchange} className="w-full px-4 py-2 border-b border-gray-400 focus:border-blue-500 focus:ring-0 focus:outline-none" />
            </div>
            <div>
            <input type="password" placeholder="Password" 
            value={formData.password} onChange={handleInputchange} required className="w-full px-4 py-2 border-b border-gray-400 focus:border-blue-500 focus:ring-0 focus:outline-none" />
            </div>

              <div className='mt-4 flex justify-between items-center'>
              <label htmlFor="" className="text-[#181a1E] font-bold text-[16px]">
  Are you a :
  <select 
    name="role" 
    id=""
    value={formData.role}
    onChange={handleInputchange}
    className="text-[#4E545F] font-semibold text-[16px] leading-7 px-4 outline-none border-b border-gray-400 focus:border-blue-500"
  >
    <option value="patient">Patient</option>
    <option value="doctor">Doctor</option>
  </select>
</label>


<label htmlFor="" className="text-[#181a1E] font-bold text-[16px]">
  Gender :
  <select 
    name="gender" 
    value={formData.gender}
    onChange={handleInputchange}

    id=""
    className="text-[#4E545F] font-semibold text-[16px] leading-7 px-4 outline-none border-b border-gray-400 focus:border-blue-500"
  >
    <option value="male">Male</option>
    <option value="female">Female</option>
    <option value="other">Other</option>
  </select>
</label>

            </div>
            <div className="mb-5 flex items-center gap-3">
  {/* Profile Image */}
  <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-blue-600 overflow-hidden">
    <img src={signuplogo} alt="Profile" className="w-full h-full object-cover rounded-full" />
  </figure>

  {/* File Input */}
  <div className='relative w-[130px] h-[50px]'>
  
    <input 
      type="file" 
      name="photo" 
      id="customfile" 
      onChange={handleFileChange}
      accept=".jpg,.png" 
      className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
     
    />
    <label htmlFor="customeFile" className='absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden
     bg-[#0066ff46] text-[#181a1e] font-semibold rouned-lg '>Upload Photo</label>
  </div>
</div>


            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300 cursor-pointer">Sign Up</button>
          </form>

          <p className="text-gray-600 text-sm mt-4">Already have an account? <Link to="/login" className="text-blue-600 font-semibold">Login</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
