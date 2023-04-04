import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContact } from '../redux/contactsSlice';
import { Form, Label, Input, Button } from './PhonebookForm.styled';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        throw new Error(`Field type with a name ${name} is not processed`);
    }
  };

  const onAddNewContact = e => {
    e.preventDefault();
    const contactEl = {
      id: nanoid(),
      name,
      number,
    };
    dispatch(addContact(contactEl));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };
  return (
    <div>
      <Form onSubmit={onAddNewContact}>
        <div>
          <Label>
            Name
            <Input
              onChange={handleInputChange}
              value={name}
              name="name"
              type="text"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Label>
        </div>

        <div>
          <Label>
            Number
            <Input
              onChange={handleInputChange}
              value={number}
              name="number"
              type="tel"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Label>
        </div>
        <Button type="submit">Add contact</Button>
      </Form>
    </div>
  );
};

export default ContactForm;
