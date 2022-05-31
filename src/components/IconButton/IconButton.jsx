import React from "react";
import PropTypes from 'prop-types';
import { DeleteButton } from 'components/IconButton/IconButton.styled';

export const IconButton = ({ children, deleteContact, id }) => (
    <DeleteButton type='button' onClick={() => deleteContact(id)} >
        {children}
    </DeleteButton>
);

IconButton.defaultProps = {
    onClick: () => null,
    children: null
};

IconButton.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node,
    'aria-label': PropTypes.string.isRequired
};