"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ProductDetail() {
  return (
    <div className="flex min-h-screen flex-col" style={{ fontFamily: 'var(--font-sans)' }}>
      <Header />
      <main className="flex-grow bg-[var(--brand-white)]">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="mb-6 text-sm text-gray-500">
            <a className="hover:underline" href="/">Home</a> / 
            <a className="hover:underline" href="/project-marketplace"> Projects</a> / 
            <span className="font-medium text-[var(--brand-primary)]"> Machine Learning Project</span>
          </div>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="mb-6 overflow-hidden rounded-xl shadow-lg">
                <div className="aspect-video w-full bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBYy_lTfC9nXhQ4ISBnKiFotm1iwDBzgMgj3KG2OhzuDimWbOLLZz0frc0iQ-9i04yN22bpe4Nz6cn5zOBASxPkxMebtJJDhrHxOtDoZOjpzmUNbDFPvGj3RUFNZHE61UciYvaqbxC4pnBQ_TR5jtRkrgVTORTSAfM29E1UTWdIsQ5LNmmUJvgU9ZFutMrq0WIQicSBcs7oot03dJgHIrS3aG_artNmw3vX6UoNhDu9IwwGZiZYNygzEkEiJYZaVwNpi4mLZsTYS3w")'}}></div>
              </div>
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-[var(--brand-primary)]">Advanced Machine Learning Project: Predictive Analytics for E-commerce</h2>
                  <p className="mt-4 text-lg text-gray-600">This project demonstrates advanced machine learning techniques applied to e-commerce data. It includes predictive models for customer behavior, sales forecasting, and personalized recommendations. The project is well-documented and includes a comprehensive report, code, and setup guide.
                  </p>
                </div>
                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-[var(--brand-primary)]">
                    Complete Package Checklist
                  </h3>
                  <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <li className="flex items-center">
                      <svg className="h-6 w-6 text-[var(--brand-accent)]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                      <span className="ml-3 text-base text-gray-700">Complete Codebase</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="h-6 w-6 text-[var(--brand-accent)]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                      <span className="ml-3 text-base text-gray-700">Detailed Project Report</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="h-6 w-6 text-[var(--brand-accent)]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                      <span className="ml-3 text-base text-gray-700">Presentation Slides</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="h-6 w-6 text-[var(--brand-accent)]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                      <span className="ml-3 text-base text-gray-700">Demo Video</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="h-6 w-6 text-[var(--brand-accent)]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                      <span className="ml-3 text-base text-gray-700">Setup and Usage Guide</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="space-y-6 lg:col-span-1">
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-semibold text-[var(--brand-secondary)]">Machine Learning</span>
                  <p className="text-3xl font-bold text-[var(--brand-primary)]">$49.99</p>
                </div>
                <button className="mt-6 w-full rounded-lg bg-[var(--brand-secondary)] px-5 py-3 text-base font-semibold text-white shadow-sm transition-transform duration-200 hover:scale-105 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-[var(--brand-secondary)] focus:ring-offset-2">
                  Buy Now
                </button>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-bold text-[var(--brand-primary)]">
                  Seller Information
                </h3>
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 flex-shrink-0 rounded-full bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDLvOoxDlmigyGEQK0nqK7Wdbup_MNizuNsPGD1BYVACM6by3m5kPik8Iaqul932n8XPcwn6P-ZSjqEL76AcJN4ErI8LmggeKLcIg98HWoPEGoBPHNmJ27PKcv8UAvQPgBEwlZ0IamQAWlHH0jAtmMQG6YAR5JJ0YW6MloIeArhx2ySxZft6upCgTEuKJ-xNe82MTd93duP_7y5s5TTW3NYGkGtDZOVm-1CJgEykW2gyNWFDUt2VppmXBOrc4uBVU5n20KI9BTB0js")'}}></div>
                  <div>
                    <p className="text-lg font-semibold text-[var(--brand-primary)]">Sophia Clark</p>
                    <div className="flex items-center">
                      <div className="flex text-yellow-400">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg className="h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      </div>
                      <span className="ml-2 text-sm text-gray-500">4.8 (125 reviews)</span>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-base text-gray-600">
                  Sophia is a top-rated seller with extensive experience in machine learning and data science. She is known for her high-quality work and excellent support.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-bold text-[var(--brand-primary)]">
                  Support
                </h3>
                <p className="text-base text-gray-600">
                  For any questions or support, please contact the seller directly through the platform's messaging system. Sophia typically responds within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}