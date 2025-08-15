import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Text, Divider } from 'react-native-paper';
import { TEXT_STRING } from '../../../constants';
import { styles } from '../../../shared';

export type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  website?: string;
  address?: {
    city: string;
  };
  company?: {
    name: string;
  };
  username: string;
};

type UserProps = {
  user: User;
};

const ListItems: React.FC<UserProps> = ({ user }) => {
  return (
    <Card mode="elevated" style={localStyles.cardStyle}>
      <Card.Content>
        <Text variant="titleMedium" style={localStyles.title}>
          {user.name}
        </Text>
        <Divider style={localStyles.divider} />

        <View style={localStyles.infoBlock}>
          <Text style={localStyles.label}>{TEXT_STRING.EMAIL}</Text>
          <Text style={localStyles.value}>{user.email}</Text>
        </View>

        <View style={localStyles.infoBlock}>
          <Text style={localStyles.label}>{TEXT_STRING.CITY}</Text>
          <Text style={localStyles.value}>{user.address?.city || '-'}</Text>
        </View>

        <View style={localStyles.infoBlock}>
          <Text style={localStyles.label}>{TEXT_STRING.COMPANY}</Text>
          <Text style={localStyles.value}>{user.company?.name || '-'}</Text>
        </View>

        <View style={localStyles.infoBlock}>
          <Text style={localStyles.label}>{TEXT_STRING.PHONE}</Text>
          <Text style={localStyles.value}>{user.phone}</Text>
        </View>

        <View style={localStyles.infoBlock}>
          <Text style={localStyles.label}>{TEXT_STRING.WEBSITE}</Text>
          <Text style={localStyles.value}>{user.website || '-'}</Text>
        </View>
      </Card.Content>
    </Card>
  );
};

const localStyles = StyleSheet.create({
  cardStyle: {
    ...styles.marginBottom.mb12,
    ...styles.marginHorizontal.mh10,
    borderRadius: 8,
    elevation: 3,
  },
  title: [
    styles.fontWeight.bold,
    styles.marginBottom.mb8,
  ],
  divider: [
    styles.marginVertical.mv8,
  ],
  infoBlock: [
    styles.marginBottom.mb8,
  ],
  label: [
    styles.fontSize.fs12,
    styles.colorObject.grey,
  ],
  value: [
    styles.fontSize.fs14,
    styles.colorObject.black,
  ],
});

export default ListItems;
