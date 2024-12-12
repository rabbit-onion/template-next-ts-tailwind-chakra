'use client';

import Container from '@/components/layout/Container';
import Link from 'next/link';
import { Center, Flex, Spacer } from '@chakra-ui/react';
import { EllipsisVertical } from 'lucide-react';
import Menu from '@/components/menu/Menu';
import BlogPost from '@/components/post/BlogPost';

const periodMenuItems = [
  {
    label: '오늘',
    onClick: () => {
      window.location.href = '/feed';
    },
  },
  {
    label: '이번 주',
    onClick: () => console.log('이번 주'),
  },
  {
    label: '이번 달',
    onClick: () => console.log('이번 달'),
  },
  {
    label: '전체',
    onClick: () => console.log('전체'),
  },
];

const settingMenuItems = [
  {
    label: '공지사항',
    onClick: () => {
      window.location.href = '/notice';
    },
  },
  {
    label: '태그 목록',
    onClick: () => {
      window.location.href = '/tags';
    },
  },
  {
    label: '서비스 정책',
    onClick: () => {
      window.location.href = '/policy';
    },
  },
];

export default function Home() {
  return (
    <div>
      <Container className=''>
        <Flex alignItems='center'>
          <nav>
            {/* <Flex as={"ul"}> */}
            <ul className='flex gap-3'>
              <li>
                <Link href='#'>트렌딩</Link>
              </li>
              <li>
                <Link href='#'>최신</Link>
              </li>
              <li>
                <Link href='#'>피드</Link>
              </li>
            </ul>
            {/* </Flex> */}
          </nav>
          <Spacer />
          <div>
            <Menu buttonText='이번 주' items={periodMenuItems} />
            <Menu buttonText={<EllipsisVertical />} items={settingMenuItems} variant='ghost' />
          </div>
        </Flex>

        {/* BlogPost component */}
        <BlogPost isCard />
        <BlogPost />
      </Container>
    </div>
  );
}
