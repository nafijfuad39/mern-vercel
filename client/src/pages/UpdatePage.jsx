import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Layout from "../components/Layout";


const UpdatePage = () => {
    let navigate=useNavigate();
    let {id}= useParams();

    const [Existing,SetExisting]=useState(null)

    const ExistingInfo=async (id)=>{
        let res=await axios.get(`/api/ReadByID/${id}`)
        SetExisting(res.data['row'][0])
    }

    useEffect(() => {
        (async ()=>{
            await ExistingInfo(id)
        })()
    }, []);


    const UpdateData=async (event)=>{

        event.preventDefault();

        const formData=new FormData(event.target);
        const foodName=formData.get("foodName");
        const foodCode=formData.get("foodCode");
        const foodImg=formData.get("foodImg");
        const foodCategory=formData.get("foodCategory");
        const foodQty=formData.get("foodQty");
        const foodPrice=formData.get("foodPrice");


        await axios.post(`/api/Update/${id}`,{
            FoodName:foodName,
            FoodCode:foodCode,
            FoodImg:foodImg,
            FoodCategory:foodCategory,
            Qty:parseFloat(foodQty),
            Price:parseFloat(foodPrice)
        })

        navigate("/")


    }




    return (
        <Layout>
        <div className="container mt-5">
            <div className="head">
                <h4>Update Food Item</h4>
            </div>
            <form onSubmit={UpdateData}>
                <div className="row my_row_input">
                    <div className="my_input">
                        <label>Food Name</label>
                        <input defaultValue={Existing!==null?(Existing['FoodName']):("")} className="form-control form-control-sm" name="foodName" type="text" placeholder="Enter Your Food Name"/>
                    </div>
                    <div className="my_input">
                        <label>Food Code</label>
                        <input defaultValue={Existing!==null?(Existing['FoodCode']):("")} className="form-control form-control-sm" name="foodCode" type="number" placeholder="Enter Your Food Code"/>
                    </div>
                 
                    <div className="my_input">
                        <label>Food Image</label>
                        <input defaultValue={Existing!==null?(Existing['FoodImg']):("")} className="form-control form-control-sm" name="foodImg" type="text" placeholder="Enter Your Food Image"/>
                    </div>
                    <div className="my_input">
                        <label>Food Category</label>
                        <input defaultValue={Existing!==null?(Existing['FoodCategory']):("")} className="form-control form-control-sm" name="foodCategory" type="text" placeholder="Enter Your Food Category"/>
                    </div>
                    <div className="my_input">
                        <label>Food Qty</label>
                        <input defaultValue={Existing!==null?(Existing['Qty']):("")} className="form-control form-control-sm" name="foodQty" type="number" placeholder="Enter Your Food Qty"/>
                    </div>
                    <div className="my_input">
                        <label>Food Price</label>
                        <input defaultValue={Existing!==null?(Existing['Price']):("")} className="form-control form-control-sm" name="foodPrice" type="number" placeholder="Enter Your Food Price"/>
                    </div>

                </div>
                 <button type="submit" className="mt-3 my-btn">Update</button>
            </form>
        </div>
    </Layout>
    );
};

export default UpdatePage;