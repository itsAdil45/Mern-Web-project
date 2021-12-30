import React from "react";

import { useParams } from "react-router";
import axios from "axios";
const ItemsDetails = (props) => {
  const [recipes, setRecipes] = React.useState([]);
  const params = useParams();
  console.log(params);
  const getData = () => {
    axios
      .get("http://localhost:4000/api/recipes/" + params.id)
      .then((res) => {
        setRecipes(res.data);
        console.log(res.data);
      });
  };
  React.useEffect(getData, []);
  return (
    <div >
      <div className="details">
      <h3 className="details-heading">{recipes.title}</h3>
      <p><span>Description:</span> :{recipes.body}</p>
      <p><span>Price:</span> :{recipes.price}</p>
      <hr />
      </div>
  
    </div>
  );
};

export default ItemsDetails;