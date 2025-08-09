const features = [
  {
    title: 'Fast Performance',
    desc: 'Optimized assets and best practices ensure quick load times.',
    icon: '⚡',
  },
  {
    title: 'Responsive Design',
    desc: 'Looks great on phones, tablets, and desktops.',
    icon: '📱',
  },
  {
    title: 'SEO Friendly',
    desc: 'Semantic markup and performance help you rank better.',
    icon: '🚀',
  },
  {
    title: 'Easy Customization',
    desc: 'Utility-first styling makes iteration fast.',
    icon: '🎨',
  },
  {
    title: 'Accessible',
    desc: 'Built with a11y in mind out of the box.',
    icon: '♿',
  },
  {
    title: 'Built with React',
    desc: 'Composable components that scale with your app.',
    icon: '⚛️',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-base font-semibold leading-7 text-blue-600">Features</h1>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to launch faster
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            A set of thoughtfully designed features to help your business grow.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 sm:gap-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border bg-white p-8 shadow-sm ring-1 ring-gray-200">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-2xl">{f.icon}</div>
              <h3 className="mt-6 text-lg font-semibold leading-7 text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


