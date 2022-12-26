import Head from "next/head"
import Layout from "../components/Layout";
import { getSortedPostsData } from '../lib/posts';
import styles from "../styles/blog.module.css";
import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <Layout home>
        {/* Keep the existing code here */}
        <h1>hello</h1>
        {/* Add this <section> tag below the existing <section> tag */}
        <section className={`${styles.headingMd} ${styles.padding1px}`}>
          <h1 className={styles['header']}>Welcome to my blog</h1>
          <p className={styles['subtitle']}>This is a subtitle idk what to type here</p>
          <ul className={styles['blog-list']}>
            {blogs.map(blog => (
              <li key={blog.slug}>
                <Link href={`/blog/${blog.slug}`}>
                  {blog.date}:{blog.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  // List of files in blgos folder
  const filesInBlogs = fs.readdirSync('./content/blogs')

  // Get the front matter and slug (the filename without .md) of all files
  const blogs = filesInBlogs.map(filename => {
    const file = fs.readFileSync(`./content/blogs/${filename}`, 'utf8')
    const matterData = matter(file)

    return {
      ...matterData.data, // matterData.data contains front matter
      slug: filename.slice(0, filename.indexOf('.'))
    }
  })

  return {
    props: {
      blogs
    }
  }

}
