'use client';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import getArticles from './utils/getArticles';
import Post from './componenets/Post';
import Navbar from './componenets/Navbar';
import LoginModal from './componenets/LoginModal';

type Post = {
  authorId: string | null;
  body: string;
  createdAt: string;
  description: string;
  id: number;
  published: boolean;
  title: string;
  updatedAt: string;
};

export default function Home() {
  const [open, setOpen] = useState(false);
  const { data, isLoading, isError } = useQuery({
    queryFn: getArticles,
    queryKey: ['articles'],
  });

  return (
    <div className='mx-auto max-w-7xl sm:px-6 lg:px-8 bg-white'>
      <Navbar setOpen={setOpen} />
      <div className='mx-auto max-w-3xl'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl '>
            <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center'>
              Latest Articles
            </h2>
            <p className='mt-2 text-lg leading-8 text-gray-600 text-center'>
              Explore our collection of insightful articles.
            </p>
            {open && <LoginModal open={open} setOpen={setOpen} />}
            <div className='mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 bg-white'>
              {data?.map((post: Post) => (
                <Post key={data.id} post={post} isLoading={isLoading} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
