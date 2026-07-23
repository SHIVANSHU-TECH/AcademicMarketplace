export default function CategoriesSection() {
  return (
    <section className="py-16 sm:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[var(--brand-dark)] mb-12">Browse by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-semibold text-[var(--brand-dark)] mb-6 text-center">Projects by Branch</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="group relative rounded-xl overflow-hidden cursor-pointer shadow-md">
                <div className="w-full h-40 bg-center bg-cover transition-transform duration-300 group-hover:scale-110" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDEJkd4n_ydOBpxpCF1F13aBC2j2TWPbdmvD9OKx6eiKdkjsoy0LaBRw-4oU5yzcr6IpTu6xoS64OBm71c3terF1GcErbZc7mL1_bpRcjDy9lg_onX1WiVexQm8ZEQxQf9ym8owTNUrx2XyUvdNd3EMDTreF7XxNq8gMXj2XxL6qdp1l50loPqOQXzcXcAaycKLH6mBSkgsM5fSh6NjKk3JzLKuQsf6fO7JfcFg2NONB1Vr49je5U_PZc2iZKQHMrf-5Z_c8m85YOs")'}}></div>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <p className="text-white text-lg font-bold">Computer Science</p>
                </div>
              </div>
              <div className="group relative rounded-xl overflow-hidden cursor-pointer shadow-md">
                <div className="w-full h-40 bg-center bg-cover transition-transform duration-300 group-hover:scale-110" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBdKMcMhFIkz7W_3hgr8K0Y0lu8a4-yYg7RommYoJ16u9AeHNOEP-N8e_dtDLI09e9zA7SWcpd88LfRQatTnpGwy_cWbQc7cEDQsqDtdkyUY6ik5k3-YQIIE4uzvzFfoDwZK2K8-t6G4PgOSPiuUrZJsOYUByFCNKV4mAQ2t_aLt-DuQZzYwhv54neZTeKomVRFxBJ4hPg_ZZAIZ_-yDzOtdDnQ3wWuOCEIFTmG8mKqrL2k9dWWfhYJOtzjyqbATaR2ZD3k23oOGfY")'}}></div>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <p className="text-white text-lg font-bold">Electrical Engineering</p>
                </div>
              </div>
              <div className="group relative rounded-xl overflow-hidden cursor-pointer shadow-md">
                <div className="w-full h-40 bg-center bg-cover transition-transform duration-300 group-hover:scale-110" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDV1u6qIlrFKa3wRsDAiGyM6eR9Ga0NanlEMbONwx-W_OEGIcBW3e0SAwv5PWkk87zgQD1O-m37PNnHuGoV8wEqftBLDx9uu0DzoSsG299MsxOsLnKb_FXwCnIaYUAa0iEbmCzH39wp3ThDp0xONn3bp89WS8Ss82kxLVDzP7sTk7rrLIpslcH5yHQj687yFHe0YZ-v03mIbuazifM5DrPk-CXiDfX463G9AqR512Nh7ItDAT0zmKG8dld_9-Omr5nGPQtpLpjaqO8")'}}></div>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <p className="text-white text-lg font-bold">Mechanical Engineering</p>
                </div>
              </div>
              <div className="group relative rounded-xl overflow-hidden cursor-pointer shadow-md">
                <div className="w-full h-40 bg-center bg-cover transition-transform duration-300 group-hover:scale-110" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBHJRRYuxl7jtgeqtsLZ6S9DuzpWH6yj9zR6OeVGG9WCfXk0StFNuovHciyuLHXQcNvJOYEN4X8nVxL39NLHA7vEF4N0M-t0oqNORcJfyYNQt9DJj9NsILYjRce7Sj7sN88Z7QqJ6yMb65ve0RoLz7gsG-9vA7VBC9JNfhSUKINA3SDkBDiIaS91DdxvfgN7v0gZSd_n2Eb2OP7T45caz1lfEb0N3LIQDH0pmUJbzOAeEPbcsCKeYU9UDJjQfsRUKw4UXcYnYrN3c8")'}}></div>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <p className="text-white text-lg font-bold">Civil Engineering</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-[var(--brand-dark)] mb-6 text-center">Notes by Semester</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="group relative rounded-xl overflow-hidden cursor-pointer shadow-md">
                <div className="w-full h-40 bg-center bg-cover transition-transform duration-300 group-hover:scale-110" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCg9UDjT55ei7hoDytot5t4YIRlZKLljff38b5FlddP1WLsQJjW1a3r_dezyPZa4lFOfsOe6NG3_sHLKqsVGeLrlt3X1I_tkNH5DFHHHv9bvworHH2y7CYYctoa6JQJTrbhhk_nkgqXDyq15bUFOg5C5gXMttoFWiqvjiR6y8ibbr0TDJ30VapPne2gz763grtoBjwOT3rgzNHzp_x96W2z0wkE9P3r9U2WvE3TZqsF97HGL8eOrvNHPYIM1VM94mdbHcLIteExkjg")'}}></div>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <p className="text-white text-lg font-bold">Semester 1</p>
                </div>
              </div>
              <div className="group relative rounded-xl overflow-hidden cursor-pointer shadow-md">
                <div className="w-full h-40 bg-center bg-cover transition-transform duration-300 group-hover:scale-110" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCkFcR2Huk6gbBrHk5o1yQ0qDGrfUx9s6Yc5gV5hP5bi6RDOVWkOLPrII_0l_UQTNqr_ijwOlYpeZBGaNX_zu-t_WKD1wkvIk8LfPJX3p7dpp37xYWnImw-Bzb8ywd95tyQkvcn99q-M_lr0zdsTRi6x0leqQz-goAu13entaLCVmv1vPY3H2RO8GFXh2ytE4SbAL5oK8hQltNINQYQlrT0JvtZnD_sjzAl0wK6An55HKcAJ87-TeX0qDCFWHnQxjVOhr6kad7xbzQ")'}}></div>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <p className="text-white text-lg font-bold">Semester 2</p>
                </div>
              </div>
              <div className="group relative rounded-xl overflow-hidden cursor-pointer shadow-md">
                <div className="w-full h-40 bg-center bg-cover transition-transform duration-300 group-hover:scale-110" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDY2VWlylXMFiqbv7H3AwTxnYTMONXLKS7ZKFQuMnqqxxU1eD3X-SHUdWhyYdrllvoUgz76fhT0tg1lb_dKoB9C8e_nysjj8Mfrpf_OL2izkKbBYukNNGs7GjRGYV-8Uryu7OlINnt3WTlzGMfS7AqpQO3JfbU9dFJiKUONcv-aAZ0XvIy7-BPfs4NsGHGeD78KUFOPmsaSRfTUC-OW-7xSxQaYqlTbbI0lqTGvNOmXvk3PJKzZC-olOhKEJL6mfmgUvZiSZWlccAo")'}}></div>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <p className="text-white text-lg font-bold">Semester 3</p>
                </div>
              </div>
              <div className="group relative rounded-xl overflow-hidden cursor-pointer shadow-md">
                <div className="w-full h-40 bg-center bg-cover transition-transform duration-300 group-hover:scale-110" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCr_Te4UDEvIPV7Y44vBYUl09WCBBHhn0gVcjtbiLDNzXisB2GA3YSgEM8mhgh9Std2HYpgt8Tu9frrCIQGd9Fo9bqQ2rzUYM_zreWKv9xumG1R0zuTt_WG11UPFoHukpoOBFmv8IHH9SHFZYkS5lbcCjng4VOeeer3nkGCq7M6twN78-nuqOqXBQ7jYYUSKtXNwLay_PBWRWlvgSuOZuarcV8oQuaIdg2Ws3TIJ8PmT7kONcMBNUzZC0OHpfTPX3uQYdTiBbj4WxE")'}}></div>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <p className="text-white text-lg font-bold">Semester 4</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}