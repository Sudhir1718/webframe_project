import React from 'react';
import { useState, useEffect } from 'react';
import RocketService from './RocketService';
import { useNavigate, useParams } from 'react-router-dom';


export default function Updation() {

    const {id} = useParams();

    const navigate = useNavigate();

    const [Setvalues, setValues] = useState({ bat_size: "", bat_type: "", cricket_bat_brands: "", weight: "", grip: "", different_shapes: "",price:"" })

    const handleInputs = (e) => {
        setValues({ ...Setvalues, [e.target.name]: e.target.value });
    }

    console.log(id);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await RocketService.getRocketById(id);
                setValues(response.data);
                console.log(response.data);
            }
            catch(error){
                console.log(error);
            }
        }
        fetchData();
    }, [])

    const eventShow = (event) => {
        event.preventDefault();
        RocketService.updateRocket(id, Setvalues)
        navigate("/form");
        console.log(Setvalues);
    }

    const eventCancel = (event) => {
        navigate("/form");
    }

    return (
        <div>
        <div>
            <form>
                <div>
                    <label>ID</label>
                </div>
                <div>
                    <input type='number'
                        name='bat_size'
                        value={Setvalues.bat_size}
                        onChange={handleInputs}
                        placeholder='ID' />
                </div>

                <div>
                    <label>Bat type</label>
                </div>
                <div>
                    <input type='text'
                        name='bat_type'
                        value={Setvalues.bat_type}
                        onChange={handleInputs}
                        placeholder='bat_type' />
                </div>

                <div>
                    <label>Brand</label>
                </div>
                <div>
                    <input type='text'
                        name='cricket_bat_brands'
                        value={Setvalues.cricket_bat_brands}
                        onChange={handleInputs}
                        placeholder='cricket_bat_brands' />
                </div>

                <div>
                    <label>Weight</label>
                </div>
                <div>
                    <input type='text'
                        name='weight'
                        value={Setvalues.weight}
                        onChange={handleInputs}
                        placeholder='weight' />
                </div>
                <div>
                    <label>Grip</label>
                </div>
                <div>
                    <input type='text'
                        name='grip'
                        value={Setvalues.grip}
                        onChange={handleInputs}
                        placeholder='Grip' />
                </div>

                <div>
                    <label>Shapes</label>
                </div>
                <div>
                    <input type='text'
                        name='different_shapes'
                        value={Setvalues.different_shapes}
                        onChange={handleInputs}
                        placeholder='Shapes' />
                </div>
                <div>
                    <label>Price</label>
                </div>
                <div>
                    <input type='text'
                        name='price'
                        value={Setvalues.price}
                        onChange={handleInputs}
                        placeholder='Price' />
                </div>
                <button onClick={eventShow}>Submit</button>
            <button onClick={eventCancel}>Cancel</button>
            </form>
            
        </div>
    </div>
    )
}