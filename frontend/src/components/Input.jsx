import PropTypes from 'prop-types'

const Input = ({ label, placeholder }) => {
  return (
    <div>
      <label>{label}</label>
      <input type="text" placeholder={placeholder} />
    </div>
  );
}
 
Input.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string
}

export default Input;