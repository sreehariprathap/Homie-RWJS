import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />

      <h1 className="font-light antialiased text-center text-2xl mb-2">
        Hey There !
      </h1>
      <p className="font-light antialiased text-center text-sm mb-2">
        This is a simple blog app built with RedwoodJS. It's a work in progress,
        so please be patient. <br /> you can checkout the repo from here:
        <a
          href="https://github.com/sreehariprathap/Homie-RWJS"
          className="text-blue-500 font-medium"
        >
          {' '}
          Homie App
        </a>
        <br />
        <br />
        With love and support,
        <br />
        <span className="font-medium text-transparent text-xl bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">
          Sreehari Prathap
        </span>
        <div className="flex flex-row justify-center p-3">
          <a href="https://github.com/sreehariprathap">
            <img
              src="https://img.icons8.com/fluency/48/undefined/github.png"
              className="w-7"
            />
          </a>
          <a href="https://www.linkedin.com/in/sreehari-prathap/">
            <img
              src="https://img.icons8.com/fluency/48/undefined/linkedin.png"
              className="w-7"
            />
          </a>
          <a href="https://www.instagram.com/_sreehari_prathap_/">
            <img
              src="https://img.icons8.com/fluency/48/undefined/instagram-new.png"
              className="w-7"
            />
          </a>
        </div>
      </p>
    </>
  )
}

export default AboutPage
