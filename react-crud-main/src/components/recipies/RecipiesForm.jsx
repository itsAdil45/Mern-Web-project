import React, { useState } from 'react'
import axios from "axios";

import { useNavigate, useParams } from "react-router";

export default function RecipiesForm() {
    const navigate = useNavigate();
    const params = useParams();
    const id = params.id;
    const [recipies, setRecipies] = useState({ title: '', body: '', price: 0 });
    const submit = () => {
        if (id) {
            axios.put("http://localhost:4000/api/recipes/" + id, recipies).then((res) => {
                console.log(res.data);
                navigate("/");
            })
        }
        else {

            axios.post("http://localhost:4000/api/recipes/", recipies).then((res) => {
                console.log(res.data);
                navigate("/");
            })
        }
    }
    const getData = () => {
        if (id)
            axios
                .get("http://localhost:4000/api/recipes/" + params.id)
                .then((res) => {
                    setRecipies(res.data);
                });
    };

    React.useEffect(getData, []);
    return (
        <div className='form-container'>
         
            <h3 className='form-heading'>{id ? "Edit" : "Create"} Recipes</h3>
           
            Title: <input type="text" value={recipies.title} onChange={(e) => {

                setRecipies({ ...recipies, title: e.target.value });
            }} />
            <hr />

            Description: <input type="text" value={recipies.body} onChange={(e) => {

                setRecipies({ ...recipies, body: e.target.value });
            }} />
            <hr />

            Price: <input type="Number" value={recipies.price} onChange={(e) => {

                setRecipies({ ...recipies, price: e.target.value });
            }} />
            <hr />
            <button className="delbtn" onClick={submit}>Submit</button>
        </div>
    )
}
