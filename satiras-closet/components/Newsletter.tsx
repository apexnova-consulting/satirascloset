import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter a valid email address');
      return;
    }
    
    // Here you would typically call an API to subscribe the user
    // For now, we'll just simulate success
    setSubmitted(true);
    setError('');
  };

  return (
    <section className="bg-primary-50 py-16">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-primary-900 mb-4">
            Join the Satira&apos;s Closet Family
          </h2>
          <p className="text-secondary-600 mb-8">
            Subscribe to our newsletter and be the first to hear about new arrivals, special offers, and exclusive events.
          </p>
          
          {submitted ? (
            <div className="bg-primary-100 border border-primary-300 text-primary-800 p-4 rounded-md">
              <p className="font-medium">Thank you for subscribing!</p>
              <p className="mt-1">We&apos;ve sent a confirmation email to your inbox.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="flex-grow">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-md border-secondary-300 focus:ring-primary-500 focus:border-primary-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
              </div>
              <button
                type="submit"
                className="btn btn-primary py-3 px-6 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          )}
          
          <p className="text-sm text-secondary-500 mt-6">
            By subscribing, you agree to our <a href="/privacy" className="underline hover:text-primary-800">Privacy Policy</a> and consent to receive updates from Satira&apos;s Closet.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter; 