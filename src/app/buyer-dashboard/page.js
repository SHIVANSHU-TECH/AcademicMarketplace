"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function BuyerDashboard() {
  return (
    <div className="relative flex size-full min-h-screen flex-col text-[#1F2937] group/design-root overflow-x-hidden" style={{ fontFamily: 'var(--font-sans)' }}>
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <main className="flex-1 bg-gray-50/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-4xl font-bold tracking-tight text-[var(--brand-primary)]">Buyer Dashboard</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">Purchased Items</h2>
                  <div className="space-y-6">
                    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                      <div className="p-6 flex flex-col sm:flex-row gap-6">
                        <div className="sm:w-1/3 h-48 sm:h-auto bg-center bg-no-repeat bg-cover rounded-lg" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDgC8AZJ5oi661UiDWiiaartpKcbKl_IGmgCIXmA9xoJ3oQQdxjoQIvJiM4mM2q_J70FybIdRpi8J2eH5oQ5ISjkfCp5cwfSMeMhJSb78dDGBTm4xsIHJoYDX8bDFZsi68huNaGy0gFjFk0-iZEUfKUxVDtw00qWf1v_s9DsJS4KlMWPQctfjCi03cLBZZa-2kenxXJ-WNZFN2o-0AJUAXir-GUc3p86u5_zHPTu1wbHE9XSTmrK3NBT9um87V6WfG0EghPamcmFuA")'}}></div>
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <p className="text-sm text-gray-500 mb-1">Purchased on Jan 15, 2024</p>
                            <h3 className="text-xl font-bold text-gray-800">Advanced Calculus Notes</h3>
                            <p className="text-gray-600 mt-2">Detailed notes covering advanced calculus topics, including theorems and proofs.</p>
                          </div>
                          <div className="mt-4">
                            <button className="inline-flex items-center gap-2 rounded-lg bg-[var(--brand-secondary)] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-secondary)] transition-colors">
                              <svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
                              Download
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                      <div className="p-6 flex flex-col sm:flex-row gap-6">
                        <div className="sm:w-1/3 h-48 sm:h-auto bg-center bg-no-repeat bg-cover rounded-lg" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBV77feoi4s_onk1uK_e5Cj79lC1kNCSyxpS-VE5WMLfZXC7iKjfBVDzB2FhHd80TqL4TItdyaORtteq0rPQEAbB3haauYlJMgQpi3-ID0JwV6uTrhWmacU6XvMaTYmZ59YKno_A7O6GTuoXFS4-t62YKTVCy5_tPXjGD162RZL9BHN-F9rFGqWCnjqhBoJKhPvfzngtnkLe7sZNZaFboQUSal-Lw7X13FW2dk_BZqs5xMumCwcOrt3fNTcGPy_y0KvwQuBp9u4NBU")'}}></div>
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <p className="text-sm text-gray-500 mb-1">Purchased on Feb 20, 2024</p>
                            <h3 className="text-xl font-bold text-gray-800">Project: Data Analysis of Social Media Trends</h3>
                            <p className="text-gray-600 mt-2">A comprehensive data analysis project focusing on social media trends, including datasets and analysis scripts.</p>
                          </div>
                          <div className="mt-4 flex flex-wrap gap-3">
                            <button className="inline-flex items-center gap-2 rounded-lg bg-[var(--brand-secondary)] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-secondary)] transition-colors">
                              <svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                              Support Chat
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">Wishlist</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4 group">
                      <div className="w-24 h-24 bg-center bg-no-repeat bg-cover rounded-lg flex-shrink-0" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCX8DioXiGmJ63HWzU2zfAnj9G8oeQAClGJIP1ntD_6SzV0rBd_vkrq1T484XD9heybv4EnhwQUTOxubAeQAP3lCYdU4fnC2XVdwd2v-eo4mMzkzAp0hGjsUXVgPg2pLoGoA073uCkjfAaP2W-TRW2y52npCM1OvdYEWOt8Y-p2KzLvVnyfWc4FLv5p7k2GTckys1PG-VHz4t6EQ2G0h2Uru-IoWs-OhNra2zT8uUoIICGydYlcFdAlbnas9cuuR250kBnCcuhRP3Y")'}}></div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-800 group-hover:text-[var(--brand-secondary)] transition-colors">Organic Chemistry Study Guide</h3>
                        <p className="text-gray-600 mt-1 text-sm">A study guide for organic chemistry, covering key concepts and reactions.</p>
                        <button className="mt-3 inline-flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-1.5 text-sm font-semibold text-gray-800 shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400 transition-colors">
                          View Item
                        </button>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 group">
                      <div className="w-24 h-24 bg-center bg-no-repeat bg-cover rounded-lg flex-shrink-0" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDPWKZogS6c6BA-xiy7pYHmlZtkWjB302b2dNXoAwGHLvLPYdpIj_8ZzVLoxw4AKdQ36AVKNhGFRIFppm2hNX2mZdavvNHWcCufZgijn4Ro_Act6zBRJkjk3fhI_ZkeR82lKi1jM_qhDgb2YbmNeyfKNIttdJkOElklIcY54RWDYHDLCd6yiTOoyRot8kp3bFlH0y5uQhWfWdYrV8uPg1x3iDKMavPzHcm8VAIFn3gOs6pR4ydoFlzXvUnV7sTjXIOx0vVwT1fcaeU")'}}></div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-800 group-hover:text-[var(--brand-secondary)] transition-colors">Python Programming Course</h3>
                        <p className="text-gray-600 mt-1 text-sm">Beginner to advanced Python course with hands-on projects.</p>
                        <button className="mt-3 inline-flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-1.5 text-sm font-semibold text-gray-800 shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400 transition-colors">
                          View Item
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}