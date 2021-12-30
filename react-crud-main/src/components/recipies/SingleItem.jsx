import React from 'react'
import { Link } from "react-router-dom";
import axios from "axios";

export default function SingleItem(props) {
    return (
      
        <div>
        <div className='container'>
         
        <h1 className='title-heading'>
        {props.recipes.title}
        </h1>
            
         
        <div className='inside'>
          <Link to={"/recipies/details/" + props.recipes._id} className='veiwbtn'>
            Veiw
        </Link>
        
        <Link className="edit" to={"/recipies/edit/" + props.recipes._id  }>Edit</Link>
        <button className='delbtn'
        onClick={(e) => {
          axios
            .delete(
                "http://localhost:4000/api/recipes/" +
                props.recipes._id
            )
            .then((res) => {
              console.log("deleted");
              props.onDelete();
            }
            );
        }}>
        Delete
      </button>
  

  </div>

    
      </div>
      <hr />
      </div>
      
    )
}
