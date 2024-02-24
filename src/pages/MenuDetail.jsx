import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import '../style.css'


const MenuDetail = () => {  
    const [menu,setMenu] = useState({});
    const {id}= useParams();

    const menuDetail = () => {
        axios
        .get(`https://api.mudoapi.tech/menu/${id}`)
        .then(res => setMenu(res?.data?.data))
        .catch(err => {
            console.log(err);
        })
    }

    useEffect (() => {
        menuDetail();
    }, [])

    return(
        <div className="detailsPage">

            <h1>Menu Detail</h1>
        <div className="menuDetails">
            <h2 >{menu?.name}</h2>
            <img src={menu?.imageUrl} alt={menu?.name} />
            <h3>${menu?.price}</h3>
            <p>{menu?.description}</p>
        </div>
        </div>
    )
}

export default MenuDetail;