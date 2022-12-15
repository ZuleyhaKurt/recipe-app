import { useState } from "react"
import { useNavigate } from "react-router-dom"
import image from "../img/login.avif"


const Login = () => {
  const navigate=useNavigate()
    const [account, setAccount] = useState(true)
    const [pass, setPass] = useState("")
    const [email, setEmail] = useState("")
    const [user,setUser] =useState([])
  
  const handleClick = () => {
    if (account) {
      if (!pass == "" && !email == "") {
        const person = {
          id: Math.floor(Math.random() * 1000),
          email: email,
          pass: pass,
        };
        user.push(person);
        localStorage.setItem("data", JSON.stringify(user));
        setUser(user);
        alert("kayıt yapıldı");
      }
    }
    if (pass == "" || email == "") {
      alert("Email ve Password boş bırakılamaz!!!");
    } else if (!account) {
      const loginUser = user.filter((item) => item.email === email);
      if (loginUser.length == 0) {
        alert("kullanıcı bulunamadı");
      }
      if (loginUser.length > 0) {
        localStorage.setItem("email", email);
        navigate(-1);
      }
    }
    
}


  
  return (
    <div className="relative" >
    <img src={image} alt=""  className='h-[100vh] w-[100%] '/>
    <div className="bg-yellow-500 opacity-75 w-[250px] h-[350px] absolute top-20 right-16 rounded-lg shadow-lg shadow-gray-200 flex flex-col justify-center items-center gap-4 "> 
          <div className="w-[80%]">
            <p className="text-start font-bold indent-2">
              E-mail
            </p>
            <input
            type="e-mail"
            placeholder="Enter Your E-mail Adress"
            className="w-[100%] rounded-md indent-2 h-8"
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
            className="w-[100%] rounded-md indent-2 h-8"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            required
        />
        <div className="w-full d-flex justify-content-center align-items-center my-5">
          <button className=" w-[100%] bg-black text-white rounded-md py-1 "
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