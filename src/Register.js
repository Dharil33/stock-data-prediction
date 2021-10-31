import { Button, Input, Snackbar, useFormControl } from '@material-ui/core'
import React, { useState } from 'react'

function Register() {

    const [name, setname] = useState("")
    const [password, setpassword] = useState("")
    const [confirmpassword, setconfirmpassword] = useState("")
    const [email, setemail] = useState("")
    const [errormsg, seterrormsg] = useState("")
    const [opensnackbar, setopensnackbar] = useState(false)


    const register = () => {
        if (name === "" || name.length <= 1) {
            setopensnackbar(true)
                seterrormsg("Please Enter valid name")
        }
        else if(email === "" ){
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
        else if(confirmpassword.length < 8){
            setopensnackbar(true)
            seterrormsg("Enter valid confirm password")
        }
        else if(confirmpassword !== password){
            setopensnackbar(true)
            seterrormsg("Both passwords should same")
        }
        else{
            //  register COde api call
        }
    }
    return (
        <div>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                open={opensnackbar}
                onClose={()=>setopensnackbar(false)}
                message={errormsg}
            />
            <h2 style={{ textAlign: "center" }}>Register Yourself</h2>
            <form name="f1"  >
                <center>
                    <div style={{ display: "flex", flexDirection: "column", width: "30%" }}>
                        <Input placeholder="Enter Name" className="input-field" name="name" onChange={(e) => setname(e.target.value)} />
                        <Input placeholder="Enter Email" className="input-field" name="email" onChange={(e) => setemail(e.target.value)} />
                        <Input placeholder="Enter Password" type="password" className="input-field" name="pwd" onChange={(e) => setpassword(e.target.value)} />
                        <Input placeholder="Confirm Password" type="password" className="input-field" name="cpwd" onChange={(e) => setconfirmpassword(e.target.value)} />
                        <Button variant="contained" color="primary" onClick={register}  >Register</Button>
                    </div>
                </center>
            </form>
        </div>
    )
}

export default Register
