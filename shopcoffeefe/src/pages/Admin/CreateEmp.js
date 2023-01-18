/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import { useState, useEffect, Fragment, React } from "react";
import { FormInput,Message } from '../import';
function CreateEmp() {
    //Data
    useEffect(() => getRepo(), []);
    const [repoBranch, setRepoBranch] = useState([]);
    const [message,setMessage] = useState({
        type:null,
        msg:null
    });

    function getRepo() {
        axios.get('https://localhost:44382/api/Branch')
            .then((res) => {
                const myRespo = res.data;
                setRepoBranch(myRespo)
            }).catch(err => {
                console.error("Some Error");
            });
    }

    function handleFullName(value) {
        var element = document.getElementById("lbFullName");
        if (value.length === 0) {
            element.innerHTML = "Please Input This Field";
            return false;
        } else {
            element.innerHTML = "";
            return value;
        }
    }

    function handleEmail(value) {
        var element = document.getElementById("lbEmail");
        if (!value.match("[a-z0-9]+@gmail.com")) {
            element.innerHTML = "Please Input Correct Email Example: abc@gmail.com";
            return false;
        } else {
            element.innerHTML = "";
            return value;
        }
    }

    function handlePhone(value) {
        var element = document.getElementById("lbPhone");
        if (!value.match("\\d+")) {
            element.innerHTML = "This Field Only Contains Number";
            return false;
        } else {
            element.innerHTML = "";
            return value;
        }
    }

    function handleGender(value) {
        var element = document.getElementById("lbGender");
        // eslint-disable-next-line eqeqeq
        if (value == -1) {
            element.innerHTML = "Please Select Gender";
            return false;
        } else {
            element.innerHTML = "";
            return value;
        }
    }

    function handleBirth() {
        var value = document.getElementById("inpBirth").value;
        var element = document.getElementById("lbBirth");
        if (value.length === 0) {
            element.innerHTML = "Please Select This Field";
            return false;
        } else {
            element.innerHTML = "";
            return value;
        }
    }

    function handlePassword(value) {
        var element = document.getElementById("lbPassword");
        if (value.length === 0) {
            element.innerHTML = "Please Input This Field";
            return false;
        } else if (value.length < 8) {
            element.innerHTML = "This Field Required 1-8 Characters";
            return false;
        } else {
            handleConfirm(document.getElementById("inpConfirmPwd").value);
            element.innerHTML = "";
            return value;
        }
    }

    function handleConfirm(value) {
        var element = document.getElementById("lbConfirm");
        if (value.length === 0) {
            element.innerHTML = "Please Input This Field";
            return false;
        } else if (value.length < 8) {
            element.innerHTML = "This Field Required 1-8 Characters";
            return false;
        } else if (value !== document.getElementById("inpPwd").value) {
            element.innerHTML = "Password Confirm Doesn't Match";
            return false;
        }
        else {
            element.innerHTML = "";
            return value;
        }
    }

    function handleDateWork(value) {
        var element = document.getElementById("lbWork");
        if (value.length === 0) {
            element.innerHTML = "Please Select This Field";
            return false;
        } else {
            element.innerHTML = "";
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

    function handleSubmit(e) {
        e.preventDefault();
        var fieldInput = {
            email: handleEmail(document.getElementById("inpEmail").value),
            password: handlePassword(document.getElementById("inpPwd").value),
            name: handleFullName(document.getElementById("inpName").value),
            gender: handleGender(document.getElementById("inpGender").value),
            phone: handlePhone(document.getElementById("inpPhone").value),
            birth: handleBirth(),
            dwork: handleDateWork(document.getElementById("inpWork").value),
            pos: document.getElementById("inpPos").value,
            idBranch: document.getElementById("inpBranch").value,
            status: handleStatus(),
            //Other
            confirmPass: handleConfirm(document.getElementById("inpConfirmPwd").value)
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
            var form = document.getElementById("formEmp");
            form.reset();
        }

        const sendPostRequest = async () => {
            try {
                const resp = await axios.post('https://localhost:44382/api/Employee', fieldInput);
                setMessage({
                    type:"alert-success",
                    msg:resp.data
                })
                clearInput();
            } catch (err) {
                // Handle Error Here
                setMessage({
                    type:"alert-danger",
                    msg:err.response.data
                })
            }
        };

        if (checkError(fieldInput) === true) {
            sendPostRequest();
        }

    }
    return (
        <Fragment>
            <div className="col-lg-11 container">
                <div className="p-5">
                    <div className="text-center">
                        <h1 className="h4 text-success mb-4 ">Create an Account For Employee</h1>
                         {message.type===null?null:<Message type={message.type}>{message.msg}</Message>}
                    </div>
                    <form className="user" method="post" id="formEmp">
                        <div className="form-group row">
                            <div className="col-sm-12 mb-0">
                                <p className="mb-0 mt-0 ms-5">Full Name</p>
                                <input className="form-control" id="inpName" autoComplete="false"
                                    onChange={(e) => handleFullName(e.target.value)} type="text"></input>
                                <FormInput nameErr="lbFullName"></FormInput>
                            </div>
                        </div>
                        <div className="form-group mt-2 mb-0">
                            <p className="mb-0 mt-0 ms-5">Email</p>
                            <input className="form-control" id="inpEmail" autoComplete="true"
                                onChange={(e) => handleEmail(e.target.value)} type="text"></input>
                            <FormInput nameErr="lbEmail"></FormInput>
                        </div>
                        <div className="form-group mt-2 mb-0">
                            <p className="mb-0 mt-0 ms-5">Phone</p>
                            <input className="form-control " id="inpPhone" autoComplete="true"
                                onChange={(e) => handlePhone(e.target.value)} type="text"></input>
                            <FormInput nameErr="lbPhone"></FormInput>
                        </div>
                        <div className="form-group mt-2 mb-0">
                            <p className="mb-0 mt-0 ms-5">Gender</p>
                            <select className="browser-default custom-select" id="inpGender"
                                onChange={(e) => handleGender(e.target.value)}>
                                <option value="-1">Select Gender</option>
                                <option value="0">Male</option>
                                <option value="1">Female</option>
                            </select>
                            <FormInput nameErr="lbGender"></FormInput>
                        </div>
                        <div className="form-group mt-2 mb-0">
                            <p className="mb-0 mt-0 ms-5">BirthDay</p>
                            <input className="form-control" type="date" id="inpBirth" onInput={handleBirth}></input>
                            <FormInput nameErr="lbBirth"></FormInput>
                        </div>
                        <div className="form-group mt-2 mb-0">
                            <p className="mb-0 mt-0 ms-5">Password</p>
                            <input className="form-control" type="password" name="password" autoComplete="true" id="inpPwd"
                                onChange={(e) => handlePassword(e.target.value)}></input>
                            <FormInput nameErr="lbPassword"></FormInput>
                        </div>
                        <div className="form-group mt-2 mb-0">
                            <p className="mb-0 mt-0 ms-5">Confirm Password</p>
                            <input className="form-control" type="password" name="confirmPass" autoComplete="true" id="inpConfirmPwd"
                                onChange={(e) => handleConfirm(e.target.value)}></input>
                            <FormInput nameErr="lbConfirm"></FormInput>
                        </div>
                        <div className="form-group mt-2 mb-0">
                            <p className="mb-0 mt-0 ms-5">Position</p>
                            <select className="browser-default custom-select" id="inpPos">
                                <option value="Service Staff">Service Staff</option>
                                <option value="Manager">Manager</option>
                                <option value="Director">Director</option>
                                <option value="Marketing">Marketing</option>
                            </select>
                        </div>
                        <div className="form-group mt-2 mb-0">
                            <p className="mb-0 mt-0 ms-5">Date Work</p>
                            <input className="form-control " type="date" id="inpWork"></input>
                            <FormInput nameErr="lbWork"></FormInput>
                        </div>
                        <div className="form-group mt-2 mb-0">
                            <p className="mb-0 mt-0 ms-5">Branch</p>
                            <select className="browser-default custom-select" id="inpBranch">
                                {repoBranch.map((b, index) => (
                                    <option value={b.id} key={index}>{b.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group mt-2 mb-0">
                            <div className="custom-control custom-checkbox ">
                                <input type="checkbox" className="custom-control-input" id="customCheck"
                                    name="status" />
                                <label className="custom-control-label" htmlFor="customCheck">
                                    Status
                                </label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary btn-user btn-block" onClick={(e) => handleSubmit(e)}>
                            Create Account
                        </button>
                    </form>
                </div>
            </div>
        </Fragment>
    );
}

export default CreateEmp;