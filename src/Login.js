import React, { useState } from 'react'
import { Button, Input, Snackbar } from '@material-ui/core'

function Login() {
    const [password, setpassword] = useState("")
    const [email, setemail] = useState("")
    const [errormsg, seterrormsg] = useState("")
    const [opensnackbar, setopensnackbar] = useState(false)
    

    const Login =()=>{
        console.log(email,password);
        if(email === "" ){
            setopensnackbar(true)
                seterrormsg("Please Enter valid email")
        }
        else if(password === "" ){
            setopensnackbar(true)
                seterrormsg("Please Enter Password")
        }
        else if(password.length < 8){
            setopensnackbar(true)
            seterrormsg("Password should more than 8 character")
        }
        else{
            //  login Code api call
        }
    }
    return (
        <div>
        <h2 style={{textAlign:"center"}}>Login</h2>

        <form autoComplete="off">
            <center>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                open={opensnackbar}
                onClose={()=>setopensnackbar(false)}
                message={errormsg}
            />
            <div style={{display:"flex", flexDirection:"column", width:"30%"}}>
        <Input placeholder="Enter Email" className="input-field" onChange={(e) => setemail(e.target.value)}/>  
        <Input placeholder="Enter Password" type="password" className="input-field" onChange={(e) => setpassword(e.target.value)}/>  
        <Button variant="contained" color="primary" onClick={Login} >Login</Button>
        </div>
        </center>
        </form>
    </div>
    )
}

export default Login
