import React,{useContext,useState} from 'react'
import {Category} from '../context/Category'
import { RecepiesContext } from '../context/RecepiesContext';

const Form = () => {

    const {categories} = useContext(Category);
    const {setSearchRecepies,setConsult} = useContext(RecepiesContext)
    const [search,setSearch] = useState({
        name: '',
        category: ''
    })

    const getData = e => {
        setSearch({
            ...search,
            [e.target.name] : e.target.value
        })
    }

    return (
        <form 
            action=""
            className="col-12"
            onSubmit={ e => {
                e.preventDefault();
                setSearchRecepies(search);
                setConsult(true);
            }}
        >
            <fieldset className="text-center">
                <legend>Search Drinks By Category or Ingridient</legend>
            </fieldset>

            <div className="row mt-4">
                <div className="col-md-4">
                    <input 
                        type="text" 
                        className="form-control"
                        name="name" 
                        placeholder="Search by ingridient"
                        onChange={getData}
                    />
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="category"
                        onChange={getData}
                    >
                        <option value="">-- Select Category --</option>
                        {categories.map(category=>(
                            <option key={category.strCategory} value={category.strCategory}>{category.strCategory}</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <input 
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Search Drinks"
                    />
                </div>
            </div>
        </form>
    )
}

export default Form
