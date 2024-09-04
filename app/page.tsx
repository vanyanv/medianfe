'use client';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import getArticles from './utils/getArticles';
import Post from './componenets/Post';
import Navbar from './componenets/Navbar';
import Modal from './componenets/Modal';
import ArticleLoader from './componenets/ArticleLoader';
import Login from './componenets/Login';
import PostABlog from './componenets/PostABlog';

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
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [postModalOpen, setPostModalOpen] = useState(false);
  const { data, isLoading } = useQuery({
    queryFn: getArticles,
    queryKey: ['articles'],
  });

  return (
    <div className='min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 text-gray-800'>
      <Navbar setOpen={setLoginModalOpen} />
      <header className='text-center py-12'>
        <h1 className='text-5xl font-extrabold text-blue-900'>
          Welcome to OwlBlog
        </h1>
        <p className='mt-4 text-xl text-blue-700'>
          Explore articles crafted for wisdom seekers.
        </p>
        <button
          onClick={() => setPostModalOpen(true)}
          className='mt-8 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-200'
        >
          Add New Post
        </button>
      </header>

      {loginModalOpen && (
        <Modal open={loginModalOpen} setOpen={setLoginModalOpen}>
          <Login />
        </Modal>
      )}

      {postModalOpen && (
        <Modal open={postModalOpen} setOpen={setPostModalOpen}>
          <PostABlog />
        </Modal>
      )}

      <div className='flex flex-col items-center justify-center container mx-auto mt-10 space-y-16 px-4'>
        <h2 className='text-3xl font-bold text-blue-900 text-center'>
          Latest Articles
        </h2>
        {isLoading ? (
          <ArticleLoader />
        ) : (
          data?.map((post: Post) => (
            <Post key={post.id} post={post} isLoading={isLoading} />
          ))
        )}
      </div>
    </div>
  );
}
