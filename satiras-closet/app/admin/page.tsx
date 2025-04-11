import Link from 'next/link';
import Image from 'next/image';
import { PlusIcon, PencilSquareIcon, TrashIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Mock products for the admin dashboard
const adminProducts = [
  {
    id: 1,
    name: 'Silk Midi Dress',
    price: '$189.00',
    image: 'https://images.unsplash.com/photo-1551803091-e20673f15770?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    category: 'Women\'s Clothing',
    inventory: 24,
    status: 'Active'
  },
  {
    id: 2,
    name: 'Cashmere Sweater',
    price: '$159.00',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
    category: 'Women\'s Clothing',
    inventory: 18,
    status: 'Active'
  },
  {
    id: 3,
    name: 'The Midnight Library',
    price: '$24.99',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    category: 'Books',
    inventory: 42,
    status: 'Active'
  },
  {
    id: 4,
    name: 'Contemporary Nightstand',
    price: '$249.00',
    image: 'https://images.unsplash.com/photo-1551298298-f4b127d71e43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    category: 'Furniture',
    inventory: 8,
    status: 'Low Stock'
  },
  {
    id: 5,
    name: 'Luxury Skincare Set',
    price: '$129.00',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    category: 'Beauty',
    inventory: 15,
    status: 'Active'
  }
];

// Mock recent orders
const recentOrders = [
  { id: '#ORD-5982', customer: 'Emma Wilson', date: '12 Apr 2023', total: '$348.00', status: 'Delivered' },
  { id: '#ORD-5981', customer: 'James Miller', date: '11 Apr 2023', total: '$189.00', status: 'Processing' },
  { id: '#ORD-5980', customer: 'Olivia Johnson', date: '10 Apr 2023', total: '$423.50', status: 'Shipped' },
  { id: '#ORD-5979', customer: 'Noah Williams', date: '09 Apr 2023', total: '$129.00', status: 'Delivered' },
];

export default function AdminPage() {
  return (
    <main>
      <Header />
      
      <div className="container-custom py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-serif font-medium text-primary-900">Admin Dashboard</h1>
          <div className="flex space-x-4">
            <button className="btn btn-secondary">Export Data</button>
            <button className="btn btn-primary flex items-center">
              <PlusIcon className="h-5 w-5 mr-1" />
              Add Product
            </button>
          </div>
        </div>
        
        {/* Dashboard stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-secondary-500 text-sm font-medium mb-1">Total Products</h3>
            <p className="text-3xl font-medium text-secondary-900">152</p>
            <div className="text-xs text-green-600 mt-2 flex items-center">
              <span>↑ 12% from last month</span>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-secondary-500 text-sm font-medium mb-1">Total Orders</h3>
            <p className="text-3xl font-medium text-secondary-900">84</p>
            <div className="text-xs text-green-600 mt-2 flex items-center">
              <span>↑ 8% from last month</span>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-secondary-500 text-sm font-medium mb-1">Monthly Revenue</h3>
            <p className="text-3xl font-medium text-secondary-900">$12,845</p>
            <div className="text-xs text-green-600 mt-2 flex items-center">
              <span>↑ 15% from last month</span>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-secondary-500 text-sm font-medium mb-1">Avg. Order Value</h3>
            <p className="text-3xl font-medium text-secondary-900">$152.92</p>
            <div className="text-xs text-green-600 mt-2 flex items-center">
              <span>↑ 5% from last month</span>
            </div>
          </div>
        </div>
        
        {/* Products and Orders sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Products list */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="px-6 py-5 border-b border-secondary-200">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-medium text-secondary-900">Products</h2>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <MagnifyingGlassIcon className="h-5 w-5 text-secondary-400" />
                    </div>
                    <input
                      type="search"
                      className="block w-full rounded-md border-secondary-300 pl-10 focus:border-primary-500 focus:ring-primary-500 text-sm"
                      placeholder="Search products..."
                    />
                  </div>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-secondary-200">
                  <thead className="bg-secondary-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                        Product
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                        Category
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                        Price
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                        Inventory
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-secondary-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-secondary-200">
                    {adminProducts.map((product) => (
                      <tr key={product.id} className="hover:bg-secondary-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0 relative">
                              <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                sizes="40px"
                                className="object-cover rounded"
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-secondary-900">{product.name}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-secondary-700">{product.category}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-secondary-900">{product.price}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-secondary-900">{product.inventory}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                            ${product.status === 'Active' ? 'bg-green-100 text-green-800' : 
                              product.status === 'Low Stock' ? 'bg-yellow-100 text-yellow-800' : 
                              'bg-red-100 text-red-800'}`}
                          >
                            {product.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex justify-end space-x-2">
                            <button className="text-primary-600 hover:text-primary-900">
                              <PencilSquareIcon className="h-5 w-5" />
                            </button>
                            <button className="text-red-600 hover:text-red-900">
                              <TrashIcon className="h-5 w-5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="px-6 py-3 flex items-center justify-between border-t border-secondary-200">
                <div className="text-sm text-secondary-700">
                  Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of <span className="font-medium">152</span> products
                </div>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 border border-secondary-300 rounded-md text-sm text-secondary-700 hover:bg-secondary-50">
                    Previous
                  </button>
                  <button className="px-3 py-1 border border-secondary-300 rounded-md text-sm text-secondary-700 hover:bg-secondary-50">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Recent orders */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="px-6 py-5 border-b border-secondary-200">
                <h2 className="text-xl font-medium text-secondary-900">Recent Orders</h2>
              </div>
              
              <div className="divide-y divide-secondary-200">
                {recentOrders.map((order) => (
                  <div key={order.id} className="px-6 py-4 hover:bg-secondary-50">
                    <div className="flex justify-between mb-1">
                      <div className="text-sm font-medium text-primary-700">{order.id}</div>
                      <div className="text-sm text-secondary-500">{order.date}</div>
                    </div>
                    <div className="flex justify-between mb-2">
                      <div className="text-sm text-secondary-900">{order.customer}</div>
                      <div className="text-sm font-medium text-secondary-900">{order.total}</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className={`px-2 py-1 inline-flex text-xs leading-4 font-semibold rounded-full 
                        ${order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 
                          order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' : 
                          'bg-yellow-100 text-yellow-800'}`}
                      >
                        {order.status}
                      </span>
                      <button className="text-sm text-primary-700 hover:text-primary-900">View</button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="px-6 py-4 border-t border-secondary-200">
                <Link 
                  href="/admin/orders"
                  className="text-sm text-primary-700 hover:text-primary-900 font-medium flex items-center justify-center"
                >
                  View All Orders
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
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