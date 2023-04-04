export const visibleContacts = state => {
  const normalizedFilter = state.contacts.filter.toLowerCase();

  return state.contacts.contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};
