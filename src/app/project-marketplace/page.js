"use client";

import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ProjectMarketplace() {
  return (
    <div className="flex min-h-screen flex-col text-[var(--gray-900)]" style={{ fontFamily: 'var(--font-sans)' }}>
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-[var(--gray-900)] sm:text-5xl">
              Project Marketplace
            </h1>
            <p className="mt-4 text-lg text-gray-500">
              Explore a wide range of academic projects and notes from fellow students.
            </p>
          </div>
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              <button className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium hover:bg-gray-50">
                <span>Category</span>
                <svg className="h-4 w-4 text-gray-500" fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg">
                  <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
              </button>
              <button className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium hover:bg-gray-50">
                <span>Price</span>
                <svg className="h-4 w-4 text-gray-500" fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg">
                  <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
              </button>
              <button className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium hover:bg-gray-50">
                <span>Popularity</span>
                <svg className="h-4 w-4 text-gray-500" fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg">
                  <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
              </button>
            </div>
            <div className="flex items-center gap-2">
              <button className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900">
                <svg fill="currentColor" height="24px" viewBox="0 0 256 256" width="24px" xmlns="http://www.w3.org/2000/svg">
                  <path d="M108,40H56A16,16,0,0,0,40,56v52a16,16,0,0,0,16,16h52a16,16,0,0,0,16-16V56A16,16,0,0,0,108,40Zm0,68H56V56h52Z"></path>
                </svg>
              </button>
              <button className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900">
                <svg fill="currentColor" height="24px" viewBox="0 0 256 256" width="24px" xmlns="http://www.w3.org/2000/svg">
                  <path d="M48,88H208a8,8,0,0,0,0-16H48a8,8,0,0,0,0,16ZM208,120H48a8,8,0,0,0,0,16H208a8,8,0,0,0,0-16Zm0,48H48a8,8,0,0,0,0,16H208a8,8,0,0,0,0-16Z"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="group overflow-hidden rounded-lg border border-gray-200 shadow-sm transition-all hover:shadow-lg">
              <div className="relative">
                <Image alt="Project thumbnail" className="h-48 w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBkmEcpmkcI6GspfV0Mm4clZCaoiZ8QyRu7rZKXVAmtYmPno8nMnf5L8JboarJtNpNPzdv7iUl3r_tI-Og752iR6-5nF6mEIembQ7RmPvycGfQOjN7kneVDAFiYNbomO5QLUuGcc3JqvzRe-WQoulDdXmajhfoFOPeN2OlVugwciZtl9f_btEwnB9SsmpibN356_g84ytlyUWnZGMHJVuirhZQaPaCgEgZsef5cM67OXIEvrckuw_VUPCjV2GsfzfAszNR2xi5Isg" width={400} height={192} />
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 transition-opacity group-hover:opacity-100"></div>
                <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 transition-all group-hover:bottom-4 group-hover:opacity-100">
                  <button className="flex-1 rounded-md bg-white px-3 py-2 text-sm font-semibold text-[var(--gray-900)]">View Details</button>
                  <button className="flex-1 rounded-md bg-[var(--indigo-500)] px-3 py-2 text-sm font-semibold text-white">Buy Now</button>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-500">Mathematics</p>
                <h3 className="mt-1 font-semibold text-gray-900">Advanced Calculus Project</h3>
                <p className="mt-2 text-lg font-bold text-[var(--emerald-500)]">$15.00</p>
              </div>
            </div>
            <div className="group overflow-hidden rounded-lg border border-gray-200 shadow-sm transition-all hover:shadow-lg">
              <div className="relative">
                <Image alt="Project thumbnail" className="h-48 w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAveh1nYqYlaEmyrfmLtwnxfjy1raVvoiuw5C0Vd4uCuYTGmRh6TJjMg8KoY58YDFOQH5MKjyBVF_OW7OmQargKmp_Q6QMNXCZcWAhOmK4QHShigHfCPaeH2U_5Xjyln7etFj-G0IQaSWlBcXyVS9T4fLtaWJzwOWufE3kGdeSuLme_NbU7f_1FSmWZGEPnmcSZvL-Xpr5j_vPkZoRBhyOj1Sx8dBauzxNY3yfhNBEiB2rDVDlRgBvfktv6iCCMIAfLbAe0DiDlK8" width={400} height={192} />
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 transition-opacity group-hover:opacity-100"></div>
                <div className="absolute bottom-0 left-4 right-4 flex gap-2 opacity-0 transition-all group-hover:bottom-4 group-hover:opacity-100">
                  <button className="flex-1 rounded-md bg-white px-3 py-2 text-sm font-semibold text-[var(--gray-900)]">View Details</button>
                  <button className="flex-1 rounded-md bg-[var(--indigo-500)] px-3 py-2 text-sm font-semibold text-white">Buy Now</button>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-500">Computer Science</p>
                <h3 className="mt-1 font-semibold text-gray-900">Introduction to Programming Notes</h3>
                <p className="mt-2 text-lg font-bold text-[var(--emerald-500)]">$10.00</p>
              </div>
            </div>
            <div className="group overflow-hidden rounded-lg border border-gray-200 shadow-sm transition-all hover:shadow-lg">
              <div className="relative">
                <Image alt="Project thumbnail" className="h-48 w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrOZnnHFceoLR5-EWx5LHZbvLj-gHgMSHM-Q98sIoooZsyHOzpcG_CXbhKhxb6tErLRYC7ELVH29AcsoxBe0bB2p1Uyw2n8zLfTD4qUj4tdWX-mLLBV7owjlJeozghbstxtpSFPAfqFAynayMeYZlw_HKUffys38wK61UmwCbT7Cs4sN7e3ygU40ByeAwEBmzgovd_ZwT2KquKALJsFwbL5mIOAP0JGi5n0qgRAJdvGYFWBMdx3a192F5vAQWSCJER0DEnfQyKkVI" width={400} height={192} />
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 transition-opacity group-hover:opacity-100"></div>
                <div className="absolute bottom-0 left-4 right-4 flex gap-2 opacity-0 transition-all group-hover:bottom-4 group-hover:opacity-100">
                  <button className="flex-1 rounded-md bg-white px-3 py-2 text-sm font-semibold text-[var(--gray-900)]">View Details</button>
                  <button className="flex-1 rounded-md bg-[var(--indigo-500)] px-3 py-2 text-sm font-semibold text-white">Buy Now</button>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-500">Chemistry</p>
                <h3 className="mt-1 font-semibold text-gray-900">Organic Chemistry Lab Report</h3>
                <p className="mt-2 text-lg font-bold text-[var(--emerald-500)]">$20.00</p>
              </div>
            </div>
            <div className="group overflow-hidden rounded-lg border border-gray-200 shadow-sm transition-all hover:shadow-lg">
              <div className="relative">
                <Image alt="Project thumbnail" className="h-48 w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDibgHmVCb0pLx2AcPk6bi9HGyDTjX8usIwdhuWDjunt8Nozrh3qFRiMPrKhd9K2svYL-SgCvlOerim0swwx7_ev3PXO37txYUwHpvqJvy61S-x3Y6WjyF1gRGLRvchoTKXdCO1QOVtZz6WD28LGD0ND-bSOHsvCAN2SU3u39T9AgGWFvFpv7p093nzEvyQCQ2gt__f_Kg1ikGwCmDLPD7At3KUhbISy9Rc_IIoxjVYYFModrUzwZ3PjUU32XjVQiQOP9g0E8fQLTU" width={400} height={192} />
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 transition-opacity group-hover:opacity-100"></div>
                <div className="absolute bottom-0 left-4 right-4 flex gap-2 opacity-0 transition-all group-hover:bottom-4 group-hover:opacity-100">
                  <button className="flex-1 rounded-md bg-white px-3 py-2 text-sm font-semibold text-[var(--gray-900)]">View Details</button>
                  <button className="flex-1 rounded-md bg-[var(--indigo-500)] px-3 py-2 text-sm font-semibold text-white">Buy Now</button>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-500">Humanities</p>
                <h3 className="mt-1 font-semibold text-gray-900">History of Art Essay</h3>
                <p className="mt-2 text-lg font-bold text-[var(--emerald-500)]">$12.50</p>
              </div>
            </div>
            <div className="group overflow-hidden rounded-lg border border-gray-200 shadow-sm transition-all hover:shadow-lg">
              <div className="relative">
                <Image alt="Project thumbnail" className="h-48 w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJNcHfaRjE4Vka5TOOJ_JnHZ4HnPeUJ1HeBc3bk-75KzsPm4eDvkCLpDCJemzXAqZPM1Vbe-Zp0Lgv6MQ9Z1q3g810epcJPdPcqAGZc3erTrWA0khQEwGcTCPKTYzaj0e-thc4ZnA1cq-II-xof1AsEYWUhs1U5veBNVMw_4u8fzjUVr2NTyYU474U_bgyjS9AGHCpWg8P3vexwYmXIGDI9aH4H8l6DdgdseFwvcQ5RpulklP41gGuOKwSkzcUkBU6ik2APi10HNs" width={400} height={192} />
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 transition-opacity group-hover:opacity-100"></div>
                <div className="absolute bottom-0 left-4 right-4 flex gap-2 opacity-0 transition-all group-hover:bottom-4 group-hover:opacity-100">
                  <button className="flex-1 rounded-md bg-white px-3 py-2 text-sm font-semibold text-[var(--gray-900)]">View Details</button>
                  <button className="flex-1 rounded-md bg-[var(--indigo-500)] px-3 py-2 text-sm font-semibold text-white">Buy Now</button>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-500">Business</p>
                <h3 className="mt-1 font-semibold text-gray-900">Business Strategy Case Study</h3>
                <p className="mt-2 text-lg font-bold text-[var(--emerald-500)]">$25.00</p>
              </div>
            </div>
            <div className="group overflow-hidden rounded-lg border border-gray-200 shadow-sm transition-all hover:shadow-lg">
              <div className="relative">
                <Image alt="Project thumbnail" className="h-48 w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuARRGIKZDoYh2pAwREIVTjizrW9WNi9-tTBJvsFfAorpomm9RWKMtija10jEiuO4Pm7Ngv6icwkYPKX3c51fAvRr9XMOaF330ItVncuYWNjsZxTfgf1vRTAmyJi5H0c7yseynVTGlOin5F91SZAohLWnNxnd9kG2SOlUzHJr7Q7LGNXyPNIM6xYf5L89Oeg-xmv5_4fOd1CiZtYMDjJ_xMNjSt7UydPbAM8F6PALV96wbjarHWaiYWxtVXczdPVr90o_IhE03igu_Q" width={400} height={192} />
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 transition-opacity group-hover:opacity-100"></div>
                <div className="absolute bottom-0 left-4 right-4 flex gap-2 opacity-0 transition-all group-hover:bottom-4 group-hover:opacity-100">
                  <button className="flex-1 rounded-md bg-white px-3 py-2 text-sm font-semibold text-[var(--gray-900)]">View Details</button>
                  <button className="flex-1 rounded-md bg-[var(--indigo-500)] px-3 py-2 text-sm font-semibold text-white">Buy Now</button>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-500">Data Science</p>
                <h3 className="mt-1 font-semibold text-gray-900">Data Analysis Project</h3>
                <p className="mt-2 text-lg font-bold text-[var(--emerald-500)]">$30.00</p>
              </div>
            </div>
            <div className="group overflow-hidden rounded-lg border border-gray-200 shadow-sm transition-all hover:shadow-lg">
              <div className="relative">
                <Image alt="Project thumbnail" className="h-48 w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDz-gBU2TtMjsAvyIYoC_dPRFVqPNL6x3TOjWn2j2S-c82PqeJY8nNi3Ne2x83V5gvMKVsxtTdDYmxyCnnt6T2_cxD4S2Dpfi_IsIDkmAy7beNETXsx-kyOZGLvlZ1LD_TOYrvjLjo7hhSuR-1Xt40OdcEglT_VFHCF3qrGQg5r5yeueGXyNEPgdm2GQ5GfPFUhAwxmsPuqWOIjIb8HuLpi19SfjJA891YJ5rYLCQjqrXT5cGkDQ8_0_TiaYmtRa9K1TUnenYFCxZY" width={400} height={192} />
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 transition-opacity group-hover:opacity-100"></div>
                <div className="absolute bottom-0 left-4 right-4 flex gap-2 opacity-0 transition-all group-hover:bottom-4 group-hover:opacity-100">
                  <button className="flex-1 rounded-md bg-white px-3 py-2 text-sm font-semibold text-[var(--gray-900)]">View Details</button>
                  <button className="flex-1 rounded-md bg-[var(--indigo-500)] px-3 py-2 text-sm font-semibold text-white">Buy Now</button>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-500">Literature</p>
                <h3 className="mt-1 font-semibold text-gray-900">Creative Writing Portfolio</h3>
                <p className="mt-2 text-lg font-bold text-[var(--emerald-500)]">$18.00</p>
              </div>
            </div>
            <div className="group overflow-hidden rounded-lg border border-gray-200 shadow-sm transition-all hover:shadow-lg">
              <div className="relative">
                <Image alt="Project thumbnail" className="h-48 w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGgx8hWxCVCkekAVxAJv6lhSkeJmoObAKz0n79_h5dsX26FVVjI5zDdJPz_KJw9Zbk4kpEWrY3huSpBF7oF7jQA7JVZ35AP46WlVgDfEiF7jE51WtmWRlMZVJu6PJr9E1KVlj4f4i3pUYaEHPkXABZdMf9HYtmG6K6MXjLjtyUq9Lnd5eA-7LVzhvbaJsS1raF4GQi5cnKJPdNjTtE28nj6yogKtDcGIgfcYqHWKsDXzRY1W2Ln8L27LJJsh8mFNRHHYJOo-Rjzzk" width={400} height={192} />
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 transition-opacity group-hover:opacity-100"></div>
                <div className="absolute bottom-0 left-4 right-4 flex gap-2 opacity-0 transition-all group-hover:bottom-4 group-hover:opacity-100">
                  <button className="flex-1 rounded-md bg-white px-3 py-2 text-sm font-semibold text-[var(--gray-900)]">View Details</button>
                  <button className="flex-1 rounded-md bg-[var(--indigo-500)] px-3 py-2 text-sm font-semibold text-white">Buy Now</button>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-500">Environmental Science</p>
                <h3 className="mt-1 font-semibold text-gray-900">Environmental Science Research Paper</h3>
                <p className="mt-2 text-lg font-bold text-[var(--emerald-500)]">$22.00</p>
              </div>
            </div>
          </div>
          <div className="mt-12 flex items-center justify-center">
            <nav className="flex items-center space-x-1 rounded-md shadow-sm">
              <a className="inline-flex items-center rounded-l-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50" href="#">
                <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" d="M12.79 5.23a.75.75 0 010 1.06L9.854 9.22a.75.75 0 000 1.06l2.936 2.93a.75.75 0 11-1.06 1.06l-3.5-3.5a.75.75 0 010-1.06l3.5-3.5a.75.75 0 011.06 0z" fillRule="evenodd"></path>
                </svg>
              </a>
              <a aria-current="page" className="inline-flex items-center border border-[var(--indigo-500)] bg-[var(--indigo-50)] px-4 py-2 text-sm font-semibold text-[var(--indigo-500)]" href="#"> 1 </a>
              <a className="inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50" href="#"> 2 </a>
              <a className="hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 md:inline-flex" href="#"> 3 </a>
              <span className="inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700">...</span>
              <a className="hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 md:inline-flex" href="#"> 8 </a>
              <a className="inline-flex items-center rounded-r-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50" href="#">
                <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" d="M7.21 14.77a.75.75 0 010-1.06L10.146 11a.75.75 0 000-1.06l-2.936-2.93a.75.75 0 111.06-1.06l3.5 3.5a.75.75 0 010 1.06l-3.5 3.5a.75.75 0 01-1.06 0z" fillRule="evenodd"></path>
                </svg>
              </a>
            </nav>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}