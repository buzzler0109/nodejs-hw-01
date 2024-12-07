import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const getContacts = await readContacts();
  const newContacts = Array(number)
    .fill(0)
    .map(() => createFakeContact());
  const newList = [...getContacts, ...newContacts];
  await writeContacts(newList);
};

generateContacts(5);
