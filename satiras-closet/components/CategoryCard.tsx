import Link from 'next/link';
import Image from 'next/image';

interface Category {
  id: number;
  name: string;
  description: string;
  image: string;
  slug: string;
}

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Link 
      href={`/category/${category.slug}`}
      className="group card overflow-hidden transition-all duration-300 hover:shadow-lg"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={category.image}
          alt={category.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>
      <div className="p-4 bg-white">
        <h3 className="text-lg font-serif font-medium text-primary-900 mb-1">{category.name}</h3>
        <p className="text-sm text-secondary-600">{category.description}</p>
        <div className="mt-4 flex items-center text-primary-700 font-medium text-sm group-hover:text-primary-900">
          Shop Now
          <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard; 