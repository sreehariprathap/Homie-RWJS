import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const SmartHomePage = () => {
  return (
    <>
      <MetaTags title="SmartHome" description="SmartHome page" />

      <div className="flex">
        <div className="shadow-md p-5">
          <h2>Hello</h2>
        </div>
      </div>
    </>
  )
}

export default SmartHomePage
