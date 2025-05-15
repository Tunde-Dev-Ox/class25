import './index.scss';
import PropTypes from 'prop-types';

const AuthInputBox = ({ type, placeholder, value, onChange, id, forgotpassword}) => {
    AuthInputBox.propTypes = {
        type: PropTypes.string,
        placeholder: PropTypes.string,
        value: PropTypes.string,
        onChange: PropTypes.func.isRequired,
        id: PropTypes.string,
        forgotpassword: PropTypes.bool
    };

    return (
        <div className="input-box">
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                id={id}
                forgotpassword= 'true'
            />  
        </div>
    )
}

export default AuthInputBox