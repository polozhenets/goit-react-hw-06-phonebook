import { Label } from 'components/ContactForm/ContactForm.styled';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { Filter } from 'components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteContact,
  getContacts,
  getFilter,
} from 'redux/slices/contact-slice';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filterC = useSelector(getFilter);

  const filtred = () => {
    if (filterC === '') {
      return false;
    }
    console.log(contacts);
    return contacts.filter(x => x.name.toLowerCase().includes(filterC));
  };

  const list = filtred() ? filtred() : contacts;

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
