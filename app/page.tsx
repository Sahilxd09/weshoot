import Image from "next/image"
import { Play, Instagram, Mail, Phone, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section - Full-screen with parallax effect */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10" /> {/* Darker overlay for better text contrast */}
          <Image
            src="/images/hero.jpg"
            alt="Cinematic sunset with person on rock"
            fill
            className="object-cover scale-110 animate-slow-zoom"
            priority
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-start">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tight leading-tight">
              We<span className="text-amber-400">Shoot</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mb-8 text-gray-200 font-light">
              Capturing moments. Creating memories. <br />
              <span className="text-amber-400 font-normal">Crafting cinematic magic.</span>
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-amber-400 text-black hover:bg-amber-300 flex items-center gap-2 rounded-full px-6 py-6">
                <Play size={18} />
                Watch Showreel
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 rounded-full px-6 py-6">
                Explore Our Work
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 z-10 flex justify-center animate-bounce">
          <ChevronDown size={32} className="text-white/70" />
        </div>
      </section>

      {/* Featured Work - Horizontal Scrolling Gallery */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4 mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-2">
            Featured <span className="text-amber-400">Work</span>
          </h2>
          <p className="text-zinc-400 text-lg">Our latest cinematic creations</p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex gap-4 pb-8 overflow-x-auto snap-x snap-mandatory hide-scrollbar">
            <div className="snap-center shrink-0 w-[90vw] md:w-[40vw] h-[60vh] relative rounded-xl overflow-hidden group first:ml-4 last:mr-4">
              <Image
                src="/images/gallery1.jpg"
                alt="Sunset silhouettes"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold mb-2">Golden Hour</h3>
                <p className="text-gray-300 mb-4">Wedding Photography</p>
                <Button
                  variant="outline"
                  className="w-max border-amber-400 text-amber-400 hover:bg-amber-400/10 rounded-full"
                >
                  View Project
                </Button>
              </div>
            </div>

            <div className="snap-center shrink-0 w-[90vw] md:w-[40vw] h-[60vh] relative rounded-xl overflow-hidden group">
              <Image
                src="/images/gallery2.jpg"
                alt="Person on rock at sunset"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold mb-2">River Sunset</h3>
                <p className="text-gray-300 mb-4">Portrait Session</p>
                <Button
                  variant="outline"
                  className="w-max border-amber-400 text-amber-400 hover:bg-amber-400/10 rounded-full"
                >
                  View Project
                </Button>
              </div>
            </div>

            <div className="snap-center shrink-0 w-[90vw] md:w-[40vw] h-[60vh] relative rounded-xl overflow-hidden group">
              <Image
                src="/images/gallery3.jpg"
                alt="Person in field with mountains"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold mb-2">Mountain View</h3>
                <p className="text-gray-300 mb-4">Travel Photography</p>
                <Button
                  variant="outline"
                  className="w-max border-amber-400 text-amber-400 hover:bg-amber-400/10 rounded-full"
                >
                  View Project
                </Button>
              </div>
            </div>

            <div className="snap-center shrink-0 w-[90vw] md:w-[40vw] h-[60vh] relative rounded-xl overflow-hidden group">
              <Image
                src="/images/gallery4.jpg"
                alt="Person in golden field"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold mb-2">Golden Fields</h3>
                <p className="text-gray-300 mb-4">Cinematic Short Film</p>
                <Button
                  variant="outline"
                  className="w-max border-amber-400 text-amber-400 hover:bg-amber-400/10 rounded-full"
                >
                  View Project
                </Button>
              </div>
            </div>

            <div className="snap-center shrink-0 w-[90vw] md:w-[40vw] h-[60vh] relative rounded-xl overflow-hidden group">
              <Image
                src="/images/gallery5.jpg"
                alt="Person walking in field"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold mb-2">Wanderer</h3>
                <p className="text-gray-300 mb-4">Music Video</p>
                <Button
                  variant="outline"
                  className="w-max border-amber-400 text-amber-400 hover:bg-amber-400/10 rounded-full"
                >
                  View Project
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Split with Image */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block mb-4 px-4 py-1 bg-amber-400/10 rounded-full text-amber-400 text-sm font-medium">
                About Us
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Cinematic <span className="text-amber-400">Excellence</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                At WeShoot, we are experts in shooting and editing cinematic videos and photos that tell your story with
                style and emotion.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                Our team combines technical expertise with creative vision to deliver stunning visual content that
                captivates and inspires.
              </p>
              <Button className="bg-amber-400 text-black hover:bg-amber-300 rounded-full px-6 py-6">
                Our Portfolio
              </Button>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/gallery3.jpg"
                  alt="Person in field with mountains"
                  fill
                  className="object-cover"
                />
              </div>
              <div
                className="absolute -bottom-10 -left-10 w-48 h-48 bg-amber-400 rounded-2xl hidden md:block"
                style={{ zIndex: -1 }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Modern Cards */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1 bg-amber-400/10 rounded-full text-amber-400 text-sm font-medium">
              Our Services
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              What We <span className="text-amber-400">Offer</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Professional cinematic services tailored to your unique vision and requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-2xl border border-zinc-800 hover:border-amber-400/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-amber-400/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-400/20 transition-colors duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-amber-400"
                >
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Wedding Cinematography</h3>
              <p className="text-gray-400 mb-6">
                Capture your special day with our cinematic approach, creating a timeless memory you'll cherish forever.
              </p>
              <div className="flex justify-between items-center">
                <p className="font-semibold text-amber-400">From ₹5,000</p>
                <Button variant="ghost" className="text-white hover:text-amber-400 p-0 hover:bg-transparent">
                  Learn more →
                </Button>
              </div>
            </div>

            <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-2xl border border-zinc-800 hover:border-amber-400/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-amber-400/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-400/20 transition-colors duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-amber-400"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="10 8 16 12 10 16 10 8" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Music Videos</h3>
              <p className="text-gray-400 mb-6">
                Professional music video production with creative direction and high-quality cinematography.
              </p>
              <div className="flex justify-between items-center">
                <p className="font-semibold text-amber-400">From ₹10,000</p>
                <Button variant="ghost" className="text-white hover:text-amber-400 p-0 hover:bg-transparent">
                  Learn more →
                </Button>
              </div>
            </div>

            <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-2xl border border-zinc-800 hover:border-amber-400/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-amber-400/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-400/20 transition-colors duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-amber-400"
                >
                  <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                  <path d="M9 18h6" />
                  <path d="M10 22h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Event Coverage</h3>
              <p className="text-gray-400 mb-6">
                Comprehensive event coverage with multiple camera setups and professional editing.
              </p>
              <div className="flex justify-between items-center">
                <p className="font-semibold text-amber-400">From ₹2,000</p>
                <Button variant="ghost" className="text-white hover:text-amber-400 p-0 hover:bg-transparent">
                  Learn more →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <Image
            src="/images/gallery2.jpg"
            alt="Background texture"
            fill
            className="object-cover"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1 bg-amber-400/10 rounded-full text-amber-400 text-sm font-medium">
              Testimonials
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              What Our <span className="text-amber-400">Clients Say</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-zinc-900/50 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-zinc-800">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                  <div className="w-full h-full bg-amber-400/20 flex items-center justify-center text-amber-400 text-2xl font-bold">
                    RK
                  </div>
                </div>
                <div>
                  <svg
                    width="120"
                    height="24"
                    viewBox="0 0 120 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mb-4"
                  >
                    <path
                      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                      fill="#FCD34D"
                    />
                    <path
                      d="M36 2L39.09 8.26L46 9.27L41 14.14L42.18 21.02L36 17.77L29.82 21.02L31 14.14L26 9.27L32.91 8.26L36 2Z"
                      fill="#FCD34D"
                    />
                    <path
                      d="M60 2L63.09 8.26L70 9.27L65 14.14L66.18 21.02L60 17.77L53.82 21.02L55 14.14L50 9.27L56.91 8.26L60 2Z"
                      fill="#FCD34D"
                    />
                    <path
                      d="M84 2L87.09 8.26L94 9.27L89 14.14L90.18 21.02L84 17.77L77.82 21.02L79 14.14L74 9.27L80.91 8.26L84 2Z"
                      fill="#FCD34D"
                    />
                    <path
                      d="M108 2L111.09 8.26L118 9.27L113 14.14L114.18 21.02L108 17.77L101.82 21.02L103 14.14L98 9.27L104.91 8.26L108 2Z"
                      fill="#FCD34D"
                    />
                  </svg>
                  <p className="text-xl md:text-2xl text-gray-200 italic mb-6">
                    "WeShoot transformed our wedding day into a cinematic masterpiece. The attention to detail and
                    creative vision exceeded our expectations. We couldn't be happier with the results!"
                  </p>
                  <div>
                    <h4 className="font-bold text-lg">Rahul & Kiran</h4>
                    <p className="text-gray-400">Wedding Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - Modern Cards */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1 bg-amber-400/10 rounded-full text-amber-400 text-sm font-medium">
              Pricing
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Our <span className="text-amber-400">Packages</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Flexible pricing options to suit your project needs and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-2xl border border-zinc-800 hover:border-amber-400/50 transition-all duration-300 group">
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">Basic</h3>
                <p className="text-gray-400">Perfect for small events</p>
              </div>
              <div className="mb-6">
                <p className="text-4xl font-bold">₹2,000</p>
                <p className="text-gray-400">Starting price</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-amber-400 mr-2 flex-shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>2 hours of shooting</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-amber-400 mr-2 flex-shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Basic editing</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-amber-400 mr-2 flex-shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>10 edited photos</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-amber-400 mr-2 flex-shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Digital delivery</span>
                </li>
              </ul>
              <Button className="w-full rounded-full bg-zinc-800 hover:bg-zinc-700 text-white">Book Now</Button>
            </div>

            <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-2xl border border-amber-400 relative transform hover:scale-105 transition-all duration-300 group">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-amber-400 text-black px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">Premium</h3>
                <p className="text-gray-400">Ideal for weddings & events</p>
              </div>
              <div className="mb-6">
                <p className="text-4xl font-bold">₹10,000</p>
                <p className="text-gray-400">Starting price</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-amber-400 mr-2 flex-shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Full day shooting</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-amber-400 mr-2 flex-shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Professional editing</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-amber-400 mr-2 flex-shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>50 edited photos</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-amber-400 mr-2 flex-shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>5-minute highlight video</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-amber-400 mr-2 flex-shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Online gallery</span>
                </li>
              </ul>
              <Button className="w-full rounded-full bg-amber-400 hover:bg-amber-300 text-black">Book Now</Button>
            </div>

            <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-2xl border border-zinc-800 hover:border-amber-400/50 transition-all duration-300 group">
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">Deluxe</h3>
                <p className="text-gray-400">For premium productions</p>
              </div>
              <div className="mb-6">
                <p className="text-4xl font-bold">₹20,000</p>
                <p className="text-gray-400">Starting price</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-amber-400 mr-2 flex-shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Multiple day shooting</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-amber-400 mr-2 flex-shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Premium cinematic editing</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-amber-400 mr-2 flex-shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>100+ edited photos</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-amber-400 mr-2 flex-shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>15-minute feature film</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-amber-400 mr-2 flex-shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Drone footage included</span>
                </li>
              </ul>
              <Button className="w-full rounded-full bg-zinc-800 hover:bg-zinc-700 text-white">Book Now</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Split with Image */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/gallery5.jpg"
                  alt="Person walking in field"
                  fill
                  className="object-cover"
                />
              </div>
              <div
                className="absolute -bottom-10 -right-10 w-48 h-48 bg-amber-400 rounded-2xl hidden md:block"
                style={{ zIndex: -1 }}
              ></div>
            </div>

            <div>
              <div className="inline-block mb-4 px-4 py-1 bg-amber-400/10 rounded-full text-amber-400 text-sm font-medium">
                Contact Us
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Get In <span className="text-amber-400">Touch</span>
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Ready to create cinematic magic together? Reach out to us for bookings and inquiries.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="bg-amber-400/10 text-amber-400 p-3 rounded-full">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-lg">sahilahmed091230@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-amber-400/10 text-amber-400 p-3 rounded-full">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="text-lg">7896142781</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-amber-400/10 text-amber-400 p-3 rounded-full">
                    <Instagram size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Instagram</p>
                    <p className="text-lg">@shayrisoul09</p>
                  </div>
                </div>
              </div>

              <Link href="https://instagram.com/shayrisoul09" target="_blank" rel="noopener noreferrer">
                <Button className="w-full rounded-full bg-amber-400 hover:bg-amber-300 text-black">
                  Follow Us on Instagram
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-zinc-950 border-t border-zinc-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-2">
                We<span className="text-amber-400">Shoot</span>
              </h2>
              <p className="text-gray-400">Let's create cinematic magic together</p>
            </div>
            <div className="flex space-x-6">
              <a
                href="https://instagram.com/shayrisoul09"
                className="text-gray-400 hover:text-amber-400 transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="mailto:sahilahmed091230@gmail.com"
                className="text-gray-400 hover:text-amber-400 transition-colors"
              >
                <Mail size={24} />
              </a>
              <a href="tel:7896142781" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Phone size={24} />
              </a>
            </div>
          </div>

          <div className="border-t border-zinc-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm mb-4 md:mb-0">
                © {new Date().getFullYear()} WeShoot. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-500 hover:text-white text-sm">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-500 hover:text-white text-sm">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

