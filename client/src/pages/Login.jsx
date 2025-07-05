import { Button } from "@/components/ui/button";
import { 
     Card
    ,CardHeader
    ,CardTitle
    ,CardDescription
    ,CardAction
    ,CardContent
    ,CardFooter, } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const Login = ()=>{
    
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
                        <Input className="mb-3" placeholder="enter your email"/>
                    </label>
                    <label>
                        Password
                        <Input placeholder="enter your password"/>
                    </label>
                </form>
            </CardContent>
            <CardFooter>
                <Button className="mx-auto hover:cursor-pointer">Login</Button>
            </CardFooter>
        </Card>
    )
}
export default Login;