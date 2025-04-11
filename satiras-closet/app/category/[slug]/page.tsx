import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

// Mock categories data
const categories = {
  'womens-clothing': {
    name: "Women's Clothing",
    description: "Discover our collection of elegant and timeless pieces for every occasion.",
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
  },
  'books': {
    name: "Books",
    description: "Explore our curated selection of captivating stories and insightful knowledge.",
    image: "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
  },
  'furniture': {
    name: "Furniture",
    description: "Transform your living spaces with our sophisticated furniture designs.",
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
  },
  'beauty': {
    name: "Beauty",
    description: "Elevate your self-care routine with our premium beauty products.",
    image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
  }
};

// Mock products data by category
const productsByCategory = {
  'womens-clothing': [
    {
      id: 1,
      name: 'Silk Midi Dress',
      price: '$189.00',
      image: 'https://images.unsplash.com/photo-1551803091-e20673f15770?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
      slug: 'silk-midi-dress'
    },
    {
      id: 2,
      name: 'Cashmere Sweater',
      price: '$159.00',
      image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
      slug: 'cashmere-sweater'
    },
    {
      id: 3,
      name: 'Tailored Blazer',
      price: '$229.00',
      image: 'https://images.unsplash.com/photo-1520413624224-91d4554076a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      slug: 'tailored-blazer'
    },
    {
      id: 4,
      name: 'Pleated Skirt',
      price: '$129.00',
      image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
      slug: 'pleated-skirt'
    },
    {
      id: 5,
      name: 'Wide-Leg Trousers',
      price: '$149.00',
      image: 'https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      slug: 'wide-leg-trousers'
    },
    {
      id: 6,
      name: 'Silk Blouse',
      price: '$119.00',
      image: 'https://images.unsplash.com/photo-1529171488825-cc18e835d944?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      slug: 'silk-blouse'
    }
  ],
  'books': [
    {
      id: 1,
      name: 'The Midnight Library',
      price: '$24.99',
      image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      slug: 'midnight-library'
    },
    {
      id: 2,
      name: 'The Silent Patient',
      price: '$19.99',
      image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80',
      slug: 'silent-patient'
    },
    {
      id: 3,
      name: 'Atomic Habits',
      price: '$22.99',
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1098&q=80',
      slug: 'atomic-habits'
    },
    {
      id: 4,
      name: 'Where the Crawdads Sing',
      price: '$24.99',
      image: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
      slug: 'where-the-crawdads-sing'
    }
  ],
  'furniture': [
    {
      id: 1,
      name: 'Contemporary Nightstand',
      price: '$249.00',
      image: 'https://images.unsplash.com/photo-1551298298-f4b127d71e43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
      slug: 'contemporary-nightstand'
    },
    {
      id: 2,
      name: 'Modern Accent Chair',
      price: '$399.00',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=958&q=80',
      slug: 'modern-accent-chair'
    },
    {
      id: 3,
      name: 'Minimalist Dining Table',
      price: '$899.00',
      image: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1087&q=80',
      slug: 'minimalist-dining-table'
    },
    {
      id: 4,
      name: 'Lounge Sofa',
      price: '$1,299.00',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      slug: 'lounge-sofa'
    }
  ],
  'beauty': [
    {
      id: 1,
      name: 'Luxury Skincare Set',
      price: '$129.00',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      slug: 'luxury-skincare-set'
    },
    {
      id: 2,
      name: 'Essential Oil Collection',
      price: '$89.00',
      image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      slug: 'essential-oil-collection'
    },
    {
      id: 3,
      name: 'Premium Makeup Palette',
      price: '$79.00',
      image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      slug: 'premium-makeup-palette'
    },
    {
      id: 4,
      name: 'Spa Bath Set',
      price: '$69.00',
      image: 'https://images.unsplash.com/photo-1620733723572-11c53f73a416?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      slug: 'spa-bath-set'
    }
  ]
};

export default function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = params;
  
  // Check if category exists
  if (!categories[slug as keyof typeof categories]) {
    notFound();
  }
  
  const category = categories[slug as keyof typeof categories];
  const products = productsByCategory[slug as keyof typeof productsByCategory] || [];

  return (
    <main>
      <Header />
      
      <div className="relative h-80 overflow-hidden">
        <Image 
          src={category.image}
          alt={category.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative h-full container-custom flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-serif font-medium text-white mb-4">{category.name}</h1>
          <p className="text-white/90 max-w-2xl">{category.description}</p>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container-custom">
          <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h2 className="text-2xl font-serif font-medium text-primary-900 mb-2">
                Browse {category.name}
              </h2>
              <p className="text-secondary-600">{products.length} products</p>
            </div>
            
            <div className="mt-4 md:mt-0 flex items-center space-x-4">
              <label htmlFor="sort" className="text-secondary-700 font-medium">Sort by:</label>
              <select 
                id="sort" 
                className="border-secondary-300 rounded-md text-secondary-700 focus:ring-primary-500 focus:border-primary-500"
              >
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <Link key={product.id} href={`/product/${product.slug}`} className="group">
                <div className="card overflow-hidden transition-all duration-300 group-hover:shadow-lg">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-primary-900 transition-colors group-hover:text-primary-700">
                      {product.name}
                    </h3>
                    <p className="text-secondary-900 font-medium mt-1">{product.price}</p>
                    <div className="mt-3">
                      <button className="text-sm font-medium text-primary-700 group-hover:text-primary-900 transition-colors">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <Newsletter />
      <Footer />
    </main>
  );
} 