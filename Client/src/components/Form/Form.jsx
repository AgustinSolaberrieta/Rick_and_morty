import './Form.css'
import {useState} from "react"
import validation from "../Validation"


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
          <div className="centrado">
            
        <form onSubmit={handleSubmit}>
            <h1>FORM</h1>
            <label htmlFor="email">Email: </label>
            <input name="email" type="email" placeholder="Ingrese su email" value={userData.email} onChange={handleChange} className="custom-input"/>
            {errors.email && <p style={{color: "red"}} >{errors.email}</p>} 
            <hr/>
            <label htmlFor="password">Password:  </label>
            <input name="password" type="password" placeholder="Ingrese su contraseña" value={userData.password} onChange={handleChange} className="custom-input"/>
            {errors.password && <p style={{color: "red"}} >{errors.password}</p>} 
            <hr/>
            <button  className="btn btn-outline-primary">SUBMIT</button>
           
        </form>
        </div>     
        </div>
    )
}

export default Form;

