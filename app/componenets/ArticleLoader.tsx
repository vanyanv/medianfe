import React from 'react';
import { motion } from 'framer-motion';

export default function ArticleLoader() {
  return (
    <div className='mx-auto h-full max-w-7xl sm:px-6 lg:px-8'>
      <div className='space-y-16'>
        {/* Skeleton article loader repeated to fill space */}
        {[...Array(3)].map((_, index) => (
          <motion.article
            key={index}
            className='flex max-w-xl flex-col items-start justify-between p-4 bg-gray-300 shadow-lg rounded-lg mx-auto'
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          >
            <div className='flex items-center gap-x-4 text-xs'>
              <div className='h-4 w-16 bg-gray-400 rounded'></div>
              <div className='h-6 w-24 bg-gray-400 rounded-full'></div>
            </div>
            <div className='group relative mt-3 w-full'>
              <div className='h-6 w-3/4 bg-gray-400 rounded mb-2'></div>
              <div className='h-4 w-full bg-gray-400 rounded mb-2'></div>
              <div className='h-4 w-5/6 bg-gray-400 rounded'></div>
            </div>
            <div className='relative mt-8 flex items-center gap-x-4'>
              <div className='h-10 w-10 rounded-full bg-gray-400'></div>
              <div className='flex flex-col space-y-2'>
                <div className='h-4 w-24 bg-gray-400 rounded'></div>
                <div className='h-4 w-16 bg-gray-400 rounded'></div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
