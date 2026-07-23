export default function ProjectsSection() {
  return (
    <section className="py-16 sm:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[var(--brand-dark)] mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[var(--brand-light)] rounded-xl shadow-lg overflow-hidden transition-transform transform hover:-translate-y-2">
            <div className="w-full h-48 bg-center bg-cover" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuChmH1Ac6K8B-xYAhC9RGbAK7iy3aZR3h6BNMHLfW2zY6Y2BP_V3xAIeg6l6JZBZJBZA_4P9hwJnC5wTOasNu1W9Fk_8900n3yhOuRRmNv3GlbNzEboYalxhLapwamjmxiFX_SjSU3ptSwHP-u_wEpzGW2GynwNcFV3pjqcZFfPJv4XHSjJypiKqcBWjblI9XB_4IuQlZarer_t3k6AZ1YR9rLr_zEEAsLTYBZq_XtChf2YUBR4GWvi-5YkWmwe5o9qjDAh0OWmOSE")'}}></div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-[var(--brand-dark)]">Project Title 1</h3>
              <p className="mt-2 text-gray-600">Brief description of project 1. Engaging and informative.</p>
            </div>
          </div>
          <div className="bg-[var(--brand-light)] rounded-xl shadow-lg overflow-hidden transition-transform transform hover:-translate-y-2">
            <div className="w-full h-48 bg-center bg-cover" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBlIsCztYQVONneQNIMXOnQcKSfCKquwiirR_ES4YzXcpSs4tNz77T-bFjV4AAwVZHyEbL4sZofJhHGdKDyAfISilcqQl6NcawZKVda9nzyxeUbEMipRruGSDazf-2bOliFy0b8RA-qPomWmWkhS_T38V-xBT7YvIHNntjP7drhyl6b5gkCZM-Em14EMbtPoa-XwtlQ0hjA_zjitUFQ-J7rNPQijG5wUF49eIdPRdHjb7y16aDDljDHygbjgLhCtkSXSbhxxX2-cps")'}}></div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-[var(--brand-dark)]">Project Title 2</h3>
              <p className="mt-2 text-gray-600">Brief description of project 2. Insightful and well-researched.</p>
            </div>
          </div>
          <div className="bg-[var(--brand-light)] rounded-xl shadow-lg overflow-hidden transition-transform transform hover:-translate-y-2">
            <div className="w-full h-48 bg-center bg-cover" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB9Qpaep9F_6MHPSNEpHLJ0nf0O2OHz_doebfD8O47EN-SAB-F89cPk69ZrEHiiaOKIEYj-qlJLvMBPwH0MqkyTPKoVqekcguS2MU3nnypwxQp5JgOH3rPRyvbBVJ4x5J6Kt-RiJYy1m0qg026aVR7smEkWJe41pome4cqs2eDQamQ3rHL-3vV48ewq3RBhcuGErdDmz0-7oDu7BpGuHgSvqKC3NmZ1GHM7amojX3V1SwLcxlUL9sEVDSUTF9gfP1Sk-AM47qEmXLI")'}}></div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-[var(--brand-dark)]">Project Title 3</h3>
              <p className="mt-2 text-gray-600">Brief description of project 3. Comprehensive and practical.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}