// src/components/ListItems.tsx
import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';
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
        <Card style={localStyles.cardStyle}>
            <Card.Content>
                <Text style={localStyles.title}>{user.name}</Text>
                <Text>{TEXT_STRING.EMAIL}: {user.email}</Text>
                <Text>{TEXT_STRING.CITY}: {user.address?.city}</Text>
                <Text>{TEXT_STRING.COMPANY}: {user.company?.name}</Text>
                <Text>{TEXT_STRING.PHONE}: {user.phone}</Text>
                <Text>{TEXT_STRING.WEBSITE}: {user.website}</Text>
            </Card.Content>
        </Card>
    );
};

const localStyles = StyleSheet.create({
    cardStyle: [
        styles.marginBottom.mb12,
        styles.marginHorizontal.mh10
    ],
    title: [
        styles.fontWeight.bold,
        styles.marginBottom.mb4,
        styles.fontSize.fs16,
    ],
});

export default ListItems;
