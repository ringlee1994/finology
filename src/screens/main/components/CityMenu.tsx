import React from 'react';
import { Menu, Button } from 'react-native-paper';
import { TEXT_STRING } from '../../../constants';

type Props = {
  options: string[];
  selected: string;
  setSelected: (value: string) => void;
  visible: boolean;
  setVisible: (val: boolean) => void;
};

const CityMenu: React.FC<Props> = ({ options, selected, setSelected, visible, setVisible }) => {
  return (
    <Menu
      visible={visible}
      onDismiss={() => setVisible(false)}
      anchor={
        <Button mode="outlined" onPress={() => setVisible(true)}>
          {selected || TEXT_STRING.FILTER_CITY}
        </Button>
      }
    >
      {options.map((city, idx) => (
        <Menu.Item
          key={idx}
          onPress={() => {
            setSelected(city);
            setVisible(false);
          }}
          title={city}
        />
      ))}
    </Menu>
  );
};

export default CityMenu;
