import './Form.css'
import {useState} from "react"
import validation from "../Validation"
import imagen from "./58f37720a4fa116215a9240f.png"

const Form = ({login}) => {
    const [errors, setErrors] = useState({})
    const [userData, setUserData] = useState({
           email: "",
           password: ""
        })

    const handleChange = (event) => {
        setUserData({
            ...userData, 
            [event.target.name] : event.target.value
        })
        setErrors(validation({
            ...userData,
            [event.target.name] : event.target.value
        }))
    }

   

    const handleSubmit = (event) =>{
        event.preventDefault();
       login(userData);
    }


    return(
        
        <div className= "Pag-inicio">
           <img src={imagen} alt="" className='logo' />
             
          <div className="centrado">
            
        <form onSubmit={handleSubmit}>
            <h1>FORM</h1>
            <label htmlFor="email">Email:</label>
            <input name="email" type="email" placeholder="Ingrese su email" value={userData.email} onChange={handleChange} className="custom-input"/>
            {errors.email && <p style={{color: "red"}} >{errors.email}</p>} 
            <hr/>
            <label htmlFor="password">Password:  </label>
            <input name="password" type="password" placeholder="Ingrese su contraseña" value={userData.password} onChange={handleChange} className="custom-input"/>
            {errors.password && <p style={{color: "red"}} >{errors.password}</p>} 
            <hr/>
            <button  className="btoninicial">SUBMIT</button>
           
        </form>
        </div>     
        </div>
    )
}

export default Form;

