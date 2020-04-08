import React,{useContext} from 'react'
import { ModalContext } from '../context/ModalContext';

const Recepie = ({recepie}) => {

    const {setIdRecepie} = useContext(ModalContext);

    return (
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">{recepie.strDrink}</h2>
                <img className="card-img-top" src={recepie.strDrinkThumb} alt={`Image of ${recepie.strDrink}`}/>
                <div className="card-body">
                    <button
                        type="button"
                        className="btn btn-block btn-primary"
                        onClick={()=>{
                            setIdRecepie(recepie.idDrink)
                        }}
                    >
                        View Recepie
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Recepie
