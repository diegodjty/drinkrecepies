import React, {useContext} from 'react'
import { RecepiesContext } from '../context/RecepiesContext';
import Recepie from './Recepie';
const RecepiesList = () => {

    const {recepies} = useContext(RecepiesContext)

    return (
        <div className="row mt-5">
            {recepies.map(recepie=>(
                <Recepie 
                    key={recepie.idDrink}
                    recepie={recepie}
                />
            ))}
        </div>
    )
}

export default RecepiesList
