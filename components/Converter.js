import { useState,useCallback } from "react"
import Currency from "./Currency"
import Modal from './Modal';
export default function Converter(){
    const exchangeRate=3;
    const [data,setData]=useState()
    const [isValueFromBase,setIsValueFromBase]=useState('true');
    const [errors,setErrors]=useState([]);
    const [showModal,setShowModal]=useState(false);
    function busdOnChange(event){
        setIsValueFromBase(false);
        setData(event.target.value);
    }
    function nepOnChange(event){
        setIsValueFromBase(true);
        setData(event.target.value);
    }

    function handleOnClick(event){
        setShowModal(prev=>!prev);
    }
    
    return (
        <>
        <form>
            <Currency handleOnChange={nepOnChange} setErrors={setErrors} data={isValueFromBase?data:data&&Math.round((data/3)*100)/100} label="NEP"/>
            <Currency handleOnChange={busdOnChange} setErrors={setErrors} data={!isValueFromBase?data:data&&Math.round(data*3*100)/100} label="BUSD"/>
        </form>

        <button onClick={handleOnClick}>Connect</button>
        {showModal&&<Modal setShowModal={setShowModal}/>}
        </>
    )
}