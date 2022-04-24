import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext.jsx";

export const Login = () => {

    const { handleAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <div>
            <input type="text" placeholder="Enter Name" />{" "}
            <input type="text" placeholder="Enter Age" />
            <button onClick={()=>{
                console.log("yes")
                handleAuth(true);
                navigate(-2, {replace:true})
            }}>Submit</button>
        </div>
    );
};