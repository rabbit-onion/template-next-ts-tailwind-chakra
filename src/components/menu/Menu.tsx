import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, Menu as CustomMenu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

// 객체 타입 정의
interface IMenuItem {
  label: string;
  onClick: () => void;
}

interface IMenuProps {
  buttonText: ReactNode;
  items: IMenuItem[]; // 객체 배열
  variant?: string;
}

const Menu = ({ buttonText, items, variant }: IMenuProps) => {
  return (
    <CustomMenu>
      <MenuButton as={Button} rightIcon={typeof buttonText === 'string' ? <ChevronDownIcon /> : undefined} variant={variant}>
        {buttonText}
      </MenuButton>
      <MenuList>
        {items.map((item, index) => (
          <MenuItem key={index} onClick={item.onClick}>
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </CustomMenu>
  );
};

export default Menu;
