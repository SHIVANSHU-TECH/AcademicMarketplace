"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function SellerDashboard() {
  return (
    <div className="relative flex size-full min-h-screen flex-col" style={{ fontFamily: 'var(--font-sans)' }}>
      <div className="flex h-full grow flex-col">
        <Header />
        <main className="flex-1 bg-[#F9FAFB] p-6 lg:p-10">
          <div className="mx-auto max-w-7xl">
            <h1 className="text-3xl font-bold text-[#1F2937] mb-8">Seller Dashboard</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h2 className="text-xl font-semibold text-[#1F2937] mb-6">Upload Project/Notes</h2>
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700" for="title">Title</label>
                      <input className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#6366F1] focus:ring-[#6366F1] sm:text-sm h-12 px-4" id="title" placeholder="e.g., Advanced Algorithm Notes" type="text"/>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700" for="description">Description</label>
                      <textarea className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#6366F1] focus:ring-[#6366F1] sm:text-sm min-h-[120px] p-4" id="description" placeholder="A detailed description of your project or notes..."></textarea>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700" for="category">Category</label>
                        <select className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#6366F1] focus:ring-[#6366F1] sm:text-sm h-12 px-4" id="category">
                          <option>Select a category</option>
                          <option>Computer Science</option>
                          <option>Mathematics</option>
                          <option>Physics</option>
                          <option>Literature</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700" for="price">Price ($)</label>
                        <input className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#6366F1] focus:ring-[#6366F1] sm:text-sm h-12 px-4" id="price" placeholder="e.g., 25" type="number"/>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">File Upload (Code/Notes)</label>
                      <div className="mt-1 flex justify-center rounded-lg border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                        <div className="space-y-1 text-center">
                          <svg aria-hidden="true" className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 48 48">
                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                          </svg>
                          <div className="flex text-sm text-gray-600">
                            <label className="relative cursor-pointer rounded-md bg-white font-medium text-[#6366F1] focus-within:outline-none focus-within:ring-2 focus-within:ring-[#6366F1] focus-within:ring-offset-2 hover:text-[#6366F1]" for="file-upload">
                              <span>Upload a file</span>
                              <input className="sr-only" id="file-upload" name="file-upload" type="file"/>
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs text-gray-500">PDF, ZIP, DOCX up to 100MB</p>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700" for="demo-video">Demo Video URL</label>
                        <input className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#6366F1] focus:ring-[#6366F1] sm:text-sm h-12 px-4" id="demo-video" placeholder="https://youtube.com/..." type="url"/>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700" for="slides">Slides URL</label>
                        <input className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#6366F1] focus:ring-[#6366F1] sm:text-sm h-12 px-4" id="slides" placeholder="https://slideshare.net/..." type="url"/>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Select Package</label>
                      <fieldset className="mt-2">
                        <legend className="sr-only">Package type</legend>
                        <div className="flex flex-wrap gap-3">
                          <label className="flex-1 cursor-pointer rounded-lg border border-gray-300 p-4 text-center has-[:checked]:border-[#6366F1] has-[:checked]:bg-[#6366F1]/10 has-[:checked]:ring-2 has-[:checked]:ring-[#6366F1]">
                            <input className="sr-only" name="package" type="radio" value="Basic"/>
                            <span className="text-sm font-medium text-gray-900">Basic</span>
                          </label>
                          <label className="flex-1 cursor-pointer rounded-lg border border-gray-300 p-4 text-center has-[:checked]:border-[#6366F1] has-[:checked]:bg-[#6366F1]/10 has-[:checked]:ring-2 has-[:checked]:ring-[#6366F1]">
                            <input checked="" className="sr-only" name="package" type="radio" value="Standard"/>
                            <span className="text-sm font-medium text-gray-900">Standard</span>
                          </label>
                          <label className="flex-1 cursor-pointer rounded-lg border border-gray-300 p-4 text-center has-[:checked]:border-[#6366F1] has-[:checked]:bg-[#6366F1]/10 has-[:checked]:ring-2 has-[:checked]:ring-[#6366F1]">
                            <input className="sr-only" name="package" type="radio" value="Premium"/>
                            <span className="text-sm font-medium text-gray-900">Premium</span>
                          </label>
                        </div>
                      </fieldset>
                    </div>
                    <div className="flex justify-end pt-2">
                      <button className="flex min-w-[120px] items-center justify-center rounded-lg h-12 px-6 bg-[#10B981] text-white text-sm font-semibold leading-normal shadow-md hover:bg-opacity-90 transition-colors" type="submit">
                        <span>Upload Project</span>
                      </button>
                    </div>
                  </form>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h2 className="text-xl font-semibold text-[#1F2937] mb-6">Manage Listings</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 rounded-l-lg" scope="col">Title</th>
                          <th className="px-6 py-3" scope="col">Category</th>
                          <th className="px-6 py-3" scope="col">Price</th>
                          <th className="px-6 py-3 text-center rounded-r-lg" scope="col">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white border-b hover:bg-gray-50">
                          <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap" scope="row">Advanced Data Structures</th>
                          <td className="px-6 py-4">Computer Science</td>
                          <td className="px-6 py-4">$20.00</td>
                          <td className="px-6 py-4 text-center">
                            <a className="font-medium text-[#6366F1] hover:underline mr-4" href="#">Edit</a>
                            <a className="font-medium text-red-600 hover:underline" href="#">Delete</a>
                          </td>
                        </tr>
                        <tr className="bg-white border-b hover:bg-gray-50">
                          <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap" scope="row">Calculus II Notes</th>
                          <td className="px-6 py-4">Mathematics</td>
                          <td className="px-6 py-4">$15.00</td>
                          <td className="px-6 py-4 text-center">
                            <a className="font-medium text-[#6366F1] hover:underline mr-4" href="#">Edit</a>
                            <a className="font-medium text-red-600 hover:underline" href="#">Delete</a>
                          </td>
                        </tr>
                        <tr className="bg-white hover:bg-gray-50">
                          <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap" scope="row">Quantum Physics Explained</th>
                          <td className="px-6 py-4">Physics</td>
                          <td className="px-6 py-4">$25.00</td>
                          <td className="px-6 py-4 text-center">
                            <a className="font-medium text-[#6366F1] hover:underline mr-4" href="#">Edit</a>
                            <a className="font-medium text-red-600 hover:underline" href="#">Delete</a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h2 className="text-xl font-semibold text-[#1F2937] mb-6">Analytics</h2>
                  <div className="space-y-6">
                    <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                      <div className="p-3 rounded-full bg-[#6366F1]/20 text-[#6366F1]">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                      </div>
                      <div className="ml-4">
                        <p className="text-sm text-gray-500">Views</p>
                        <p className="text-2xl font-bold text-[#1F2937]">12,450</p>
                      </div>
                    </div>
                    <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                      <div className="p-3 rounded-full bg-[#10B981]/20 text-[#10B981]">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                      </div>
                      <div className="ml-4">
                        <p className="text-sm text-gray-500">Downloads</p>
                        <p className="text-2xl font-bold text-[#1F2937]">852</p>
                      </div>
                    </div>
                    <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                      <div className="p-3 rounded-full bg-amber-500/20 text-amber-600">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                      </div>
                      <div className="ml-4">
                        <p className="text-sm text-gray-500">Earnings</p>
                        <p className="text-2xl font-bold text-[#1F2937]">$5,550.00</p>
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