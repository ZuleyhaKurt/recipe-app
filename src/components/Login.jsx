import { useState } from "react"
import { useNavigate } from "react-router-dom"
import image from "../img/login.avif"
import PrivateRouter from "../pages/PrivateRouter"

const Login = () => {
  const navigate=useNavigate()
    const [account, setAccount] = useState(true)
    const [pass, setPass] = useState("")
    const [email, setEmail] = useState("")
    
  const userInfo = {
      username:"admin"
    }
  const handleClick = () => {
      localStorage.setItem("user",JSON.stringify(userInfo))
      navigate("/home" )
    
}


  
  return (
    <div className="relative" >
    <img src={image} alt=""  className='h-[100vh] w-[100%] '/>
    <div className="bg-gray-500 opacity-75 w-[300px] h-[350px] absolute top-10 right-16 rounded-lg shadow-lg shadow-gray-200 flex flex-col justify-center items-center gap-4 "> 
          <div className="w-[80%]">
            <p className="text-start font-bold indent-2">
              E-mail
            </p>
            <input
            type="e-mail"
            placeholder="Enter Your E-mail Adress"
            className="w-[90%] rounded-md indent-2 h-8"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <div className="w-[80%]">
          <p className="text-start font-bold indent-2">
          Password
        </p>
        <input
            type="password"
            placeholder="Enter Your Pasword"
            className="w-[90%] rounded-md indent-2 h-8"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            required
        />
        <div className="w-full d-flex justify-content-center align-items-center m-3 ">
          <button className=" w-[50%] bg-gray-800 text-white rounded-md p-1 "
        onClick={handleClick} 
          >
            {account ? "Register" : "Login"}
            </button>
            

        </div>
        <p
          className="underline underline-offset-4 text-black text-xl"
          onClick={() => setAccount(!account)}
        >
          {account ? "I have an account" : "Don't have an account?"}
        </p>
      </div>
    </div>
    </div>
  )
}

export default Login