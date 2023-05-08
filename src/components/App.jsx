import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Section } from './Section/Section';

export const App = () => {
  
  return (
    <div
      style={{
        width: '100vh',
        display: 'block',
        color: '#010101',
        margin: '0 auto',
      }}
    >
      <Section title={'Phonebook'}>
        <ContactForm />
      </Section>
      <Section title={'Contacts'}>
        <ContactList/>
      </Section>
    </div>
  );
};
