"use client";

import Link from 'next/link';
import Image from 'next/image';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const featuredProducts = [
  {
    id: 1,
    name: 'Silk Midi Dress',
    price: '$189.00',
    image: 'https://images.unsplash.com/photo-1551803091-e20673f15770?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    category: 'womens-clothing',
    slug: 'silk-midi-dress'
  },
  {
    id: 2,
    name: 'Contemporary Nightstand',
    price: '$249.00',
    image: 'https://images.unsplash.com/photo-1551298298-f4b127d71e43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    category: 'furniture',
    slug: 'contemporary-nightstand'
  },
  {
    id: 3,
    name: 'The Midnight Library',
    price: '$24.99',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    category: 'books',
    slug: 'midnight-library'
  },
  {
    id: 4,
    name: 'Luxury Skincare Set',
    price: '$129.00',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    category: 'beauty',
    slug: 'luxury-skincare-set'
  },
  {
    id: 5,
    name: 'Cashmere Sweater',
    price: '$159.00',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
    category: 'womens-clothing',
    slug: 'cashmere-sweater'
  },
  {
    id: 6,
    name: 'Modern Accent Chair',
    price: '$399.00',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=958&q=80',
    category: 'furniture',
    slug: 'modern-accent-chair'
  },
];

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-md hover:bg-primary-50"
      onClick={onClick}
    >
      <ChevronRightIcon className="h-6 w-6 text-primary-900" />
    </button>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-md hover:bg-primary-50"
      onClick={onClick}
    >
      <ChevronLeftIcon className="h-6 w-6 text-primary-900" />
    </button>
  );
};

const FeaturedProducts = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-primary-900 mb-4">Featured Products</h2>
          <p className="text-secondary-600 max-w-2xl mx-auto">Discover our curated selection of exceptional products.</p>
        </div>
        
        <div className="px-8">
          <Slider {...settings}>
            {featuredProducts.map((product) => (
              <div key={product.id} className="px-3">
                <Link href={`/product/${product.slug}`} className="block group">
                  <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-lg font-medium text-primary-900 transition-colors group-hover:text-primary-700">{product.name}</h3>
                  <p className="text-secondary-900 font-medium mt-1">{product.price}</p>
                  <span className="text-sm text-secondary-500 mt-1 block">
                    {product.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </span>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
        
        <div className="text-center mt-12">
          <Link href="/products" className="btn btn-primary">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts; 