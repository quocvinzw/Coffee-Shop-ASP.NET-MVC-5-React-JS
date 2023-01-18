import CheckCookie from "../../components/Check/ckCookie";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function IndexAdmin() {
    const nagivate = useNavigate();
    useEffect(()=>{
        if (CheckCookie("Admin") !== true) {
            nagivate('/Login');
        }
    })
    return (

        <div className="container-fluid">
            <h4 className="text-center">Welcome Admin</h4>
        </div>
    )
}

export default IndexAdmin;