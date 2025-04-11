import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CategoryCard from '@/components/CategoryCard'
import FeaturedProducts from '@/components/FeaturedProducts'
import HeroSection from '@/components/HeroSection'
import Newsletter from '@/components/Newsletter'

export default function Home() {
  const categories = [
    {
      id: 1,
      name: "Women's Clothing",
      description: "Elegant and timeless pieces for every occasion",
      image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
      slug: "womens-clothing"
    },
    {
      id: 2,
      name: "Books",
      description: "Discover captivating stories and insightful knowledge",
      image: "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
      slug: "books"
    },
    {
      id: 3,
      name: "Furniture",
      description: "Sophisticated designs for your perfect living space",
      image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
      slug: "furniture"
    },
    {
      id: 4,
      name: "Beauty",
      description: "Premium beauty products for your self-care routine",
      image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
      slug: "beauty"
    }
  ];

  return (
    <main>
      <Header />
      
      <HeroSection 
        title="Welcome to Satira's Closet"
        subtitle="Discover luxury in every department"
        ctaText="Shop Now"
        ctaLink="/categories"
        imageSrc="https://images.unsplash.com/photo-1600607687644-c7171b42498f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
      />
      
      <section className="py-16 bg-primary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-primary-900 mb-4">Explore Our Departments</h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">Discover our carefully curated collection of products across various categories.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>
      
      <FeaturedProducts />
      
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-primary-900 mb-6">The Satira's Closet Experience</h2>
            <p className="text-secondary-600 mb-8">
              Step into the digital hallways of our online department store, where luxury meets convenience. 
              Each category offers a unique shopping experience, carefully designed to feel like you're walking 
              through an elegant store from the comfort of your home.
            </p>
            <Link href="/about" className="btn btn-primary">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
      
      <Newsletter />
      
      <Footer />
    </main>
  )
} 