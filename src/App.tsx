import React, { FC, useEffect } from 'react';
import styles from './App.module.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import UserContext from './UserContext';
import { User } from './APIResponseTypes';
import UserDetail from './components/UserDetail/UserDetail';
import CreatePlaylist from './components/CreatePlaylist/CreatePlaylist';
import PlaylistDetail from './components/PlaylistDetail/PlaylistDetail';
import Playlists from './components/Playlists/Playlists';
import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { API } from 'aws-amplify';
import { AuthEventData, AmplifyUser } from '@aws-amplify/ui';

interface AppProps {
  signOut: ((data?: AuthEventData | undefined) => void) | undefined;
  user: AmplifyUser | undefined;
}

const App: FC<
  AppProps | any // remove this
> = () =>
  // { signOut, user }
  {
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: Infinity,
          cacheTime: Infinity
        }
      }
    });

    const [activeUser, setActiveUser] = useState(null as User | null);

    useEffect(() => {
      const apiName = '<>'; // abstract into constants file most likely
      const getPath = `/api/users/${
        'replaceMe' // TODO: replace with >> user?.attributes.email
      }`;
      const requestInit = {
        headers: { 'Content-Type': 'application/json' },
        response: true
      };

      API.get(apiName, getPath, requestInit)
        .then((response) => {
          const {
            email,
            createdDate,
            username,
            firstName,
            lastName,
            ...playlists
          } = response.data;
          setActiveUser({
            email,
            createdDate,
            username,
            firstName,
            lastName,
            playlists
          });
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);

    return (
      <div className={styles.App}>
        <BrowserRouter>
          <UserContext.Provider value={[activeUser, setActiveUser]}>
            <QueryClientProvider client={queryClient}>
              <nav>
                <Link to='/'>
                  <span className={styles.navLinks}>Create Playlist</span>
                </Link>
                <Link to='/playlists'>
                  <span className={styles.navLinks}>Playlists</span>
                </Link>
                <Link to='/profile'>
                  <span className={styles.navLinks}>Profile</span>
                </Link>
              </nav>
              {/* <Heading level={1}>Hey {user?.username}</Heading>
            <Button onClick={signOut}>Sign out</Button> */}
              <Routes>
                <Route path='/playlists' element={<Playlists />} />
                <Route path='/playlists/:id' element={<PlaylistDetail />} />
                <Route path='/profile' element={<UserDetail />} />
                <Route path='/' element={<CreatePlaylist />} />
              </Routes>
            </QueryClientProvider>
          </UserContext.Provider>
        </BrowserRouter>
      </div>
    );
  };

export default //  withAuthenticator(
App;
// );
