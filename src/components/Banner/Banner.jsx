import './Banner.css';
import propTypes from 'prop-types';


function Banner({titulo, subTitulo }) {
    return ( 
        <div className='Banner'>
            <h3 className='description-wrapper'>{titulo}</h3>
            <h1>{subTitulo}<span className='text-top'>.</span></h1>
        </div>
    );
}

//verifica o prop types
Banner.propTypes = {
    titulo: propTypes.string.isRequired,
    subTitulo: propTypes.string.isRequired
}

export default Banner;