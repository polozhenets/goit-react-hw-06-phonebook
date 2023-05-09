import { Label } from 'components/ContactForm/ContactForm.styled';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { Filter } from 'components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import {deleteContact} from 'redux/slices/contact-slice';
import { getContacts,getFilter } from 'redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filterC = useSelector(getFilter);

  const filtred = () => {
   
    console.log(contacts);
    return contacts.filter(contact => contact.name.toLowerCase().includes(filterC));
  };

  const list = filtred();

  return (
    <>
      <Label>Find contacts by name</Label>
      <Filter/>
      <ul>
        {list.map(item => (
          <ContactItem
            key={item.id}
            name={item.name}
            number={item.number}
            removeHandler={() => dispatch(deleteContact(item.id))}
          />
        ))}
      </ul>
    </>
  );
};
