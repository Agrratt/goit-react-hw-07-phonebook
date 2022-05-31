import React from "react";
import PropTypes from 'prop-types';
import { BlockName, ItemStyled } from 'components/ItemContacts/ItemContacts.styled';
import { IconButton } from 'components/IconButton/IconButton';
import { ReactComponent as DeleteIcon } from 'components/icons/deleteIcon.svg';


export const ItemContacts = ({ name, phone, deleteContact, id }) => {
    return (
        <>
            <ItemStyled>
                <BlockName>{name}</BlockName>
                <span>{phone}</span>

                <IconButton
                    deleteContact={deleteContact}
                    id={id}
                    aria-label='Delete contact'

                >
                <DeleteIcon width='12' height='12' fill='#9bd6fa'/>
                </IconButton>

                {/* <ButtonDelete type="button" onClick={() => deleteContact(id)}>Delete</ButtonDelete> */}
            </ItemStyled>
        </>
    );
};

ItemContacts.propTypes = {
    name: PropTypes.string.isRequired,
    phone: PropTypes.string,
    deleteContact: PropTypes.func.isRequired,
    id: PropTypes.string,
};