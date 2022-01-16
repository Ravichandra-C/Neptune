import styles from "../styles/Currency.module.css";
import {Box, Input, VStack,FormControl,FormLabel} from "@chakra-ui/react"
export default function Currency({handleOnChange,data,label,setErrors}){

    // function handleInputChange(event){
    //     let arr=event.target.value.toString().split('.');
    //     if(arr.length==2){
    //         setErrors([]) 
    //         let val=arr[1];
    //         console.log(val);
    //          if(val.length>2){
    //              setErrors(['Only 2 digits are allowed']);
    //              return;
    //          }
    //     }
    //     handleOnChange(event);

    // }

    return (
        
        // <div className={styles.group}>
        //     <label htmlFor="nep">{label} : </label>
        //     <input className={styles.input} id='nep' onChange={handleOnChange} step={.01} type='number' value={data}></input>
        // </div>

        <VStack>
            <FormControl>
                <FormLabel htmlFor={label.toLowerCase()}>{label+" : "}</FormLabel>
                <Input id={label.toLowerCase()} type='number' onChange={handleOnChange} value={data}/>
                </FormControl>
        </VStack>
    )
}