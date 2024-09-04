import React from 'react';

export default function PostABlog() {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    
  };
  return (
    <form
      className='max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md space-y-6'
      //   onSubmit={handleSubmit}
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
          //   value={formData.title}
          //   onChange={handleChange}
          className='mt-1 p-2 border border-gray-300 rounded-md'
          required
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
          //   value={formData.description}
          //   onChange={handleChange}
          className='mt-1 p-2 border border-gray-300 rounded-md'
        />
      </div>

      <div className='flex flex-col'>
        <label htmlFor='body' className='text-blue-900 font-semibold'>
          Body
        </label>
        <textarea
          id='body'
          name='body'
          //   value={formData.body}
          //   onChange={handleChange}
          className='mt-1 p-2 border border-gray-300 rounded-md'
          rows={6}
          required
        />
      </div>

      <div className='flex items-center'>
        <input
          type='checkbox'
          id='published'
          name='published'
          //   checked={formData.published}
          //   onChange={handleChange}
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
