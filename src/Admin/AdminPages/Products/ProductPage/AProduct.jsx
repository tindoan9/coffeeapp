import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
// import { TodoListContext} from "../../../App"
import { Pagination } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { deleteProductAction, fetchProductAction, PRODUCT_LIMIT } from "../../../../store/slices/product.slice";
import { useHook } from "Admin/hook/useHook";

const tabs = ['all', 'coffee', 'fruit tea', 'cake'];
function AProduct() {
    
    const [addProduct, setAddProduct] = useState(false);
    const [showDetail, setShowDetail] = useState(false);
    const [selectImg, setSelectImg] = useState(null);
    const [type, setType] = useState('all');
    const [detailItem, setDetailItem] = useState(null);
    const [newTodoValue, setNewTodoValue] = useState({
        name:'',
        type:'',
        price:'',
        link: '',
        description:'',
        
    });
    const listProduct = useSelector(state => state.product.productState);
    const dispatch = useDispatch();
    let [searchParams, setSearchParams] = useSearchParams();
    console.log("🚀 ~ file: AProduct.jsx ~ line 28 ~ AProduct ~ searchParams", searchParams.get('page'))
    const defaultPage = 1;
    const _page = searchParams.get('page') ?? `${defaultPage}`;
    const _limit = searchParams.get('limit') ?? `${PRODUCT_LIMIT}`;

    const page = listProduct.pagination.page;
    const total = listProduct.pagination.total;
    const loading = listProduct.loading;

    
    useEffect(() => {
        dispatch(fetchProductAction({page:_page, limit: _limit}));
    },[dispatch, _page, _limit])

    const navigate = useNavigate()
    const gotoDetail = (item) => {
        navigate(`/edit/${item.id}`, {state: {...item}});
        setDetailItem({})

    }

    const handleDetailItem = (e) => {
        setDetailItem(e);
        console.log("detail",detailItem)
        setShowDetail(!showDetail);
    }

    const handleDeleteDetailItem = () =>{
        setShowDetail(!showDetail);
        setDetailItem({});
    }

    const [addTodoProduct, updateProduct] = useHook();

    // handle change value 
    const handleOnchange = (e) => {
        const value = e.target.value;
        setNewTodoValue({...newTodoValue, [e.target.name]: value});
    }

    //delete old url image and create new url image
    // useEffect(() => {
    //     return () => {
    //         selectImg && URL.revokeObjectURL(selectImg.urlImage)
    //         console.log('test')
    //     }
    // },[selectImg])


    
    // handle onchange file image
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
    // handle submit the task of adding products
    const hanldeSubmitTodoValue = () => {               
        addTodoProduct({...newTodoValue,link:selectImg });
        setNewTodoValue({
            name:'',
            type:'',
            price:'',
            link: '',
            description:'',
        });
        setSelectImg(null)
    }

const handleDeleteProduct = () => {
    dispatch(deleteProductAction(detailItem));
    setShowDetail(!showDetail)
   
}

    const onchangePagination = (page, limit) => {
        setSearchParams({page, limit})
    }
    
    // const toggleDetail = () => setDetailProduct(!detailProduct);
    const toggle = () => setAddProduct(!addProduct);

    
    return(
        <>
        <div className="products">
            <div className="tille-add">
                {tabs.map(item => (
                    <button key={item} style={type ===item ? {color:'white', background:'#123456'}:{}} onClick ={() => setType(item)} >{item}</button>
                    ))}
                    <h3  onClick={toggle}><span >Add Products</span></h3>
            </div>            
            {addProduct && 
            <div className="add-products">
                <h2>Add Products <span className="close-add" onClick={toggle}>X</span></h2>
                <p className="label-input">
                        <label>Title:</label>
                        <input className="input-product"  type= "text"name="name" value = {newTodoValue.name}
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
            }
            <>
            {listProduct.data.map((item, index) => {
                if(type === 'all' || item.type === type) return (
                    <>
                        <div  className="product-item" key={index} onClick = {() => handleDetailItem(item)}>
                            <img src={item.link} alt = {item.name}/><br/>
                            <p>{item.name}</p>
                            <p>{item.price}đ</p>
                        </div>
                        
                    </>
                    
                )
            })}
            </>
            <>
            {showDetail && <div className="detail-item">
                    <img src= {detailItem?.link} alt="" />
                    <div className="detail-infor">
                        <p className="back" onClick={handleDeleteDetailItem}>X</p>
                        <h3 className="name-detail">{detailItem?.name}</h3>
                        <h3 className="price-detail">{detailItem?.price}đ</h3>
                        <p className="des-detail">{detailItem?.description}</p> 
                        <button onClick={handleDeleteProduct}>Delete</button><br></br>                      
                        <button onClick={() => gotoDetail(detailItem)}>Edit</button>
                    </div>
            </div>}
            </>
            
        </div>
        <div className="pagination">
            <Pagination
            
            onChange={onchangePagination}
            pageSize ={+ _limit}
            total = {total}
            current = {+ _page}
            />
            </div>
    </>
    )
}
export default AProduct;