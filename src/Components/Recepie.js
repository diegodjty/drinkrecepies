import React,{useContext,useState} from 'react'
import { ModalContext } from '../context/ModalContext';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';



function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 450,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));

const Recepie = ({recepie}) => {

    // Modal Configuration
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const classes = useStyles();
    const handelOpen = () => {
        setOpen(true)
    }
    const handelClose = () =>{
        setOpen(false)
    }

    const {info,setIdRecepie,setRecepie} = useContext(ModalContext);

    const showIngridients = (info) => {
        let ingridient = [];
        for(let i = 1; i<16; i++){
           if(info[`strIngredient${i}`]){
               ingridient.push(
                 <li>{info[`strIngredient${i}`]} {info[`strMeasure${i}`]}</li>
               )
           } 
        }

        return ingridient;
    }

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
                            handelOpen();
                        }}
                    >
                        View Recepie
                    </button>
                    <Modal
                        open={open}
                        onClose={()=>{
                            setIdRecepie(null)
                            setRecepie({})
                            handelClose();
                        }}
                    >
                        <div style={modalStyle} className={classes.paper}>
                            <h2>{info.strDrink}</h2>
                            <h3 className="mt-4">Instructions</h3>
                            <p>
                                {info.strInstructions}
                            </p>
                            <img className="img-fluid my-4" src={info.strDrinkThumb} alt=""/>
                            <h3>Ingredients and Quanteties</h3>
                            <ul>
                                {showIngridients(info)}
                            </ul>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default Recepie
