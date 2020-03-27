import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

function Comments () {
  return <div>Comments</div>
}

function History () {
  return <div>History</div>
}

function renderSection (name) {
  switch (name) {
    case 'comments':
      return <Comments />
      break
    case 'history':
      return <History />
      break
    default:
      return null
      break
  }
}
export default function Article () {
  const { query = {} } = useRouter()
  const [id, section] = query.all || []

  return (
    <div>
      <h2>Article #{id}</h2>
      <Link href='/article/[...all]' as='/article/1/comments'>
        <a>Comments</a>
      </Link>
      <Link href='/article/[...all]' as='/article/1/history'>
        <a>History</a>
      </Link>
      {renderSection(section)}
    </div>
  )
}
