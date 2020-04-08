import React,{createContext,useEffect,useState} from 'react'
import axios from 'axios'

export const ModalContext = createContext();

const ModalProvider = (props) => {

    const [idRecepie, setIdRecepie] = useState(null);
    const [info,setRecepie] = useState([])

    useEffect(()=>{
        const getRecepie = async () => {
            if(!idRecepie) return;

            const url=`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idRecepie}`
            const result = await axios.get(url)
            setRecepie(result.data.drinks[0])
        }
        getRecepie()
    },[idRecepie])

    return (
        <ModalContext.Provider
            value={{
                setIdRecepie,
                info,
                setRecepie
            
            }}
        >
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalProvider
