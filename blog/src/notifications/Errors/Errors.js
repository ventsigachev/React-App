import "./Errors.css";

const Errors = ({message}) => {
    return (
        <div className="errors">
            <p className="errorsMessage">
                {message}
            </p>
        </div>
    )
}

export default Errors;
