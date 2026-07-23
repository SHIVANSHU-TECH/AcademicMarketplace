export default function TestimonialsSection() {
  return (
    <section className="bg-gray-50 py-16 sm:py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[var(--brand-dark)] mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[var(--brand-light)] p-8 rounded-xl shadow-lg">
            <div className="flex items-center mb-4">
              <img alt="Ethan Carter" className="w-12 h-12 rounded-full mr-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFu3EiDjcnvjfAJu9qLpCIKkY8jBqD3gDkKUeLdOy3vQ3b3YsIklk_ng0EVKSLVzx67XWQF6tzNaXXcI2XpffVXw84gvDWr2BmoQerYW7EBSKlwkS4RemJlEt_0Um2kFJNt41PHVIXLp_YXUjV962q1sP6smZXvaPK29guxoy_2shodowdnTKr8KJguZlILQhTVLXYihpUiIQlb668Yo82FJj2tVKTMEhY_RLkeZ2UWENp5s6X0Wa6mq6AllknJEMWLEMrLzXsxPw"/>
              <div>
                <p className="font-semibold text-[var(--brand-dark)]">Ethan Carter</p>
                <p className="text-sm text-gray-500">Jan 2023</p>
              </div>
            </div>
            <p className="text-gray-700">"StudyHub has been a game-changer for my studies. The projects are well-structured and the notes are concise and easy to understand."</p>
          </div>
          <div className="bg-[var(--brand-light)] p-8 rounded-xl shadow-lg">
            <div className="flex items-center mb-4">
              <img alt="Olivia Bennett" className="w-12 h-12 rounded-full mr-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEJ4f9sca2jZlGvguDYI9nciP0tmO6wjjDP2xP61muU8pFZ3D0145jvcAANrdQGCIO5az-pb9ga8Ksy79yvysXtKmugPfPGyJx-3UueCWtH8FpmSFZTWbAc2hr7hKXdhNcEvKpetX_o2qDP7caK42MBf8z-b5Ho1GfDChd_h0MvohL-tsK5QDwBiol6BdlzbXctWDIlHqixNlYL20ynVHbYD8fLW6RDWyeH_sK_XOcxjN-OsdaHPc8h6kK7SMycpgfXgVjw4Mpl_s"/>
              <div>
                <p className="font-semibold text-[var(--brand-dark)]">Olivia Bennett</p>
                <p className="text-sm text-gray-500">Feb 2023</p>
              </div>
            </div>
            <p className="text-gray-700">"I found exactly what I needed for my final year project. The quality is excellent and the price is very reasonable."</p>
          </div>
        </div>
      </div>
    </section>
  );
}