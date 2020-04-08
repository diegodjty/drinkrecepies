import React,{createContext,useEffect,useState} from 'react'

export const ModalContext = createContext();

const ModalProvider = (props) => {

    const [idRecepie, setIdRecepie] = useState(null);

    return (
        <ModalContext.Provider
            value={{
                setIdRecepie
            }}
        >
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalProvider
