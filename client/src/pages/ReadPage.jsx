import React, {useEffect, useState} from 'react';
import axios from "axios";
import Loader from "../loader/loader.jsx";
import {Link} from "react-router-dom";
import Layout from '../components/Layout.jsx';

const ReadPage = () => {

    const [Data,SetData]=useState([]);

    useEffect(() => {
        (async ()=>{
            await ReadData()
        })()
    }, []);


    const ReadData=async ()=>{
        let res=await axios.get("/api/Read");
        SetData(res.data['row'])
    }

    const DeleteData=async (id)=>{
        await axios.get(`/api/Delete/${id}`);
        await ReadData()
    }


    return (
        <Layout>
        <div className="container mt-5">
        <div className="head mb-3">
                <h4>All Food List</h4>
            </div>
                            <div className='row'>
                                {
                                    Data.length===0?(<Loader/>):
                                    (Data.map((item,i)=>{
                                        return (
                                            <div className='col-md-3 mb-4' key={i}>
                                                <div className="card my_Card">
                                                <img src={item['FoodImg']}  className="card-img-top img_style" alt="..."/>
                                                <div className="card-body">
                                                    <h5 className="card-title">{item['FoodName']}</h5>
                                                    <span className='price'>Tk : {parseFloat(item['Price']).toFixed(2)}</span>
                                                    <div>
                                                        <Link className="btn_edit text-decoration-none" to={`/update/${item['_id']}`}>Edit</Link>
                                                        <button onClick={()=>DeleteData(item['_id'])} className="btn_delete ms-2">Delete</button>
                                                    </div>
                                                </div>
                                           </div>

                                        </div>
                                        )
                                    }))
                                }
                            </div>

                    </div>
    </Layout>

    );
};

export default ReadPage;