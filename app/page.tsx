'use client';
import { useQuery } from '@tanstack/react-query';
import getArticles from './utils/getArticles';
import Post from './componenets/Post';
export default function Home() {
  const { data, isLoading, isError } = useQuery({
    queryFn: getArticles,
    queryKey: ['articles'],
  });

  console.log(data);
  return (
    <div className='bg-white py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            From the blog
          </h2>
          <p className='mt-2 text-lg leading-8 text-gray-600'>
            Learn how to grow your business with our expert advice.
          </p>
          <div className='mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16'>
            {data?.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
