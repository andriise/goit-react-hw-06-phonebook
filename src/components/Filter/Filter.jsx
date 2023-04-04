import { useSelector } from 'react-redux';
import { filteredContacts } from '../redux/contactsSlice';
import { useDispatch } from 'react-redux';
import { Label, Input } from './Filter.styled';

const ContactFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  const changeFilter = query => {
    dispatch(filteredContacts(query));
  };

  return (
    <Label>
      Find contacts by name
      <Input
        value={filter}
        onChange={e => changeFilter(e.currentTarget.value)}
        type="text"
      />
    </Label>
  );
};

export default ContactFilter;
