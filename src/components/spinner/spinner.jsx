import { Spinner as BsSpinner }  from 'react-bootstrap';
import "./spinner.css"

const Spinner = ({variant="primary", animation="border", fixed}) => {
    if(fixed){
        return <div className="spinner-fixed">
            <BsSpinner animation={animation} variant={variant} />
        </div>
    }
    else return <BsSpinner animation={animation} variant={variant} />
}

export default Spinner;


