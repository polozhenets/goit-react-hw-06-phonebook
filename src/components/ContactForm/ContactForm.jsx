import { useState } from "react";
import { Form,Button,Label} from "./ContactForm.styled";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from 'nanoid';
import { addContact } from "redux/slices/contact-slice";
import { getContacts } from "redux/selectors";

export const ContactForm = () => {

  const [{name,number},setState] = useState({name:"",number:""})
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
 

  const onChangeHandler = (e) => {
    const {name,value} = e.target;
    setState(prev=>({...prev,[name]:value}))
  }

  const formHandler = (e) => {
    e.preventDefault();
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    contacts.some(i => i.name === name)
      ? alert(`${name} is already in contacts`)
      : dispatch(addContact(contact));
     
      setState({name:"",number:""})
  };

  return (
    <Form onSubmit={formHandler}>
    <Label htmlFor="">Name </Label>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={onChangeHandler}
      />
    <Label htmlFor="">Number</Label>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={onChangeHandler}
        />
      <Button type="submit">Save</Button>
    </Form>
  );
};
