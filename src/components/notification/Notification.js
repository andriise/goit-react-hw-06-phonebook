import { Snackbar, Alert } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { hideNotification } from '../notification/redux/notification.slice';

const Notification = () => {
  const visible = useSelector(state => state.notifications.visible);
  const message = useSelector(state => state.notifications.message);
  const dispatch = useDispatch();

  return (
    <Snackbar
      open={visible}
      autoHideDuration={6000}
      onClose={() => dispatch(hideNotification())}
    >
      <Alert
        onClose={() => dispatch(hideNotification())}
        severity="success"
        sx={{ width: '100%' }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
