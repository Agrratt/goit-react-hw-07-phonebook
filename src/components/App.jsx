import { useFetchContactsQuery } from 'redux/contactsApi';
import { Form } from 'components/Form/Form';
import { ListContacts } from 'components/ListContacts/ListContacts';
import { Filter } from 'components/Filter/Filter';
import { Container } from 'components/App.styled';
import { Message } from 'components/Message/Message';
import { Loader } from 'components/Loader/Loader';

export function App() {
  const { data: contacts, isFetching } = useFetchContactsQuery();

  return (
    <Container>
      <h1>Phonebook</h1>
      <Form />

      <h2>Contacts</h2>
      <Filter />
      {isFetching && <Loader/>}
      {contacts ? <ListContacts /> : <Message message='Contact list is empty'/> }
      
    </Container>
    
  );
};