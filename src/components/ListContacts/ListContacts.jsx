import { ItemContacts } from 'components/ItemContacts/ItemContacts';
import { ContactsList } from 'components/ListContacts/ListContacts.styled';
import { useSelector } from 'react-redux';
import { getFilter } from '../../redux/contactsSliceFilter';
import { useFetchContactsQuery, useRemoveContactMutation } from 'redux/contactsApi';
// import { Loader } from 'components/Loader/Loader';

export function ListContacts() {
  const { data: contacts, isFetching } = useFetchContactsQuery();
  const filter = useSelector(getFilter);
  
  // const dispatch = useDispatch();

  const [deleteContact] = useRemoveContactMutation();
  const onDeleteContact = (id) => deleteContact(id);


  const onSearchByName = () => {
    const normalizedFilter = filter.toLowerCase().trim();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter));
  };


  const arrayContacts = onSearchByName();

  return (
    <>
      <ContactsList>
        {/* {isFetching && <Loader/>} */}
        {contacts && !isFetching && arrayContacts.map(({ id, name, phone }) => {
          return (
          
            <ItemContacts
              key={id}
              id={id}
              name={name}
              phone={phone}
              deleteContact={onDeleteContact}
            />
          );
        }

        )}
      </ContactsList>

    </>
  );
};