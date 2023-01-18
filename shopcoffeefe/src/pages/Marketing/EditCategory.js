import CheckCookie from "../../components/Check/ckCookie";
import { Fragment,useState,useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";
import axios from "axios";
import { Message,FormInput } from "../import";

function EditCategory(){
    const navigate = useNavigate();

    useEffect(()=>{
        if (CheckCookie("Marketing") !== true) {
            navigate('/Login');
        }
    })

    let {id} = useParams();
    const [message, setMessage] = useState({
        type: null,
        msg: null
    });

    const [myCate,setCate] = useState({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => getProduct, []);
    function getProduct() {
        axios.get(`https://localhost:44382/api/Category/${id}`)
            .then((res) => {
                const myRespo = res.data;
                setCate(myRespo);
            }).catch(err => {
                console.log(err);
            })
    }


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

    function checkError(obj) {
        for (var key in obj) {
            // eslint-disable-next-line eqeqeq
            if (obj[key] === false && key !== "status")
                return false;
        }
        return true;
    }

    function handleSubmit(e){
        e.preventDefault();
        var Category = {
            id,
            name:handleCateName(document.getElementById("inpName").value),
        }

        const sendPostRequest = async () => {
            try {
                const resp = await axios.put('https://localhost:44382/api/Category', Category);
                setMessage({
                    type: "alert-success",
                    msg: resp.data
                })
                navigate('/Marketing/ManageCategory');
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
                        <h1 className="h4 text-success mb-4 ">Edit Category</h1>
                        {message.type === null ? null : <Message type={message.type}>{message.msg}</Message>}
                    </div>
                    <form className="user" method="" id="formCategory">
                        <div className="form-group mt-2">
                            <p className="mb-0 mt-0 ms-5">Category Name</p>
                            <input type="text" className="form-control " id="inpName" defaultValue={myCate.name}
                                onChange={(e) => handleCateName(e.target.value)}></input>
                            <FormInput nameErr="lbCategoryName"></FormInput>
                        </div>
                      
                        <button type="submit" className="btn btn-primary btn-user btn-block" onClick={(e) => handleSubmit(e)}>
                            Edit Category
                        </button>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default EditCategory;