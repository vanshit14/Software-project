import React, { useState } from "react";
import { useActionData } from "react-router-dom";
import './Provideride.css';
const Provideride = () =>{

    const [islicence,setlicence] = useState('');
    const [isseat,setseat] = useState('');
    const [iscarno,setcarno] = useState('');
    const [iscarname,setcarname] = useState('');
    const [iscartype,setcartype] = useState('');
    const [ischarge,setcharge] = useState('');
    return(

        <div className="licence-container">
            <div className="licence">
            <label>Driving licence: </label>
            <input type="text" value={islicence} onChange={(e)=>{setlicence(e.target.value)}}
            required/>
            </div>

            <div className="licence">
            <label>Available seat: </label>
            <select value={isseat} onChange={(e)=>{setseat(e.target.value)}} required>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            </div>

            <div className="licence">
                <label>Car No. :</label>
                <input type="text" value={iscarno} onChange={(e)=>{setcarno(e.target.value)}} required />
            </div>
            

            <div className="licence">
                <label>Car Name:</label>
                <input type="text" value={iscarname} onChange={(e)=>{setcarname(e.target.value)}} required />
            </div>

            <div className="licence"> 
            <label>car type:</label>
            <select value={iscartype} onChange={(e)=>{setcartype(e.target.value)}} required>
                <option value="">select car type</option>
                <option value="sedan">sedan</option>
                <option value="hatchback">hatchback</option>
                <option value="SUV">SUV</option>
            </select>
            </div>

            <div className="licence">
                <label>Charge per km:</label>
                <input type="text" value={ischarge} onChange={(e)=>{setcharge(e.target.value)}} required/>
            </div>

            

        </div>
    );

}

export default Provideride;