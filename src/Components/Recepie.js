import React from 'react'

const Recepie = ({recepie}) => {
    return (
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">{recepie.strDrink}</h2>
            </div>
        </div>
    )
}

export default Recepie
