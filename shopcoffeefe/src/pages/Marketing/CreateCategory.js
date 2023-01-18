import CheckCookie from "../../components/Check/ckCookie";
import { useNavigate } from "react-router-dom";

import { Fragment, useState,useEffect } from "react";
import { Message,FormInput } from "../import";
import axios from "axios";
function CreateCategory(){
    const nagivate = useNavigate();
    useEffect(()=>{
        if (CheckCookie("Marketing") !== true) {
            nagivate('/Login');
        }
    })

    const [message, setMessage] = useState({
        type: null,
        msg: null
    });

    function handleCateName(value){
        var element = document.getElementById("lbCategoryName");
        if (value.length ===0) {
            element.innerHTML = "Please Input Category";
            return false;
        } else {
            element.innerHTML="";
            return value;
        }
    }

    function handleStatus() {
        var element = document.getElementById("customCheck");
        if (element.checked) {
            return true;
        } else {
            return false;
        }
    }

    function checkError(obj) {
        for (var key in obj) {
            // eslint-disable-next-line eqeqeq
            if (obj[key] === false && key !== "status")
                return false;
        }
        return true;
    }

    function clearInput() {
        var form = document.getElementById("formCategory");
        form.reset();
    }

    

    function handleSubmit(e){
        e.preventDefault();
        var Category = {
            name:handleCateName(document.getElementById("inpName").value),
            status:handleStatus()
        }

        const sendPostRequest = async () => {
            try {
                const resp = await axios.post('https://localhost:44382/api/Category', Category);
                setMessage({
                    type: "alert-success",
                    msg: resp.data
                })
                clearInput();
            } catch (err) {
                // Handle Error Here
                setMessage({
                    type: "alert-danger",
                    msg: err.response.data
                })
            }
        };
        
        if (checkError(Category)===true) {
            sendPostRequest();
        }
    }

    return(
        <Fragment>
             <div className="col-lg-12 container">
                <div className="p-5">
                    <div className="text-center">
                        <h1 className="h4 text-success mb-4 ">Create Category</h1>
                        {message.type === null ? null : <Message type={message.type}>{message.msg}</Message>}
                    </div>
                    <form className="user" method="" id="formCategory">
                        <div className="form-group mt-2">
                            <p className="mb-0 mt-0 ms-5">Category Name</p>
                            <input type="text" className="form-control " id="inpName"
                                onChange={(e) => handleCateName(e.target.value)}></input>
                            <FormInput nameErr="lbCategoryName"></FormInput>
                        </div>
                       
                        <div className="form-group mt-2">
                            <div className="col-sm-12 mb-0">
                                <div className="custom-control custom-checkbox ">
                                    <input type="checkbox" className="custom-control-input" id="customCheck" name="status" />
                                    <label className="custom-control-label" htmlFor="customCheck">
                                        Status
                                    </label>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary btn-user btn-block" onClick={(e) => handleSubmit(e)}>
                            Create Category
                        </button>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default CreateCategory