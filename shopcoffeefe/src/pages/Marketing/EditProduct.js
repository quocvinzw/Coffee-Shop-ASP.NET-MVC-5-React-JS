import CheckCookie from "../../components/Check/ckCookie";
import { Fragment, useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";
import { storage } from "../import";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { FormInput, Message } from "../import";

function EditProduct() {
    const navigate = useNavigate();
    useEffect(()=>{
        if (CheckCookie("Marketing") !== true) {
            navigate('/Login');
        }
    })

    let { id } = useParams();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => getProduct, []);
    const [myProduct, setProduct] = useState({});
    function getProduct() {
        axios.get(`https://localhost:44382/api/Product/${id}`)
            .then((res) => {
                const myRespo = res.data;
                setProduct(myRespo);
            }).catch(err => {
                console.log(err);
            })
    }

    useEffect(() => getListCategory, []);
    const [lsCate, setListCate] = useState([]);
    function getListCategory() {
        axios.get('https://localhost:44382/api/Category')
            .then((res) => {
                const myRespo = res.data;
                setListCate(myRespo);
            }).catch(err => {
                console.log(err);
            })
    }

    const [message, setMessage] = useState({
        type: null,
        msg: null
    });

    //Image
    const [imgProduct, setImgProduct] = useState(null);

    function handleImage() {
        var element = document.getElementById("lbImage");
        if (imgProduct == null) {
            return myProduct.image
        }
        else {
            element.innerHTML = "";
            return true;
        }
    }

    function handleProductName(value) {
        var element = document.getElementById("lbProductName");
        if (value.length === 0) {
            element.innerHTML = "Please Input Product Name";
            return false;
        } else {
            element.innerHTML = "";
            return value;
        }
    }

    function handleProductPrice(value) {
        var element = document.getElementById("lbProductPrice");
        if (value.length === 0) {
            element.innerHTML = "Please Input Product Price";
            return false;
        } else if (value <= 10000) {
            element.innerHTML = "Price Must Greater Than 10000";
            return false;
        } else if (!value.match("\\d+")) {
            element.innerHTML = "This Field Only Contains Number";
            return false;
        } else {
            element.innerHTML = "";
            return value;
        }
    }

    function handleDescription(value) {
        var element = document.getElementById("lbDescription");
        if (value.length === 0) {
            element.innerHTML = "Please Input This Field";
            return false;
        } else {
            element.innerHTML = "";
            return value;
        }
    }

    function handleCategory(value) {
        var element = document.getElementById("lbCategory");
        // eslint-disable-next-line eqeqeq
        if (value == -1) {
            element.innerHTML = "Please Select Category";
            return false;
        } else {
            element.innerHTML = "";
            return value;
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        var Product = {
            id,
            name: handleProductName(document.getElementById("inpName").value),
            price: handleProductPrice(document.getElementById("inpPrice").value),
            description: handleDescription(document.getElementById("inpDesc").value),
            image: handleImage(),
            category: handleCategory(document.getElementById("inpCate").value),
        }

        function checkError(obj) {
            for (var key in obj) {
                // eslint-disable-next-line eqeqeq
                if (obj[key] === false && key !== "status")
                    return false;
            }
            return true;
        }

        const sendPostRequest = async () => {
            try {
                const resp = await axios.put('https://localhost:44382/api/Product', Product);
                setMessage({
                    type: "alert-success",
                    msg: resp.data
                })
                navigate('/Marketing/ManageProduct')
            } catch (err) {
                // Handle Error Here
                setMessage({
                    type: "alert-danger",
                    msg: err.response.data
                })
            }
        };

        if (checkError(Product) === true) {
            if (Product.image!==true) {
                sendPostRequest()
            } else {
                const storageRef = ref(storage, `Coffe/${imgProduct.name}`)
                uploadBytes(storageRef, imgProduct)
                    .then((snapshot) => {
                        getDownloadURL(snapshot.ref).then((downloadURL) => {
                            Product.image = downloadURL;
                            sendPostRequest();
                        })
                    })
            }
        }
    }

    return (
        <Fragment>
            <div className="col-lg-12 container">
                <div className="p-5">
                    <div className="text-center">
                        <h1 className="h4 text-success mb-4 ">Edit Product</h1>
                        {message.type === null ? null : <Message type={message.type}>{message.msg}</Message>}
                    </div>
                    <form className="user" method="" id="formProduct">
                        <div className="form-group mt-2">
                            <p className="mb-0 mt-0 ms-5">Product Name</p>
                            <input type="text" className="form-control " id="inpName" defaultValue={myProduct.name}
                                onChange={(e) => handleProductName(e.target.value)}></input>
                            <FormInput nameErr="lbProductName"></FormInput>
                        </div>
                        <div className="form-group mt-2">
                            <p className="mb-0 mt-0 ms-5">Price</p>
                            <input type="number" className="form-control " id="inpPrice" defaultValue={myProduct.price}
                                onChange={(e) => handleProductPrice(e.target.value)}></input>
                            <FormInput nameErr="lbProductPrice"></FormInput>
                        </div>
                        <div className="form-group mt-2">
                            <p className="mb-0 mt-0 ms-5">New Image</p>
                            <input type="file" name="image" onChange={(e) => setImgProduct(e.target.files[0])} />
                            <FormInput nameErr="lbImage"></FormInput>
                        </div>
                        <div className="form-group mt-2">
                            <p className="mb-0 mt-0 ms-5">Old Image</p>
                            <img src={myProduct.image} alt="Alternate Text" />
                        </div>
                        <div className="form-group mt-2">
                            <p className="mb-0 mt-0 ms-5">Description</p>
                            <input type="text" className="form-control" id="inpDesc" defaultValue={myProduct.description}
                                onChange={(e) => handleDescription(e.target.value)}></input>
                            <FormInput nameErr="lbDescription"></FormInput>
                        </div>
                        <div className="form-group mt-2">
                            <p className="mb-0 mt-0 ms-5">Category</p>
                            <select className="form-control" name="category" id="inpCate" defaultValue={myProduct.category}
                                onChange={(e) => handleCategory(e.target.value)}>
                                <option value={myProduct.category}>{myProduct.catename}</option>
                                {lsCate.map((c, index) => (
                                   c.id===myProduct.category?"":<option value={c.id} key={index} >{c.name} </option>
                                ))}
                            </select>
                            <FormInput nameErr="lbCategory"></FormInput>
                        </div>
                        <button type="submit" className="btn btn-primary btn-user btn-block" onClick={(e) => handleSubmit(e)}>
                            Edit Product
                        </button>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default EditProduct;