/* eslint-disable react/react-in-jsx-scope */
import {View, Text} from 'react-native';

const Profile = (userInfo: any) => {
  return (
    <View>
      <Text>Hi {userInfo.email}</Text>
    </View>
  );
};

export default Profile;
