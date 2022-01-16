import { useState,useCallback } from "react"
import Currency from "./Currency"
import WalletModal from './WalletModal';
import { VStack,Heading ,useDisclosure} from "@chakra-ui/react";
export default function Converter(){
    const exchangeRate=3;
    const [data,setData]=useState()
    const [isValueFromBase,setIsValueFromBase]=useState('true');
    const [errors,setErrors]=useState([]);
    const [showModal,setShowModal]=useState(false);
      const { isOpen, onOpen, onClose } = useDisclosure()
    function busdOnChange(event){
        setIsValueFromBase(false);
        setData(event.target.value);
    }
    function nepOnChange(event){
        setIsValueFromBase(true);
        setData(event.target.value);
    }


    
    return (
        <VStack>
              <Heading as='h3' size={3*1}>Converter</Heading>
        <form>
            <Currency handleOnChange={nepOnChange} setErrors={setErrors} data={isValueFromBase?data:data&&Math.round((data/3)*100)/100} label="NEP"/>
            <Currency handleOnChange={busdOnChange} setErrors={setErrors} data={!isValueFromBase?data:data&&Math.round(data*3*100)/100} label="BUSD"/>
        </form>

        <button onClick={onOpen}>Connect</button>
        <WalletModal onClose={onClose} isOpen={isOpen}/>
        </VStack>
    )
}