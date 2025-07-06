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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
const Signup = ()=>{
    return(
        <Card className="mx-auto w-[400px] translate-y-1/2">
            <CardHeader className="text-center">
                <CardTitle>Signup</CardTitle>
                <CardDescription>Create a new account</CardDescription>
            </CardHeader>
            <CardContent>
                <label>
                    Name
                    <Input className="mb-2" placeholder="enter your name"/>
                </label>
                <label>
                    Email
                    <Input placeholder="enter your email"/>
                </label>
                <label>
                    Password
                    <Input placeholder="enter your password"/>
                </label>
                <div className="flex items-center gap-2 mt-2">
                    <CardDescription>why do you join?</CardDescription>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="select a role"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>roles</SelectLabel>
                                <SelectItem value="reader">reader</SelectItem>
                                <SelectItem value="author">author</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex gap-2 justify-center items-center mt-3">
                    <CardDescription>already have an account? </CardDescription>
                    <CardAction className="hover:cursor-pointer">Login</CardAction>
                </div>
            </CardContent>
            <CardFooter>
                <Button className="mx-auto hover:cursor-pointer">Signup</Button>
            </CardFooter>
        </Card>
    )
}

export default Signup;