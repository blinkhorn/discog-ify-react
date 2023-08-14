import { createContext } from 'react';
import { User } from './APIResponseTypes';

const UserContext = createContext<[User | null, (user: User | null) => void]>([
  {
    createdDate: 'defaultCreatedDate',
    username: 'defaultUsername',
    firstName: 'defaultFirstName',
    lastName: 'defaultLastName',
    email: 'defaultEmail',
    playlists: null
  },
  () => {}
]);

export default UserContext;
