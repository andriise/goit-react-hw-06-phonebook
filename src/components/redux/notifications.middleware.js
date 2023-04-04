import { addNotification } from 'components/notification/redux/notification.slice';
import { addContact, deleteContact } from './contactsSlice';

const NotificationsMiddleware =
  ({ getState, dispatch }) =>
  next =>
  action => {
    const contacts = getState().contacts.contacts;
    if (addContact.match(action)) {
      next(action);
      dispatch(addNotification(`Friend ${action.payload.name} was added`));
      return;
    }

    if (deleteContact.match(action)) {
      const contactToDelete = contacts.find(
        contact => contact.id === action.paload
      );
      dispatch(addNotification(`Friend ${contactToDelete} was deleted`));
    }

    next(action);
  };

export default NotificationsMiddleware;
