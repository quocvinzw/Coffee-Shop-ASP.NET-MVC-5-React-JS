import CheckCookie from "../../components/Check/ckCookie";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function IndexMarketing(){
    const nagivate = useNavigate();
    useEffect(()=>{
        if (CheckCookie("Marketing") !== true) {
            nagivate('/Login');
        }
    })
    
    return (
        <div className="container-fluid">
        <h4 className="text-center">Welcome Marketing</h4>
    </div>
    )
}

export default IndexMarketing;