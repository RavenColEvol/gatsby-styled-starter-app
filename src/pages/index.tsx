import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Layout } from "../ui/layouts"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      Index Page
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
