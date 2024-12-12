import React from 'react';
import { CardFooter as CustomCardFooter, Button } from '@chakra-ui/react';
import { EllipsisIcon, Heart, Share } from 'lucide-react';

const CardFooter = () => {
  return (
    <CustomCardFooter
      justify='space-between'
      flexWrap='wrap'
      sx={{
        '& > button': {
          minW: '136px',
        },
      }}
    >
      <Button flex='1' variant='ghost' leftIcon={<Heart />}>
        Like
      </Button>
      <Button flex='1' variant='ghost' leftIcon={<EllipsisIcon />}>
        Comment
      </Button>
      <Button flex='1' variant='ghost' leftIcon={<Share />}>
        Share
      </Button>
    </CustomCardFooter>
  );
};

export default CardFooter;
