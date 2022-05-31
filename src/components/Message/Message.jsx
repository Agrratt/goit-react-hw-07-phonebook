import propTypes from 'prop-types';


export const Message = (message) => {
    <h2>{message}</h2>
};

Message.propTypes = {
    message: propTypes.string.isRequired,
}