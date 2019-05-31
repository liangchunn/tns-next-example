import * as React from 'react'
import Layout from '../components/MyLayout'
import { withRouter } from 'next/router'

const Content = withRouter<{}, { title: string }>(props => (
  <div>
    <h1>{props.router!.query!.title}</h1>
    <p>This is the blog post content.</p>
  </div>
))

const Page: React.FC<{}> = () => (
  <Layout>
    <Content />
  </Layout>
)

export default Page
