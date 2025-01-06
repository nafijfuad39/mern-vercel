import React from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Layout from '../components/Layout';
const CreatePage = () => {

    let navigate=useNavigate();

    const CreateData=async (event)=>{

        event.preventDefault();

        const formData=new FormData(event.target);
        const foodName=formData.get("foodName");
        const foodCode=formData.get("foodCode");
        const foodImg=formData.get("foodImg");
        const foodCategory=formData.get("foodCategory");
        const foodQty=formData.get("foodQty");
        const foodPrice=formData.get("foodPrice");

        console.log(foodName,foodCode,foodImg,foodCategory,foodQty,foodPrice)

        await axios.post("/api/Create",{
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
                <h4>Create Food Item</h4>
            </div>
            <form onSubmit={CreateData}>
                <div className="row my_row_input">
                    <div className=" my_input">
                        <label>Food Name</label>
                        <input className="form-control form-control-sm" name="foodName" type="text" />
                    </div>
                    <div className="my_input">
                        <label>Food Code</label>
                        <input className="form-control form-control-sm" name="foodCode" type="number" />
                    </div>
                    <div className="my_input">
                        <label>Food Image</label>
                        <input className="form-control form-control-sm" name="foodImg" type="text" />
                    </div>
                    <div className=" my_input">
                        <label>Food Category</label>
                        <input className="form-control form-control-sm" name="foodCategory" type="text" />
                    </div>
                    <div className=" my_input">
                        <label>Qty</label>
                        <input className="form-control form-control-sm" name="foodQty" type="number" />
                    </div>
                    <div className=" my_input">
                        <label>Price</label>
                        <input className="form-control form-control-sm" name="foodPrice" type="number" />
                    </div>
                </div>
                 <button type="submit" className="my-btn mt-3">Submit</button>
            </form>
        </div>
    </Layout>
    );
};

export default CreatePage;