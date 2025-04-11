import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { StarIcon, ShoppingCartIcon, HeartIcon } from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';

interface ProductPageProps {
  params: {
    slug: string;
  };
}

// Mock products data
const allProducts = [
  {
    id: 1,
    name: 'Silk Midi Dress',
    description: 'This elegant silk midi dress features a flattering silhouette with a cinched waist and flowing skirt. Perfect for special occasions or when you want to make a sophisticated statement.',
    price: '$189.00',
    originalPrice: '$239.00',
    images: [
      'https://images.unsplash.com/photo-1551803091-e20673f15770?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
      'https://images.unsplash.com/photo-1577900232427-18219b9166a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fGRyZXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1612336307429-8a898d10e223?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE1fHxkcmVzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
    ],
    rating: 4.8,
    reviewCount: 124,
    colors: ['Black', 'Navy', 'Ivory'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    category: 'womens-clothing',
    slug: 'silk-midi-dress',
    features: [
      '100% silk fabric',
      'Midi length',
      'Lined bodice',
      'Hidden back zipper',
      'Dry clean only'
    ],
    relatedProducts: [2, 5, 6]
  },
  {
    id: 2,
    name: 'Cashmere Sweater',
    description: 'Luxuriously soft cashmere sweater with a relaxed fit and ribbed details at the cuffs and hem. A timeless essential for your wardrobe that offers both comfort and elegance.',
    price: '$159.00',
    originalPrice: null,
    images: [
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
      'https://images.unsplash.com/photo-1511994298241-608e28f14fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3dlYXRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHN3ZWF0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
    ],
    rating: 4.9,
    reviewCount: 89,
    colors: ['Camel', 'Heather Grey', 'Black', 'Burgundy'],
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'womens-clothing',
    slug: 'cashmere-sweater',
    features: [
      '100% premium cashmere',
      'Relaxed fit',
      'Ribbed cuffs and hem',
      'Dry clean or hand wash cold',
      'Made in Italy'
    ],
    relatedProducts: [1, 5, 6]
  },
  {
    id: 3,
    name: 'The Midnight Library',
    description: 'Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived. See what would have happened if you had made other choices... Would you have done anything different, if you had the chance to undo your regrets?',
    price: '$24.99',
    originalPrice: null,
    images: [
      'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      'https://images.unsplash.com/photo-1476275466078-4007374efbbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGJvb2t8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1495640388908-05fa85288e61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGJvb2t8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
    ],
    rating: 4.7,
    reviewCount: 215,
    colors: [],
    sizes: [],
    category: 'books',
    slug: 'midnight-library',
    features: [
      'Hardcover: 304 pages',
      'Publisher: Viking',
      'Language: English',
      'ISBN-13: 978-0525559474',
      'Genre: Fiction, Fantasy'
    ],
    relatedProducts: [7, 8, 9]
  },
  {
    id: 7,
    name: 'The Silent Patient',
    description: 'A psychological thriller that explores the story of Alicia Berenson, a famous painter who shoots her husband and then never speaks again. Theo Faber, a criminal psychotherapist, is determined to unravel the mystery of why she shot her husband.',
    price: '$19.99',
    originalPrice: '$24.99',
    images: [
      'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80',
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1098&q=80'
    ],
    rating: 4.6,
    reviewCount: 178,
    colors: [],
    sizes: [],
    category: 'books',
    slug: 'silent-patient',
    features: [
      'Paperback: 352 pages',
      'Publisher: Celadon Books',
      'Language: English',
      'ISBN-13: 978-1250301697',
      'Genre: Psychological Thriller'
    ],
    relatedProducts: [3, 8, 9]
  }
];

export default function ProductPage({ params }: ProductPageProps) {
  const { slug } = params;
  
  // Find product by slug
  const product = allProducts.find(p => p.slug === slug);
  
  if (!product) {
    notFound();
  }
  
  // Get related products
  const relatedProducts = product.relatedProducts
    .map(id => allProducts.find(p => p.id === id))
    .filter(Boolean);

  return (
    <main>
      <Header />
      
      <div className="container-custom py-12">
        <nav className="mb-6">
          <ol className="flex items-center space-x-2 text-sm">
            <li><Link href="/" className="text-secondary-600 hover:text-primary-700">Home</Link></li>
            <li className="text-secondary-600">/</li>
            <li><Link href={`/category/${product.category}`} className="text-secondary-600 hover:text-primary-700">{product.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</Link></li>
            <li className="text-secondary-600">/</li>
            <li className="text-primary-700 font-medium">{product.name}</li>
          </ol>
        </nav>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product images */}
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image 
                src={product.images[0]} 
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {product.images.slice(1).map((image, index) => (
                <div key={index} className="relative aspect-square overflow-hidden rounded-lg cursor-pointer">
                  <Image 
                    src={image} 
                    alt={`${product.name} - View ${index + 2}`}
                    fill
                    sizes="(max-width: 1024px) 33vw, 16vw"
                    className="object-cover hover:opacity-80 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Product details */}
          <div>
            <h1 className="text-3xl font-serif font-medium text-primary-900 mb-2">{product.name}</h1>
            
            <div className="flex items-center mb-4">
              <div className="flex mr-2">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <span key={rating}>
                    {product.rating > rating ? (
                      <StarIconSolid className="h-5 w-5 text-yellow-400" />
                    ) : (
                      <StarIcon className="h-5 w-5 text-yellow-400" />
                    )}
                  </span>
                ))}
              </div>
              <span className="text-secondary-600">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>
            
            <div className="mb-6">
              <span className="text-2xl font-medium text-primary-900">{product.price}</span>
              {product.originalPrice && (
                <span className="ml-2 text-lg text-secondary-500 line-through">{product.originalPrice}</span>
              )}
              {product.originalPrice && (
                <span className="ml-2 text-sm font-medium bg-accent-100 text-accent-800 px-2 py-0.5 rounded">
                  Save {Math.round(((parseInt(product.originalPrice.replace('$', '')) - parseInt(product.price.replace('$', ''))) / parseInt(product.originalPrice.replace('$', ''))) * 100)}%
                </span>
              )}
            </div>
            
            <p className="text-secondary-700 mb-6">{product.description}</p>
            
            {product.colors.length > 0 && (
              <div className="mb-6">
                <h2 className="text-sm font-medium text-secondary-900 mb-3">Color</h2>
                <div className="flex space-x-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      className="border border-secondary-300 rounded-md px-3 py-1 text-sm text-secondary-700 hover:border-primary-500 hover:text-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {product.sizes.length > 0 && (
              <div className="mb-6">
                <h2 className="text-sm font-medium text-secondary-900 mb-3">Size</h2>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className="border border-secondary-300 rounded-md px-3 py-1 text-sm text-secondary-700 hover:border-primary-500 hover:text-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            <div className="flex items-center space-x-4 mb-8">
              <div className="border border-secondary-300 rounded-md flex w-32">
                <button className="px-3 py-2 text-secondary-600 hover:text-secondary-900">-</button>
                <input
                  type="number"
                  min="1"
                  value="1"
                  readOnly
                  className="w-full text-center border-0 focus:ring-0 text-secondary-900"
                />
                <button className="px-3 py-2 text-secondary-600 hover:text-secondary-900">+</button>
              </div>
              
              <button className="btn btn-primary flex-1 flex items-center justify-center">
                <ShoppingCartIcon className="h-5 w-5 mr-2" />
                Add to Cart
              </button>
              
              <button className="p-2 rounded-md border border-secondary-300 text-secondary-600 hover:text-primary-700 hover:border-primary-500">
                <HeartIcon className="h-6 w-6" />
              </button>
            </div>
            
            <div className="border-t border-secondary-200 pt-6">
              <h2 className="text-lg font-medium text-primary-900 mb-4">Features</h2>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-primary-600 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-secondary-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Related products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-serif font-medium text-primary-900 mb-6">You may also like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {relatedProducts.map((relatedProduct) => (
                relatedProduct && (
                  <Link key={relatedProduct.id} href={`/product/${relatedProduct.slug}`} className="group">
                    <div className="card overflow-hidden transition-all duration-300 group-hover:shadow-lg">
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={relatedProduct.images[0]}
                          alt={relatedProduct.name}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-medium text-primary-900 transition-colors group-hover:text-primary-700">
                          {relatedProduct.name}
                        </h3>
                        <p className="text-secondary-900 font-medium mt-1">{relatedProduct.price}</p>
                      </div>
                    </div>
                  </Link>
                )
              ))}
            </div>
          </section>
        )}
      </div>
      
      <Newsletter />
      <Footer />
    </main>
  );
} 