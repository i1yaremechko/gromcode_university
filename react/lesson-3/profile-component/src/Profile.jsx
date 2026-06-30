import moment from 'moment';
import React from 'react';

const formatDate = date => moment(date).format('DD MMM YY');

const Profile = (props) => {

  return (
    <React.Fragment>
      <div className='profile'>
        <div className="profile__name">
          {props.userData.firstName} {props.userData.lastName}
        </div>
        <div className='profile__birth'>
          Was born {formatDate(props.userData.birthDate)} in {props.userData.birthPlace}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Profile;