import React from 'react';
import { motion } from 'framer-motion';
import ArticleLoader from './ArticleLoader';

{
  authorId: null;
  body: 'Content of the first post';
  createdAt: '2024-08-31T03:33:20.377Z';
  description: 'This is the first post';
  id: 1;
  published: true;
  title: 'First Post';
  updatedAt: '2024-08-31T03:33:20.377Z';
}

type PostTypes = {
  post: {
    authorId: string | null;
    body: string;
    createdAt: string;
    description: string;
    id: number;
    published: boolean;
    title: string;
    updatedAt: string;
  };
  isLoading: boolean;
};

export default function Post({ post, isLoading }: PostTypes) {
  // Animation variants for framer-motion
  const variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };
  const { authorId, body, createdAt, description, id, title } = post;

  const randomNumber = Math.floor(Math.random() * (30 - 1 + 1)) + 1;
  const ranadomAvatar = `https://robohash.org/Carvana${randomNumber}?set=set4`;

  const formattedDate = new Date(createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  if (isLoading) return <ArticleLoader />;

  return (
    <motion.article
      key={id}
      className='flex max-w-xl flex-col items-start justify-between p-5 bg-white shadow-lg rounded-lg transform transition duration-300 hover:scale-105'
      initial='hidden'
      animate='visible'
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      <div className='flex items-center gap-x-4 text-xs'>
        <time dateTime={formattedDate} className='text-blue-600'>
          {formattedDate}
        </time>
        <a className='relative z-10 rounded-full bg-blue-50 px-3 py-1.5 font-medium text-blue-600 hover:bg-blue-100'>
          {title}
        </a>
      </div>
      <div className='group relative'>
        <h3 className='mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-blue-600'>
          <a>
            <span className='absolute inset-0' />
            {description}
          </a>
        </h3>
        <p className='mt-5 line-clamp-3 text-sm leading-6 text-gray-700'>
          {body}
        </p>
      </div>
      <div className='relative mt-8 flex items-center gap-x-4'>
        <img
          alt=''
          src={ranadomAvatar}
          className='h-10 w-10 rounded-full border-2 border-blue-600'
        />
        <div className='text-sm leading-6'>
          <p className='font-semibold text-gray-900'>
            <a>
              <span className='absolute inset-0' />
              {authorId}
            </a>
          </p>
        </div>
      </div>
    </motion.article>
  );
}
