import React from 'react'

const CustomerReviewCard = ({review, reviewdBy}) => {
  return (
    <div className='max-w-[350px] h-[300px] border-2 border-primary flex items-center justify-center p-5'>
        <blockquote className="text-2xl text-HigherText tracking-wider">
    <svg className="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
    </svg>
    <div className='flex flex-col gap-8'>
    <p>{review}</p>
    <p>{reviewdBy}</p>
    </div>
</blockquote>
    </div>
  )
}

export default CustomerReviewCard