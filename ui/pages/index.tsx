import * as React from 'react'
import Layout from '../components/MyLayout'
import Link from 'next/link'

const PostLink: React.FC<{
  title: string
  id: string
}> = props => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

const Index: React.FC<{}> = () => (
  <Layout>
    <p>Hello Next.js</p>
    <ul>
      <PostLink title="Hello Next.js" id={'hello-next-js'} />
      <PostLink title="ASDF" id={'ASDF'} />
      <PostLink title="Example Link" id={'example-link'} />
    </ul>
  </Layout>
)

export default Index
