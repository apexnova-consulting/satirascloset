import Image from 'next/image';
import Link from 'next/link';
import { XMarkIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Mock cart items for demo purposes
const cartItems = [
  {
    id: 1,
    name: 'Silk Midi Dress',
    price: '$189.00',
    image: 'https://images.unsplash.com/photo-1551803091-e20673f15770?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    color: 'Black',
    size: 'M',
    quantity: 1,
    slug: 'silk-midi-dress'
  },
  {
    id: 2,
    name: 'Cashmere Sweater',
    price: '$159.00',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
    color: 'Camel',
    size: 'L',
    quantity: 1,
    slug: 'cashmere-sweater'
  }
];

export default function CartPage() {
  // Calculate subtotal
  const subtotal = cartItems.reduce((total, item) => {
    const price = parseFloat(item.price.replace('$', ''));
    return total + (price * item.quantity);
  }, 0);
  
  // Shipping cost
  const shipping = 9.99;
  
  // Tax (e.g., 8%)
  const taxRate = 0.08;
  const tax = subtotal * taxRate;
  
  // Total
  const total = subtotal + shipping + tax;

  return (
    <main>
      <Header />
      
      <div className="container-custom py-12">
        <h1 className="text-3xl font-serif font-medium text-primary-900 mb-8">Shopping Cart</h1>
        
        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart items */}
            <div className="lg:col-span-2">
              <div className="border-b border-secondary-200 pb-3 mb-6">
                <h2 className="text-lg font-medium text-secondary-900">Item(s): {cartItems.length}</h2>
              </div>
              
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 pb-6 border-b border-secondary-200">
                    <div className="relative w-full sm:w-32 h-40 flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(max-width: 640px) 100vw, 128px"
                        className="object-cover rounded-md"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <Link href={`/product/${item.slug}`} className="text-primary-900 font-medium hover:text-primary-700">
                          {item.name}
                        </Link>
                        <p className="font-medium text-primary-900">{item.price}</p>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 mt-2 text-sm text-secondary-600">
                        {item.color && <p>Color: {item.color}</p>}
                        {item.size && <p>Size: {item.size}</p>}
                      </div>
                      
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="border border-secondary-300 rounded-md flex">
                            <button className="px-3 py-1 text-secondary-600 hover:text-secondary-900">-</button>
                            <input
                              type="number"
                              min="1"
                              value={item.quantity}
                              readOnly
                              className="w-12 text-center border-0 focus:ring-0 text-secondary-900"
                            />
                            <button className="px-3 py-1 text-secondary-600 hover:text-secondary-900">+</button>
                          </div>
                        </div>
                        
                        <button className="text-secondary-600 hover:text-primary-700 flex items-center">
                          <XMarkIcon className="h-5 w-5 mr-1" />
                          <span className="text-sm">Remove</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 flex justify-between">
                <button className="text-primary-700 hover:text-primary-900 flex items-center font-medium">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Continue Shopping
                </button>
                <button className="text-secondary-600 hover:text-primary-700 font-medium">
                  Clear Cart
                </button>
              </div>
            </div>
            
            {/* Order summary */}
            <div className="lg:col-span-1">
              <div className="bg-secondary-50 rounded-lg p-6 sticky top-24">
                <h2 className="text-lg font-medium text-secondary-900 mb-6">Order Summary</h2>
                
                <div className="space-y-4 text-secondary-700">
                  <div className="flex justify-between">
                    <p>Subtotal</p>
                    <p>${subtotal.toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between">
                    <p>Shipping</p>
                    <p>${shipping.toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between">
                    <p>Tax</p>
                    <p>${tax.toFixed(2)}</p>
                  </div>
                </div>
                
                <div className="border-t border-secondary-200 my-6 pt-6">
                  <div className="flex justify-between text-lg font-medium text-secondary-900">
                    <p>Total</p>
                    <p>${total.toFixed(2)}</p>
                  </div>
                </div>
                
                <Link href="/checkout" className="btn btn-primary w-full py-3 flex items-center justify-center">
                  <ShoppingBagIcon className="h-5 w-5 mr-2" />
                  Proceed to Checkout
                </Link>
                
                <div className="mt-6">
                  <h3 className="font-medium text-secondary-900 mb-2">We Accept</h3>
                  <div className="flex space-x-2">
                    <div className="w-10 h-6 bg-secondary-200 rounded"></div>
                    <div className="w-10 h-6 bg-secondary-200 rounded"></div>
                    <div className="w-10 h-6 bg-secondary-200 rounded"></div>
                    <div className="w-10 h-6 bg-secondary-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="inline-block p-6 rounded-full bg-secondary-100 mb-6">
              <ShoppingBagIcon className="h-12 w-12 text-secondary-500" />
            </div>
            <h2 className="text-2xl font-medium text-secondary-900 mb-3">Your cart is empty</h2>
            <p className="text-secondary-600 mb-8">Looks like you haven't added any items to your cart yet.</p>
            <Link href="/" className="btn btn-primary py-3 px-8">
              Start Shopping
            </Link>
          </div>
        )}
      </div>
      
      <Footer />
    </main>
  );
} 