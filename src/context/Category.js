import React , {createContext,useState,useEffect} from 'react';
import axios from 'axios'

export const Category = createContext();

const CategoryProvider = (props) =>{
    
    const [categories,setCategories] = useState([])

    useEffect(()=>{
        
        const getCategories = async () =>{
            const url ='https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
            const categories = await axios.get(url)

            setCategories(categories.data.drinks)
        }
        getCategories()
    },[]);

    return ( 
        <Category.Provider
            value={{
                categories
            }}
        >
            {props.children}
        </Category.Provider>

    )
}

export default CategoryProvider