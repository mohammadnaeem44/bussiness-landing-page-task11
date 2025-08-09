const products = [
  { name: 'Starter Plan', price: '$19/mo', desc: 'Great for individuals and small projects.' },
  { name: 'Growth Plan', price: '$49/mo', desc: 'Best for growing teams and startups.' },
  { name: 'Business Plan', price: '$99/mo', desc: 'Advanced features for established businesses.' },
]

export default function ProductShowcase() {
  return (
    <section id="get-started" className="bg-gray-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-base font-semibold leading-7 text-blue-600">Product</h1>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Choose the plan that fits your needs
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Simple, transparent pricing. No hidden fees.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {products.map((p) => (
            <div key={p.name} className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
              <div>
                <h3 className="text-lg font-semibold leading-7 text-gray-900">{p.name}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{p.desc}</p>
              </div>
              <div className="mt-6">
                <div className="text-3xl font-bold text-gray-900">{p.price}</div>
                <a href="#" className="mt-4 inline-flex w-full items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                  Start now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


