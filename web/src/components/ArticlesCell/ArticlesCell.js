import Article from 'src/components/Article'
import { Link, routes } from '@redwoodjs/router'

export const QUERY = gql`
  query ArticlesQuery {
    articles: posts {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <>
      <div className="flex flex-col justify-center">
        <div className="text-center text-gray-500 pb-5">No Articles yet</div>
        <Link
          className="text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded hover:text-white transition duration-100 rounded"
          to={routes.contact()}
        >
          Create A Post
        </Link>
      </div>
    </>
  )
}

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ articles }) => {
  return (
    <div className="space-y-10">
      {articles.map((article) => (
        <Article article={article} key={article.id} summary={true} />
      ))}
    </div>
  )
}
