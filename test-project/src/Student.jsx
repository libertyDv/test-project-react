
import PropTypes from 'prop-types'

function Student (props) { // para que la función pueda aceptar props se le pasa entre los parentesis un objeto javascript
    // la propiedad props.name se coge desde app.jsx que es donde se está establecinedo la propiedad
    return(
        <div>
            <hr></hr>
            <br></br>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    )

}

Student.propTypes = { // esto mostrará errores en la consola si no está bien
    name: PropTypes.string, // me aseguro de q la propiedad name siempre sea string
    age: PropTypes.number,
    isStudent: PropTypes.bool
}

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false
}

export default Student