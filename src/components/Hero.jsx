import { useState, useEffect } from "react";

export default function Hero() {
  // Direct Unsplash business/web development images
  const images = [
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?w=800&h=600&fit=crop"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // change every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Text Section */}
          <div>
            <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-200">
              New
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Professional Web Development Solutions
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Computer Systems Engineer specializing in modern web applications.
              From concept to deployment, I build scalable, secure, and
              high-performance web solutions for your business.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <a
                href="#get-started"
                className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Get Started
              </a>
              <a
                href="#learn-more"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more →
              </a>
            </div>
          </div>

          {/* Right Image Carousel */}
          <div className="relative overflow-hidden rounded-2xl shadow-lg h-[350px]">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-full flex-shrink-0 object-cover h-[350px]"
                />
              ))}
            </div>

            {/* Optional Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-3 w-3 rounded-full transition-all ${
                    currentIndex === i ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
