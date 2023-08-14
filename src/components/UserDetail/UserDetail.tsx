import React, { FC } from 'react';
import styles from './UserDetail.module.css';

interface UserDetailProps {}

const UserDetail: FC<UserDetailProps> = () => (
  <div className={styles.UserDetail} data-testid="UserDetail">
    UserDetail Component
  </div>
);

export default UserDetail;
