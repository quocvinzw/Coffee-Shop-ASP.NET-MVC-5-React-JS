import { Fragment,useState,useEffect } from "react";
import axios from "axios";
import { Message,FormInput } from "../import";
import { useParams,useNavigate } from "react-router-dom";
import CheckCookie from "../../components/Check/ckCookie";
function EditVoucher(){
    let {id} = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        if (CheckCookie("Marketing") !== true) {
            navigate('/Login');
        }
    })
    
    const [message, setMessage] = useState({
        type: null,
        msg: null
    });

    const [myVoucher,setVoucher] = useState({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => getVoucher, []);
    function getVoucher() {
        axios.get(`https://localhost:44382/api/Vouchers/${id}`)
            .then((res) => {
                const myRespo = res.data;
                setVoucher(myRespo);
            }).catch(err => {
                console.log(err);
            })
    }

    function handleVoucherName(value){
        var element = document.getElementById("lbVoucherName");
        if (value.length === 0) {
            element.innerHTML="Please Input VoucherName";
            return false;
        } else {
            element.innerHTML="";
            return value;
        }
    }

    function handleDiscount(value){
        var element = document.getElementById("lbDiscount");
        if (value.length ===0) {
            element.innerHTML="Please Input Discount";
            return false;
        } else if(!value.match("\\d+")){
            element.innerHTML="This Field Only Contains Number";
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
        const myVoucher = {
            id,
            name:handleVoucherName(document.getElementById("inpName").value),
            discount :handleDiscount(document.getElementById("inpDiscount").value),
        };

        const sendPostRequest = async () => {
            try {
                const resp = await axios.put('https://localhost:44382/api/Vouchers', myVoucher);
                setMessage({
                    type: "alert-success",
                    msg: resp.data
                })
                navigate('/Marketing/ManageVouchers');
            } catch (err) {
                // Handle Error Here
                setMessage({
                    type: "alert-danger",
                    msg: err.response.data
                })
            }
        };

        if (checkError(myVoucher)===true) {
            sendPostRequest()
        }
    }

    return(
        <Fragment>
        <div className="col-lg-12 container">
           <div className="p-5">
               <div className="text-center">
                   <h1 className="h4 text-success mb-4 ">Edit Voucher</h1>
                   {message.type === null ? null : <Message type={message.type}>{message.msg}</Message>}
               </div>
               <form className="user" method="" id="formVoucher">
                   <div className="form-group mt-2">
                       <p className="mb-0 mt-0 ms-5">Voucher Name</p>
                       <input type="text" className="form-control " id="inpName" defaultValue={myVoucher.name}
                           onChange={(e) => handleVoucherName(e.target.value)}></input>
                       <FormInput nameErr="lbVoucherName"></FormInput>
                   </div>
                   <div className="form-group mt-2">
                       <p className="mb-0 mt-0 ms-5">Discount</p>
                       <input type="number" className="form-control " id="inpDiscount" step="1" min="1" max="10" defaultValue={myVoucher.discount}
                           onChange={(e) => handleDiscount(e.target.value)}></input>
                       <FormInput nameErr="lbDiscount"></FormInput>
                   </div>               
                   <button type="submit" className="btn btn-primary btn-user btn-block" onClick={(e) => handleSubmit(e)}>
                       Edit Voucher
                   </button>
               </form>
           </div>
       </div>
   </Fragment>
    )
}

export default EditVoucher;