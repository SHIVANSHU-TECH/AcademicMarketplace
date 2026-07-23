export default function NotesSection() {
  return (
    <section className="bg-gray-50 py-16 sm:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[var(--brand-dark)] mb-12">Featured Notes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[var(--brand-light)] rounded-xl shadow-lg overflow-hidden transition-transform transform hover:-translate-y-2">
            <div className="w-full h-48 bg-center bg-cover" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB5OXaMPtA9YtjsGXcNm_K6liI3aZ9Nv5zxtFAmi2YfVQF_DFLjzd845Fr0M-Zd4BnzTOWskR8cdH8puzNUZaIUklAWRZLLLWyRyzx3yYfGghLkUCqrf0caRdbUbxN4g_xH2MXo1LQoBBrd71YC2eI7gELcM4j9GpROlA9KRNKG939R7KKAc8RKWBRm5eJ5eNinKsRF10Yh3jFn44HoD8qjnvB93wVaMJON8m37rGPiFAbEn-dWd5BTsUbrfOxU__OGbcM0DCWYM8E")'}}></div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-[var(--brand-dark)]">Notes Title 1</h3>
              <p className="mt-2 text-gray-600">Brief description of notes 1. Concise and easy to understand.</p>
            </div>
          </div>
          <div className="bg-[var(--brand-light)] rounded-xl shadow-lg overflow-hidden transition-transform transform hover:-translate-y-2">
            <div className="w-full h-48 bg-center bg-cover" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuALrFR_ajMDCda4VUaCSE0ixy-f5htUSD8aktLW7gV6MPaToVv5mXBtgiggLZkMs5fiWLrTRGQmpIMJLhv2fAYjlCbbd40SiKVYwUaHff4jWwVrSUoRX7fhdNjYLshEqRS_iyI95ZTGnPvKzELVX5cgOFtPCO9xa4dNgGbj_skrE6VUK9mmMLRvVUUxwmyPzupUbO9fYjCa_S_EIrPlb3UifoCRFEtoAM19ZuswCeEKthxszdBZwwQ3Q9TIPA49Rn9pCueyf9xa8W8E")'}}></div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-[var(--brand-dark)]">Notes Title 2</h3>
              <p className="mt-2 text-gray-600">Brief description of notes 2. Perfect for exam preparation.</p>
            </div>
          </div>
          <div className="bg-[var(--brand-light)] rounded-xl shadow-lg overflow-hidden transition-transform transform hover:-translate-y-2">
            <div className="w-full h-48 bg-center bg-cover" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDp_5PBZrpdNT1EhI-qx7AyqFKnTjdH3OgMqfvKf-W89O4aFM_ZCeNWcu0btOn1YOO8bmWve3GhXAw7JpRmdaPWZgOpt2w-sm9S1h3TDv5RP_4OekTobr_BE5Iviosn4X_o5RCGDzFWiSf4Jr9QXpgpgn3id1nW9Ubus7k7_WIboZ9uupLvHp5vqqTWvK9RCww8_8UQsc-GwyR3sOufS5LfPsV8s1AfR6KvjUFd_u9cbjTgq_cE-XLE11spWv7QVpL1egGb_p6Ut_U")'}}></div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-[var(--brand-dark)]">Notes Title 3</h3>
              <p className="mt-2 text-gray-600">Brief description of notes 3. Covers all key topics.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}