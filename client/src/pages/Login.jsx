import { Button } from "@/components/ui/button";
import {Link} from "react-router-dom"
import { 
     Card
    ,CardHeader
    ,CardTitle
    ,CardDescription
    ,CardAction
    ,CardContent
    ,CardFooter, } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Login = ()=>{
    const [formValues,setFormValues] = useState({email: "",password: ""});
    const handleChange = (e)=>{
        const {name,value} = e.target;
        setFormValues((prev)=>{
            return({
                ...prev,
                [name]: value
            })
        })
        
    }
    return(
        <Card className="mx-auto w-fit translate-y-1/2">
            <CardHeader className="text-center">
                <CardTitle>Login to your Account</CardTitle>
                <CardDescription>Enter your email and password to login</CardDescription>
            </CardHeader>            
            <CardContent>
                <form>
                    <label>
                        Email
                        <Input name="email" value={formValues.email} onChange={handleChange} className="mb-3" placeholder="enter your email"/>
                    </label>
                    <label>
                        Password
                        <Input name="password" value={formValues.password} onChange={handleChange} placeholder="enter your password"/>
                    </label>
                </form>
                <div className="flex items-center gap-2 mt-3">
                    <CardDescription>don't have an account</CardDescription>
                    <Link to='/signup'><CardAction className="hover:cursor-pointer">Signup</CardAction></Link>
                </div>
            </CardContent>
            <CardFooter>
                <Button className="mx-auto hover:cursor-pointer">Login</Button>
            </CardFooter>
        </Card>
    )
}
export default Login;