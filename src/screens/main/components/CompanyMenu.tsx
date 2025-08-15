// src/screens/Main/components/CompanyMenu.tsx
import React from 'react';
import { Menu, Button } from 'react-native-paper';
import { TEXT_STRING } from '../../../constants';

type Props = {
  options: string[];
  selected: string;
  setSelected: (value: string) => void;
  visible: boolean;
  setVisible: (value: boolean) => void;
};

const CompanyMenu: React.FC<Props> = ({ options, selected, setSelected, visible, setVisible }) => {
  return (
    <Menu
      visible={visible}
      onDismiss={() => setVisible(false)}
      anchor={
        <Button mode="outlined" onPress={() => setVisible(true)}>
          {selected || TEXT_STRING.FILTER_COMPANY}
        </Button>
      }
    >
      {options.map((company, idx) => (
        <Menu.Item
          key={idx}
          onPress={() => {
            setSelected(company);
            setVisible(false);
          }}
          title={company}
        />
      ))}
    </Menu>
  );
};

export default CompanyMenu;
