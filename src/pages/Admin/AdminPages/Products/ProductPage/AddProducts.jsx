import { notification } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProductAction } from "../../../../../stores/slices/admin.product.slice";
import {v4} from "uuid";
function AddProducts() {
    const [addProduct, setAddProduct] = useState(false);
    const [selectImg, setSelectImg] = useState(null);
    const [newTodoValue, setNewTodoValue] = useState({
        productName:'',
        type:'',
        price:'',
        image: '',
        description:'',
        
    });
    const dispatch = useDispatch();

    const handleOnchange = (e) => {
        const value = e.target.value;
        setNewTodoValue({...newTodoValue, [e.target.name]: value});
    }
    const handleOnchangeFile = (e) =>{
        const file = e.target.files[0];
        // file.urlImage = URL.createObjectURL(file);
        function getBase64(file, onLoadCallback) {
            return new Promise(function(resolve, reject) {
                var reader = new FileReader();
                reader.onload = function() { resolve(reader.result); };
                reader.onerror = reject;
                reader.readAsDataURL(file);
            });
        }
        
        var promise = getBase64(file);
        promise.then(function(result) {
            setSelectImg(result)
        });
        console.log(selectImg)
    };
    const addTodoProduct = (container) => {
        if (container.productName === '' || container.type==='' || container.price === "" || container.description === '' ) return;
        const newTodoList = 
            {
                id: v4(),
                productName:container.productName,
                type: container.type,
                price: container.price,
                image: container.image,
                description: container.description,
            };
        
        
            dispatch(addProductAction(newTodoList));
    }
    const hanldeSubmitTodoValue = () => {               
        addTodoProduct({...newTodoValue,image:selectImg });
        setNewTodoValue({
            productName:'',
            type:'',
            price:'',
            image: '',
            description:'',
        });
        setSelectImg('');
        notification.success({
            message:`Thêm thành công`
        })
    }
    const toggle = () => setAddProduct(!addProduct);
    return ( 
        <div className="add-products">
                <h2>Add Products <span className="close-add" onClick={toggle}>X</span></h2>
                <p className="label-input">
                        <label>Product Name:</label>
                        <input className="input-product"  type= "text"name="productName" value = {newTodoValue.productName}
                        onChange = {handleOnchange} placeholder="Title" />
                    </p>                   
                    <p className="label-input">
                        <label>Type:</label>
                        <input className="input-product" type= "text"name="type" value = {newTodoValue.type}
                        onChange = {handleOnchange} placeholder="Type" />
                    </p>                   
                    <p className="label-input">
                        <label>Price:</label>
                        <input className="input-product" type= "text"name="price" value = {newTodoValue.price}
                        onChange = {handleOnchange} placeholder="Price" />
                    </p>                   
                    <p className="label-input">
                        <label>Description:</label>
                        <input className="input-product" type= "text"name="description" value = {newTodoValue.description}
                        onChange = {handleOnchange} placeholder="Description" />
                    </p>
                    <p className="label-input">
                        <label className="select-img" for = "input-img">Select File:</label>
                        <input id="input-img" hidden  type= "file" name="myImage" 
                        onChange = {handleOnchangeFile} placeholder="" />
                        {selectImg && <img width={'50%'} className="image" src={selectImg}/> }  
                    </p>   
                    <button className="save-add" onClick={hanldeSubmitTodoValue}>ADD</button>                   
            </div>
     );
}

export default AddProducts ;