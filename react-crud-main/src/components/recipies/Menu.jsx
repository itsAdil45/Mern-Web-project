import React from 'react'
import SingleItem from './SingleItem';
import { Link } from "react-router-dom";
import axios from "axios";
export default function Menu() {
    const [recipes , setRecipes] = React.useState([]);
    const getData = () => {
        axios.get("http://localhost:4000/api/recipes").then((res) => {
            setRecipes(res.data)
          
           
        }).catch((err) => {
            console.log(err);
        })
    }
    React.useEffect(getData, []);
    return (
        <div>
              {recipes.length==0? <p>No items</p> : <div></div> }
        
         
            {
                recipes.map((recipes , index)=><SingleItem key={index} recipes={recipes} onDelete ={getData}/>)

            }
        </div>
    )
}
