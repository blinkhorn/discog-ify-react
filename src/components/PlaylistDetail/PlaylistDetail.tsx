import React, { FC } from 'react';
import styles from './PlaylistDetail.module.css';
import { useLocation } from 'react-router-dom';

interface PlaylistDetailProps {}

const PlaylistDetail: FC<PlaylistDetailProps> = () => {
  const location = useLocation();
  return (
    <div className={styles.PlaylistDetail} data-testid='PlaylistDetail'>
      PlaylistDetail Component and state is {location.state.recordLabelName}
    </div>
  );
};

export default PlaylistDetail;
