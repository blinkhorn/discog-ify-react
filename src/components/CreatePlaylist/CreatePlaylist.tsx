import React, {
  FC,
  MouseEvent,
  ChangeEvent,
  useState,
  useContext
} from 'react';
import styles from './CreatePlaylist.module.css';
import { Button, Flex, TextField } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../UserContext';
import { Playlist, User } from '../../APIResponseTypes';

interface CreatePlaylistProps {}

const CreatePlaylist: FC<CreatePlaylistProps> = () => {
  const navigate = useNavigate();
  const [recordLabel, setRecordLabel] = useState('');
  const [activeUser, setActiveUser] = useContext(UserContext);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setRecordLabel(event.target.value);

  const handleSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (recordLabel.length) {
      // const playlist = await apiCall;
      console.log(recordLabel);
      const recordLabelId = 1; // TODO: delete
      const recordLabelPlaylist: Playlist = {
        id: 'string',
        name: 'string',
        spotifyUrl: 'string',
        sharedCount: 0,
        recordLabelName: 'string',
        releases: null,
        releaseArtists: null,
        releaseDates: null,
        createdDate: 'string',
        lastUpdatedDate: 'string'
      };

      let updatedActiveUserPlaylists: Playlist[] = [recordLabelPlaylist];
      if (activeUser?.playlists) {
        updatedActiveUserPlaylists = [...updatedActiveUserPlaylists, ...activeUser.playlists];
    
      }

      const updatedActiveUser: User = {
        email: activeUser?.email,
        createdDate: activeUser?.createdDate,
        username: activeUser?.username,
        firstName: activeUser?.firstName,
        lastName: activeUser?.lastName,
        playlists: updatedActiveUserPlaylists
      }
      setActiveUser(updatedActiveUser);
      navigate(`/playlists/${recordLabelId}`, {
        state: { recordLabelName: recordLabel } // TODO: rework
      });
    }
  };
  return (
    <div className={styles.CreatePlaylist} data-testid='CreatePlaylist'>
      <Flex
        as='form'
        justifyContent={'center'}
        alignItems={'center'}
        margin={'5rem auto'}
      >
        <TextField
          type='text'
          descriptiveText='Enter a Record Label'
          name='record-label'
          label='Create Playlist'
          width='70%'
          onChange={(event) => handleChange(event)}
          outerEndComponent={
            <Button
              type='submit'
              name='submit-button'
              onClick={(event) => handleSubmit(event)}
            >
              Create
            </Button>
          }
        />
      </Flex>
    </div>
  );
};

export default CreatePlaylist;
