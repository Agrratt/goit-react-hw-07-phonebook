import { useState } from "react";
// import { useDispatch } from 'react-redux';
import { ReactComponent as AddIcon } from 'components/icons/addContact.svg';
import { nanoid } from 'nanoid';
import {FormContainer, Wrapper, Label, InputName, ButtonAdd} from 'components/Form/Form.styled'
import { useFetchContactsQuery, useAddContactMutation } from 'redux/contactsApi';

export function Form() {
  const {data: contacts} = useFetchContactsQuery();
  const [newContact] = useAddContactMutation();
  // const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const resetInput = () => {
    setName('');
    setPhone('');
  };

  const handleSubmit = async evt => {
    evt.preventDefault();

    const contactAdd = {
      id: nanoid(),
      name,
      phone,
    };

    if (contacts.some(contact => contact.name === name)) {
      return alert(`${name} is already in contacts`);
    };
     await newContact(contactAdd)
    
    // contacts.some((contact) => contact.name === name) ?
    //   (alert(`${name} is already in contacts`)) :
    //   (dispatch(newContact(contactAdd)));
    
    resetInput();  
  };
  
  const handleNameChange = (evt) => {
    setName(evt.target.value)
  };
  
  const handleNumberChange = (evt) => {
    setPhone(evt.target.value)
  };


  return (
    <FormContainer onSubmit={handleSubmit}>
      <Wrapper>
        <Label>
          Name
          <InputName
            autoComplete="off"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleNameChange}
            
          />
        </Label>

      </Wrapper>

      <Wrapper>
        <Label >
          Number
          <input
            autoComplete="off"
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={phone}
            onChange={handleNumberChange}
          />
        </Label>

      </Wrapper>

      <ButtonAdd type="submit">
        Add contact <AddIcon width='12' height='15' />
      </ButtonAdd>

    </FormContainer>
  );
};