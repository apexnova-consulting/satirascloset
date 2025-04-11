import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Mock cart items from the cart page
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

export default function CheckoutPage() {
  // Calculate order summary values
  const subtotal = cartItems.reduce((total, item) => {
    const price = parseFloat(item.price.replace('$', ''));
    return total + (price * item.quantity);
  }, 0);
  
  const shipping = 9.99;
  const taxRate = 0.08;
  const tax = subtotal * taxRate;
  const total = subtotal + shipping + tax;

  return (
    <main>
      <Header />
      
      <div className="container-custom py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-serif font-medium text-primary-900 mb-4">Checkout</h1>
          <p className="text-secondary-600">Complete your purchase by providing your shipping and payment details below.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Checkout forms */}
          <div className="lg:col-span-2 space-y-10">
            {/* Contact information */}
            <section>
              <h2 className="text-xl font-serif font-medium text-primary-900 mb-6">Contact Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded-md border-secondary-300 focus:border-primary-500 focus:ring-primary-500"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full rounded-md border-secondary-300 focus:border-primary-500 focus:ring-primary-500"
                    placeholder="(123) 456-7890"
                  />
                </div>
              </div>
            </section>
            
            {/* Shipping address */}
            <section>
              <h2 className="text-xl font-serif font-medium text-primary-900 mb-6">Shipping Address</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-secondary-700 mb-1">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full rounded-md border-secondary-300 focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-secondary-700 mb-1">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full rounded-md border-secondary-300 focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="address" className="block text-sm font-medium text-secondary-700 mb-1">Address</label>
                  <input
                    type="text"
                    id="address"
                    className="w-full rounded-md border-secondary-300 focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="apt" className="block text-sm font-medium text-secondary-700 mb-1">Apartment, suite, etc. (optional)</label>
                  <input
                    type="text"
                    id="apt"
                    className="w-full rounded-md border-secondary-300 focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-secondary-700 mb-1">City</label>
                  <input
                    type="text"
                    id="city"
                    className="w-full rounded-md border-secondary-300 focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-secondary-700 mb-1">State</label>
                    <select
                      id="state"
                      className="w-full rounded-md border-secondary-300 focus:border-primary-500 focus:ring-primary-500"
                    >
                      <option value="">Select</option>
                      <option value="CA">California</option>
                      <option value="NY">New York</option>
                      <option value="TX">Texas</option>
                      {/* Add more states */}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="zip" className="block text-sm font-medium text-secondary-700 mb-1">ZIP Code</label>
                    <input
                      type="text"
                      id="zip"
                      className="w-full rounded-md border-secondary-300 focus:border-primary-500 focus:ring-primary-500"
                    />
                  </div>
                </div>
              </div>
            </section>
            
            {/* Delivery options */}
            <section>
              <h2 className="text-xl font-serif font-medium text-primary-900 mb-6">Delivery Method</h2>
              
              <div className="space-y-4">
                <div className="border border-secondary-300 rounded-md p-4 hover:border-primary-500 cursor-pointer">
                  <div className="flex items-center">
                    <input
                      id="standard"
                      name="delivery-method"
                      type="radio"
                      defaultChecked
                      className="h-4 w-4 text-primary-600 border-secondary-300 focus:ring-primary-500"
                    />
                    <label htmlFor="standard" className="ml-3 flex flex-1 justify-between">
                      <div>
                        <span className="block text-sm font-medium text-secondary-900">Standard Shipping</span>
                        <span className="block text-sm text-secondary-500">Delivery in 3-5 business days</span>
                      </div>
                      <span className="text-sm font-medium text-secondary-900">$9.99</span>
                    </label>
                  </div>
                </div>
                
                <div className="border border-secondary-300 rounded-md p-4 hover:border-primary-500 cursor-pointer">
                  <div className="flex items-center">
                    <input
                      id="express"
                      name="delivery-method"
                      type="radio"
                      className="h-4 w-4 text-primary-600 border-secondary-300 focus:ring-primary-500"
                    />
                    <label htmlFor="express" className="ml-3 flex flex-1 justify-between">
                      <div>
                        <span className="block text-sm font-medium text-secondary-900">Express Shipping</span>
                        <span className="block text-sm text-secondary-500">Delivery in 1-2 business days</span>
                      </div>
                      <span className="text-sm font-medium text-secondary-900">$19.99</span>
                    </label>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Payment information */}
            <section>
              <h2 className="text-xl font-serif font-medium text-primary-900 mb-6">Payment Information</h2>
              
              <div className="space-y-6">
                <div className="mb-4">
                  <div className="flex space-x-4 mb-4">
                    <div className="w-10 h-6 bg-secondary-200 rounded"></div>
                    <div className="w-10 h-6 bg-secondary-200 rounded"></div>
                    <div className="w-10 h-6 bg-secondary-200 rounded"></div>
                    <div className="w-10 h-6 bg-secondary-200 rounded"></div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="cardName" className="block text-sm font-medium text-secondary-700 mb-1">Name on Card</label>
                  <input
                    type="text"
                    id="cardName"
                    className="w-full rounded-md border-secondary-300 focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="cardNumber" className="block text-sm font-medium text-secondary-700 mb-1">Card Number</label>
                  <input
                    type="text"
                    id="cardNumber"
                    className="w-full rounded-md border-secondary-300 focus:border-primary-500 focus:ring-primary-500"
                    placeholder="0000 0000 0000 0000"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="expiration" className="block text-sm font-medium text-secondary-700 mb-1">Expiration Date</label>
                    <input
                      type="text"
                      id="expiration"
                      className="w-full rounded-md border-secondary-300 focus:border-primary-500 focus:ring-primary-500"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label htmlFor="cvv" className="block text-sm font-medium text-secondary-700 mb-1">CVV</label>
                    <input
                      type="text"
                      id="cvv"
                      className="w-full rounded-md border-secondary-300 focus:border-primary-500 focus:ring-primary-500"
                      placeholder="123"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
          
          {/* Order summary */}
          <div className="lg:col-span-1">
            <div className="bg-secondary-50 rounded-lg p-6 sticky top-24">
              <h2 className="text-lg font-medium text-secondary-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex space-x-4">
                    <div className="relative w-16 h-16 flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="64px"
                        className="object-cover rounded-md"
                      />
                      <span className="absolute -top-2 -right-2 bg-primary-600 text-white w-5 h-5 rounded-full text-xs flex items-center justify-center">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-secondary-900">{item.name}</p>
                      <p className="text-sm text-secondary-500">{item.color}, {item.size}</p>
                    </div>
                    <p className="text-sm font-medium text-secondary-900">{item.price}</p>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-secondary-200 pt-6 space-y-4 text-secondary-700">
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
              
              <button type="submit" className="btn btn-primary w-full py-3">
                Place Order
              </button>
              
              <p className="text-xs text-secondary-500 mt-4 text-center">
                By placing your order, you agree to our <a href="/terms" className="underline hover:text-primary-700">Terms & Conditions</a> and <a href="/privacy" className="underline hover:text-primary-700">Privacy Policy</a>.
              </p>
              
              <div className="border-t border-secondary-200 mt-6 pt-6">
                <Link href="/cart" className="text-primary-700 hover:text-primary-900 flex items-center justify-center font-medium">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Return to Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
} 