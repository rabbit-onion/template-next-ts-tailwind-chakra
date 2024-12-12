import React from 'react';
import { Avatar, Box, Card } from '@chakra-ui/react';
import Image from 'next/image';
import { Heart } from 'lucide-react';

interface IBlogPostProps {
  isCard?: boolean;
}

const BlogPost = ({ isCard }: IBlogPostProps) => {
  const Wrapper = isCard ? Card : 'div';
  // const wrapperClass = isFeed ? 'bg-black' : '';

  // return <Wrapper className={wrapperClass}>BlogPost</Wrapper>;
  return (
    <Wrapper className='mt-3 mb-10'>
      {/* postBody */}
      <div className='flex flex-col'>
        <Image src='/images/thumb/cider.jpg' alt='' width={300} height={300} className='w-full aspect-video' />
        <div className='p-3 flex flex-col gap-6'>
          <strong className='text-xl line-clamp-2'>
            사이다 귀여워...너무너무 귀여워..... Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error adipisci, natus reprehenderit dolor a dolore veritatis libero magnam eligendi
            cum tenetur tempore vero est provident corrupti aperiam molestiae inventore modi.
          </strong>
          <p className='opacity-60 line-clamp-3 text-sm'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos odit suscipit explicabo culpa quo consequuntur repellat? Sint quo enim animi ut tempore odit incidunt, nesciunt aliquam officiis, cumque officia fugiat. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Similique, error quis nobis sapiente aspernatur nisi consequatur, hic aut repellat dolores animi modi, a perspiciatis architecto unde magni enim cupiditate est.
          </p>
        </div>
      </div>
      {/* postFooter */}
      <div>
        <div className='flex gap-3 text-xs opacity-50 p-3'>
          <div>2024.12.12</div>
          <div>3개의 댓글</div>
        </div>
        <hr />
        <div className='flex justify-between text-xs opacity-50 p-3'>
          <div className='flex items-center gap-2'>
            <div>
              <Avatar size='xs' />
            </div>
            <div>by 노랑피크민</div>
          </div>
          <div className='flex items-center gap-1'>
            <Heart fill='gray-90' size='14px' />
            193
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default BlogPost;
