import React from 'react';
import { Card as ChakraCard } from '@chakra-ui/react';

interface ICardProps {
  children: React.ReactNode;
}

const Card = ({ children }: ICardProps) => {
  return <ChakraCard className='rounded-full overflow-hidden'>{children}</ChakraCard>;
};

export default Card;
