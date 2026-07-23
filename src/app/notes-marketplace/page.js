"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function NotesMarketplace() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#FFFFFF] group/design-root overflow-x-hidden" style={{ fontFamily: 'var(--font-sans)' }}>
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <main className="flex-1 bg-[#F9FAFB] px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8 text-center">
              <h1 className="text-4xl font-extrabold text-[#1F2937] tracking-tight">Notes Marketplace</h1>
              <p className="mt-2 text-lg text-[#6B7280]">Explore high-quality, student-curated notes for your courses.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm mb-6 flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4 flex-wrap">
                <div className="relative">
                  <select className="appearance-none w-full sm:w-48 bg-[#F3F4F6] border-none rounded-lg py-2 pl-3 pr-10 text-[#1F2937] text-sm focus:ring-2 focus:ring-[#6366F1]">
                    <option>Subject</option>
                    <option>Chemistry</option>
                    <option>Mathematics</option>
                    <option>Computer Science</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path></svg>
                  </div>
                </div>
                <div className="relative">
                  <select className="appearance-none w-full sm:w-48 bg-[#F3F4F6] border-none rounded-lg py-2 pl-3 pr-10 text-[#1F2937] text-sm focus:ring-2 focus:ring-[#6366F1]">
                    <option>Semester</option>
                    <option>Fall 2023</option>
                    <option>Spring 2024</option>
                    <option>Fall 2024</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path></svg>
                  </div>
                </div>
                <div className="relative">
                  <select className="appearance-none w-full sm:w-48 bg-[#F3F4F6] border-none rounded-lg py-2 pl-3 pr-10 text-[#1F2937] text-sm focus:ring-2 focus:ring-[#6366F1]">
                    <option>Price</option>
                    <option>Under $10</option>
                    <option>$10 - $20</option>
                    <option>Over $20</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path></svg>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 rounded-lg hover:bg-gray-200 text-gray-600">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 6h16M4 12h16m-7 6h7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                </button>
                <button className="p-2 rounded-lg bg-gray-200 text-[#6366F1]">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden group">
                <div className="relative">
                  <div className="w-full h-40 bg-center bg-no-repeat bg-cover" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBpwTjOq0BHmJUTDIp0wKao-5Cz78qxWwaPAy7jysGxN5PTBbTcjpERSwRUhcY38BpTwv9BTYRG4SnTIKlpvTGXiCsbpn2dXXHkeMX9LgsGTBFIGV8836gA7LcXw-22XzJdoDMX-qZH9lyzBxu28anurb-xqqW6VjIxMfa_mze55h2B4kgoESF7ZU5ARusLuM-kmOfqY909LUkBo1cBiiQX_DSsfutL0kBWFah39m0wu1I7GWigbKd2gXnekjpKl0-ItCq0LpI8f3Y")'}}></div>
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="text-white bg-[#6366F1] px-4 py-2 rounded-md text-sm font-semibold">View Details</button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-[#1F2937]">Organic Chemistry Notes</h3>
                  <p className="text-sm text-[#6B7280] mb-2">Chemistry 201</p>
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-bold text-[#10B981]">$15.00</p>
                    <button className="bg-[#6366F1] hover:bg-[#4F46E5] text-white px-3 py-1 rounded-md text-sm font-semibold">Buy Now</button>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden group">
                <div className="relative">
                  <div className="w-full h-40 bg-center bg-no-repeat bg-cover" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCnwIc03OH6P-rDo61JUKzDp-Yl769liZlqjQHWLLUrzwGYMGXpzsfMTwfv-wOwqG0prZUPIpC1I702UWox07-U3dnPET6k9XzkWXmge1rcTI2Zb-QAFRHSuQI-brAmg4AzJOsw_czqVUiXaliklZNrUV2Bvf2CTZO6cgQ_5wEwMfyKVatSvnXNWBCWA4mPIMNP-_lLk0wfFQVwJGLMUEGwa68PgpozTBx5eMfx0VqGZ-jxKGsn9Iu1DpomazfT4RwU2aq8y0_Ws7E")'}}></div>
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="text-white bg-[#6366F1] px-4 py-2 rounded-md text-sm font-semibold">View Details</button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-[#1F2937]">Calculus II Notes</h3>
                  <p className="text-sm text-[#6B7280] mb-2">Math 102</p>
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-bold text-[#10B981]">$12.50</p>
                    <button className="bg-[#6366F1] hover:bg-[#4F46E5] text-white px-3 py-1 rounded-md text-sm font-semibold">Buy Now</button>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden group">
                <div className="relative">
                  <div className="w-full h-40 bg-center bg-no-repeat bg-cover" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBjebRb5JFG_4hT_2SQgcLyazAM2WIsYBjtJ5_SIEEh97lTuuhs3bs-37xAj-0rFKrLjI39xkZF02I-kX2lU4K7nbopYo5wHCRWYEdi1cFHlRogX_hiCSUcvyy58WozofXJPVNKboJ0IVByYknlugpMmZy_NM4CLmkyD0y9bpPj1vhupltYyPQpyaoN1Ko_WrtVWg2AFFd_asaCgiEJlc5ePhaGZ6CWOUB4mXVuzCbdTB1F7IZ-bOgvpPlIG4dxtbSeIYEGHDPHick")'}}></div>
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="text-white bg-[#6366F1] px-4 py-2 rounded-md text-sm font-semibold">View Details</button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-[#1F2937]">Linear Algebra Notes</h3>
                  <p className="text-sm text-[#6B7280] mb-2">Math 201</p>
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-bold text-[#10B981]">$20.00</p>
                    <button className="bg-[#6366F1] hover:bg-[#4F46E5] text-white px-3 py-1 rounded-md text-sm font-semibold">Buy Now</button>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden group">
                <div className="relative">
                  <div className="w-full h-40 bg-center bg-no-repeat bg-cover" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA2IxOnNNR9mYXw5TnvrvQXDdd-L_N689XsbksH7VhJKGU08NLxQhlq7CHg6GImVi6FVxRIqpIEIgpcP7iu1TntoFy-F9Wn2mJnrgS3TegvcTtowM6ZPnsI0zcdQv-DTGd-_i66sBAi9MrW2tE-I3R0vCGiLtpHkWaOoITjJ1wvPu5qtIR-391lWCOubpNM2AxQgo7w3YUIl8aJAZZweyP7nn3Jt1A_QmSDYObhIt5gUV0FGuV3x564gQIHlr_-0kOmEm3ivNUNJPU")'}}></div>
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="text-white bg-[#6366F1] px-4 py-2 rounded-md text-sm font-semibold">View Details</button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-[#1F2937]">Data Structures &amp; Algos</h3>
                  <p className="text-sm text-[#6B7280] mb-2">CS 201</p>
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-bold text-[#10B981]">$25.00</p>
                    <button className="bg-[#6366F1] hover:bg-[#4F46E5] text-white px-3 py-1 rounded-md text-sm font-semibold">Buy Now</button>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden group">
                <div className="relative">
                  <div className="w-full h-40 bg-center bg-no-repeat bg-cover" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDAZbU5rPj5hUI5e1yoFCd7Uh6kXmVASfu0WTEwbd-fRHi5DpORy4T5vDaZmnkMWzxDaMNu-W9hFLA5F-JpcCarxRCjA8ZFpnp_diJQOFHmCwrLAylWrxEYBwuUWuJzVm0C2CHJVWGo57YpqqoHuOSRZZ4-rf7IM-Fo1HP7b5LkTwxllv0-rnPWS4y6pPd9vh-NwJoS4V7-mudx_NJ126EPaOCI44DM6uqGTjsLd-xhqgO1Uz89xaWBE7qu3k3Hss7c4CNH5RYqB-4")'}}></div>
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="text-white bg-[#6366F1] px-4 py-2 rounded-md text-sm font-semibold">View Details</button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-[#1F2937]">Probability &amp; Stats</h3>
                  <p className="text-sm text-[#6B7280] mb-2">Stat 301</p>
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-bold text-[#10B981]">$18.00</p>
                    <button className="bg-[#6366F1] hover:bg-[#4F46E5] text-white px-3 py-1 rounded-md text-sm font-semibold">Buy Now</button>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden group">
                <div className="relative">
                  <div className="w-full h-40 bg-center bg-no-repeat bg-cover" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAy6xPdcaCVFXztuwutQyVsmyChLRoELQVlA2AU79B4DjlLX3y7d0ys0btj3h-kZpH_zUhHeu1lrFrcPJUsMUi56mKn-yIT9orkLw9w8WuD8SPKdQX7roiCPoXMHaRQyZc5Qn3X33CgZjNAUzNewr4gwOdGCEg1KwcZcZ_yXK6azI1kyJeIBMmVuvGi9Z7YgfeCOnnnM9Go7rRlwtuSNwe4a6BKmrwJD8MfzJpdXKseQXWh6JC4-DkIVrVlV_bHeAWtdsjqKGC4BUE")'}}></div>
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="text-white bg-[#6366F1] px-4 py-2 rounded-md text-sm font-semibold">View Details</button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-[#1F2937]">Computer Architecture</h3>
                  <p className="text-sm text-[#6B7280] mb-2">CS 301</p>
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-bold text-[#10B981]">$22.00</p>
                    <button className="bg-[#6366F1] hover:bg-[#4F46E5] text-white px-3 py-1 rounded-md text-sm font-semibold">Buy Now</button>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden group">
                <div className="relative">
                  <div className="w-full h-40 bg-center bg-no-repeat bg-cover" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDAcD8v6ZLTdUS07y7pz45wld4Z6Z5MokpY7nXbl1EUxL7W7tIFC-1zmEEu_vK5D3t9GWTZKI0bVwY8f6heEYl3ciqrXm7ZFUGUsno19-LzR51Kju73Xrrjn4OX1YLsezm8zXO5968LLaobcgPX8SXnPztuHrkZGkOvinEZZFQssVNVLYCwudbFF2fd5LcSWeKvMzn_G2m958Kv05jc_5em84UzkTdByUMNFgfZo04gnEKZSky5iuQRYjg3Z77psZLCCEvgdGD-1d4")'}}></div>
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="text-white bg-[#6366F1] px-4 py-2 rounded-md text-sm font-semibold">View Details</button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-[#1F2937]">Operating Systems</h3>
                  <p className="text-sm text-[#6B7280] mb-2">CS 302</p>
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-bold text-[#10B981]">$19.50</p>
                    <button className="bg-[#6366F1] hover:bg-[#4F46E5] text-white px-3 py-1 rounded-md text-sm font-semibold">Buy Now</button>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden group">
                <div className="relative">
                  <div className="w-full h-40 bg-center bg-no-repeat bg-cover" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuClV-oKMdyPgJIPgnzErQ0YpUHjD2pFvGG0vGHIhwAoGvWP4YmWmgygPv91F0kcEfHIXUNDBwfTAWS4v3eY75BKBJB6d8sLa64LaS8aHoLdosxDN-arx2lXR5LZEkWmkDSEe64oJ4-zeHCK4vHXihiFdVB5HOpqIZOqa_gYcRnYTJACkH8NGVGyRGlzHg0ohQmy6PsgFBCSNbaBI2Jg1mPfcZuXFNswxa15rTjbs9sZD6JJTry-OP4TU74GVVDiQ6Fi0TnITKiDCdw")'}}></div>
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="text-white bg-[#6366F1] px-4 py-2 rounded-md text-sm font-semibold">View Details</button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-[#1F2937]">Physics I Notes</h3>
                  <p className="text-sm text-[#6B7280] mb-2">Physics 101</p>
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-bold text-[#10B981]">$10.00</p>
                    <button className="bg-[#6366F1] hover:bg-[#4F46E5] text-white px-3 py-1 rounded-md text-sm font-semibold">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 flex items-center justify-center">
              <nav className="flex rounded-md shadow-sm">
                <a className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50" href="#">
                  <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" fillRule="evenodd"></path></svg>
                </a>
                <a className="relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600" href="#">1</a>
                <a className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50" href="#">2</a>
                <a className="relative hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 md:inline-flex" href="#">3</a>
                <span className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700">...</span>
                <a className="relative hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 md:inline-flex" href="#">8</a>
                <a className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50" href="#">
                  <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" fillRule="evenodd"></path></svg>
                </a>
              </nav>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}