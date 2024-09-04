import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { z } from 'zod';

// Schema validation from Zod for the form
const postABlogSchema = z.object({
  title: z.string().min(1).max(100),
  description: z.string().min(1).max(100),
  body: z.string().min(1),
  published: z.boolean().optional(),
});

type NewPost = {
  title: string;
  description: string;
  body: string;
  published?: boolean;
};

export default function PostABlog() {
  const { mutate } = useMutation({
    mutationFn: (newPost: NewPost) => {
      return fetch('http://localhost:3000/articles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
      }).then((res) => res.json());
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    const result = postABlogSchema.safeParse({
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      body: formData.get('body') as string,
      published: formData.get('published') === 'on' ? true : undefined,
    });

    if (!result.success) {
      // Handle validation errors appropriately
      console.error(result.error.flatten());
      return;
    }

    console.log(result.data);
    mutate(result.data);
  };

  return (
    <form
      className='max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md space-y-6'
      onSubmit={handleSubmit}
    >
      <h2 className='text-2xl font-bold text-blue-900 text-center'>
        Create New Article
      </h2>

      <div className='flex flex-col'>
        <label htmlFor='title' className='text-blue-900 font-semibold'>
          Title
        </label>
        <input
          type='text'
          id='title'
          name='title'
          className='mt-1 p-2 border border-gray-300 rounded-md text-black'
          required
          maxLength={100}
        />
      </div>

      <div className='flex flex-col'>
        <label htmlFor='description' className='text-blue-900 font-semibold'>
          Description
        </label>
        <input
          type='text'
          id='description'
          name='description'
          className='mt-1 p-2 border border-gray-300 rounded-md text-black'
        />
      </div>

      <div className='flex flex-col'>
        <label htmlFor='body' className='text-blue-900 font-semibold'>
          Body
        </label>
        <textarea
          id='body'
          name='body'
          className='mt-1 p-2 border border-gray-300 rounded-md text-black'
          rows={6}
          required
        />
      </div>

      <div className='flex items-center'>
        <input
          type='checkbox'
          id='published'
          name='published'
          className='mr-2'
        />
        <label htmlFor='published' className='text-blue-900 font-semibold'>
          Published
        </label>
      </div>

      <button
        type='submit'
        className='w-full bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition-colors'
      >
        Submit
      </button>
    </form>
  );
}
