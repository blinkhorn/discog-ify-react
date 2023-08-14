import React, { FC } from 'react';
import styles from './Playlists.module.css';

interface PlaylistsProps {}

const Playlists: FC<PlaylistsProps> = () => (
  <div className={styles.Playlists} data-testid="Playlists">
    Playlists Component
  </div>
);

export default Playlists;
