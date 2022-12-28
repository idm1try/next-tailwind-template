const Home = () => (
  <div>
    <div className='animate-in'>
      <h1 className='mb-5 text-4xl font-bold'>
        Next.js + TailwindCSS template
      </h1>
      <p className='mb-5 text-neutral-600 dark:text-neutral-400'>
        Edit src/pages/index.tsx to get started.
      </p>
    </div>
    <div className='animate-in' style={{ '--index': 1 } as React.CSSProperties}>
      <a
        className='underlined'
        href='https://github.com/idm1try/next-tailwind-template'
      >
        Source Code
      </a>
    </div>
  </div>
)

export default Home
