import Head from 'next/head'
import { posts } from '../content/posts.json'

export default function Home() {
  return (
    <div className='flex flex-col items-center'>
      <Head>
        <title>NextJS + Netlify CMS + TailwindCSS</title>
      </Head>
      <p className='font-bold text-lg p-10'>Example Blog</p>
      <div className='flex flex-col items-center'>
        {posts.map((post, i) => {
          return (
            <div
              key={i}
              className='flex flex-col items-center my-10 w-1/2 shadow rounded-sm p-8'
            >
              <p className='font-bold'>{post.title}</p>
              <p className='text-center text-sm my-4'>{post.description}</p>

              <img className='mx-4 rounded-sm' src={`${post.image}`} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
