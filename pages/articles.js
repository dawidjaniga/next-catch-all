import React from 'react'
import Link from 'next/link'

export default function () {
  return (
    <div>
      <h1>Articles</h1>
      <ul>
        <li>
          <Link href='/article/[...all]' as='/article/1'>
            <a>Lorem ipsum</a>
          </Link>
          <Link href='/article/[...all]' as='/article/1/comments'>
            <a>Comments</a>
          </Link>
          <Link href='/article/[...all]' as='/article/1/history'>
            <a>History</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}
