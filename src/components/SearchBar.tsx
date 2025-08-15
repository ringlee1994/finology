import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { styles } from '../shared';
import { TEXT_STRING } from '../constants';

type SearchBarProps = {
    value: string;
    onChange: (query: string) => void;
    placeholder?: string;
    style?: StyleProp<ViewStyle>;
    inputStyle?: StyleProp<ViewStyle>;
    placeholderTextColor?: string;
    iconColor?: string;
};

const SearchBar: React.FC<SearchBarProps> = ({
    value,
    onChange,
    placeholder = TEXT_STRING.SEARCH,
    style,
    inputStyle,
    placeholderTextColor = styles.color.grey,
    iconColor = styles.color.grey,
}) => {
    return (
        <Searchbar
            placeholder={placeholder}
            onChangeText={onChange}
            value={value}
            style={[styles.margin.m20, style]}
            inputStyle={[styles.colorObject.grey, inputStyle]}
            placeholderTextColor={placeholderTextColor}
            iconColor={iconColor}
        />
    );
};

export default SearchBar;
