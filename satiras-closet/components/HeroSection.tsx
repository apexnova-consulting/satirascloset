import Link from 'next/link';
import Image from 'next/image';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  imageSrc: string;
}

const HeroSection = ({ title, subtitle, ctaText, ctaLink, imageSrc }: HeroSectionProps) => {
  return (
    <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
      <div className="absolute inset-0">
        <Image 
          src={imageSrc}
          alt="Hero banner"
          fill
          priority
          sizes="100vw"
          className="object-cover animate-fade-in"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
      </div>
      
      <div className="relative h-full container-custom flex items-center">
        <div className="max-w-xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight mb-4 animate-fade-in">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 animate-fade-in">
            {subtitle}
          </p>
          <Link 
            href={ctaLink} 
            className="inline-block bg-white text-primary-900 px-8 py-3 rounded-md font-medium hover:bg-primary-100 transition-colors duration-300 animate-fade-in"
          >
            {ctaText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 