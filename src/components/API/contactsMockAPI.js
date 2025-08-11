import axios from 'axios';

axios.defaults.baseURL = 'https://6887aae6071f195ca9819edd.mockapi.io';

export const getContactsAPI = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const addContactAPI = async contact => {
  const { data } = await axios.post('/contacts', contact);
  return data;
};

export const deleteContactAPI = async id => {
  try {
    await axios.delete(`/contacts/${id}`);
    return id;
  } catch (error) {
    console.error('Delete contact error:', error);
    throw error;
  }
};
