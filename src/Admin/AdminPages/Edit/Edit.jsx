import React from "react";
import {  useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { useLocation, useNavigate, useParams,  } from "react-router-dom";
import { updateProductAction } from "../../../store/slices/product.slice";
// import { TodoListContext } from "../../../App";
import { useHook } from "../../hook/useHook";

export const LIST_ITEM = 'ITEM-PRODUCT';


function Edit() {
    const location = useLocation();
    const [newValueEdit,setNewValueEdit] = useState(location.state);
    console.log("🚀 ~ file: Edit.jsx ~ line 15 ~ Edit ~ newValueEdit", newValueEdit)
    const [urlImage, setUrlImage] = useState(null);
    const [showImg, setShowImg] = useState(null);
    const [addTodoProduct, updateProduct] = useHook();
    const listProduct = useSelector(state => state.product.productState);
    const page_ = listProduct.pagination.page;
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const param = useParams();
    
    const typelocation = newValueEdit.type;
    console.log("🚀 ~ file: Edit.jsx ~ line 26 ~ Edit ~ typelocation", typelocation)
    const handleOnchangeEdit = (e) => {
        const valueEdit = e.target.value;
        setNewValueEdit({...newValueEdit,[e.target.name]: valueEdit})
    }

    // useEffect(() =>{ return () =>{ urlImage && URL.revokeObjectURL(urlImage.urlImage)} },[urlImage]);

    // const handleOnchangeEditFile = (e) => {
    //     const file = e.target.files[0];
    //     file.urlImage = URL.createObjectURL(file);
    //     setUrlImage(file);
    // }
    const handleOnchangeEditFile = (e) =>{
        const file = e.target.files[0];
        // file.urlImage = URL.createObjectURL(file);
        function getBase64(file) {
            return new Promise(function(resolve, reject) {
                var reader = new FileReader();
                reader.onload = function() { resolve(reader.result); };
                reader.onerror = reject;
                reader.readAsDataURL(file);
            });
        }
        
        var promise = getBase64(file);
        promise.then(function(result) {
            setUrlImage(result)
        });
         
    };
    const hanldeSubmitEditValue = (e) => {
        const list = {...newValueEdit, id:param.id, link:urlImage? urlImage: location.state.link}
        dispatch(updateProductAction(list));
        navigate(`/admin/products/${typelocation}?page=${page_}&limit=10`)    
    }

    const hanldeReset = () => {
        setNewValueEdit({
            name:'',
            type:'',
            price:'',
            link: '',
            description:'',
        })
    }
    const backProducts = () => navigate(`/admin/products/${typelocation}?page=${page_}&limit=10`);
    const toggleImg = () => setShowImg(true);
    return (

        <div className="edit">
             <div className="edit-product">

                <p className="label-input1">
                        <label>Title:</label>
                        <input type= "text"name="name" value = {newValueEdit.name}
                        onChange = {handleOnchangeEdit} placeholder="Title" />
                    </p>
                    <span className="close-edit" onClick={backProducts}>X</span>                   
                    <p className="label-input1">
                        <label>Type:</label>
                        <input type= "text"name="type" value = {newValueEdit.type}
                        onChange = {handleOnchangeEdit} placeholder="Type" />
                    </p>                   
                    <p className="label-input1">
                        <label>Price:</label>
                        <input type= "text"name="price" value = {newValueEdit.price}
                        onChange = {handleOnchangeEdit} placeholder="Price" />
                    </p>                   
                    <p className="label-input1">
                        <label>Description:</label>
                        <input type= "text"name="description"  value = {newValueEdit.description}
                        onChange = {handleOnchangeEdit} placeholder="Description" />
                    </p>
                    <p className="label-input1">
                        <label className="select-img" for = "input-img" onClick={toggleImg}>Select File:</label>
                        {showImg ?? <span><img width={'200px'} style={{float:'right'}} src={location.state.link}/></span>}
                        <input id="input-img" hidden  type= "file" name="myImage" 
                        onChange = {handleOnchangeEditFile} placeholder="" />
                        {urlImage && <img width={'200px'} className="image" src={urlImage}/> }  
                    </p>
                    <button className="reset" onClick={hanldeReset}>Reset</button>   
                    <button className="save-add" onClick={hanldeSubmitEditValue}>Save</button>
            </div>
        </div>
    )
}

export default Edit;