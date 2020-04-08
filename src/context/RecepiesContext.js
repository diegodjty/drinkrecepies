import React, {createContext,useState,useEffect} from 'react';
import axios from 'axios'

export const RecepiesContext = createContext();

const RecepiesProvider = (props) => {

    const [recepies,setRecepies] = useState([])
    const [searchRecepies,setSearchRecepies] = useState({
        ingridients:'',
        category: ''
    })
    const [consult,setConsult] = useState(false);

    const { name , category} = searchRecepies;
    useEffect(()=>{
        if(consult){

            const getRecepies = async ()=>{
                const url=`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${name}&c=${category}`
                const result = await axios.get(url)
                setRecepies(result.data.drinks)
            }
            getRecepies()
        }
    },[searchRecepies]);

    return (
        <RecepiesContext.Provider
            value={{
                recepies,
                setConsult,
                setSearchRecepies
            }}
        >
            {props.children}
        </RecepiesContext.Provider>
    )
}

export default RecepiesProvider
