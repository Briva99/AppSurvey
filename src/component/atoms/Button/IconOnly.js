import React from 'react';
import {TouchableOpacity} from 'react-native';
import {IconBackDark} from '../../../assets';

const IconOnly = ({onPress}) => {
  const Icon = () => {
    if (typeof icon === 'back-dark') {
      return <IconBackDark />;
    }

    if (typeof icon === 'back-light') {
      return <IconBackDark />;
    }

    return <IconBackDark />;
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default IconOnly;
