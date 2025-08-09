export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-200">New</span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Professional Web Development Solutions
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Computer Systems Engineer specializing in modern web applications. From concept to deployment, 
            I build scalable, secure, and high-performance web solutions for your business.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <a href="#get-started" className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Get Started</a>
              <a href="#learn-more" className="text-sm font-semibold leading-6 text-gray-900">Learn more →</a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-tr from-blue-200 via-indigo-200 to-purple-200 shadow-inner" />
            <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-blue-300/30 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-8 -right-8 h-56 w-56 rounded-full bg-purple-300/30 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}


