import Icon from './Icons'

export default function DeveloperSection() {
  return (
    <section id="developer" className="py-24 bg-brand-blue text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-brand-blue to-brand-dark opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="space-y-4 mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-block text-xs font-bold uppercase tracking-widest text-brand-teal bg-brand-teal/20 px-4 py-1.5 rounded-full border border-brand-teal/35">
            Developer Ecosystem
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Build Faster, Smarter, and More Securely with Our API Marketplace
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="group bg-[#041629]/90 border border-slate-700/30 rounded-3xl p-8 sm:p-12 hover:border-brand-teal/30 transition-all duration-500 cursor-pointer flex flex-col justify-between min-h-[420px] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/10 rounded-full blur-2xl group-hover:bg-brand-teal/15 transition-all duration-500" />

            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <Icon name="logo" className="w-8 h-8 text-brand-teal" />
                <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400 bg-slate-800 px-3 py-1 rounded-full">Explore API docs</span>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">API Marketplace</h3>
                <p className="text-sm text-slate-300 font-light leading-relaxed">
                  Access dozens of production-ready payment APIs. Easily integrate web checkouts, direct billing, cards creation, collections, identity verification, and multi-currency transaction operations.
                </p>
              </div>
            </div>

            <div className="my-6 border border-slate-800 bg-slate-900/50 rounded-2xl p-4 flex items-center justify-between">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-blue-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                <span className="text-brand-teal">checkout.js</span>
                <span className="text-slate-600">|</span>
                <span className="text-yellow-500">200 OK</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4">
              <span className="font-semibold text-sm group-hover:text-brand-teal transition duration-300">Browse API Registry</span>
              <div className="w-10 h-10 rounded-full bg-slate-800 text-white flex items-center justify-center group-hover:bg-brand-teal transition duration-300">
                <Icon name="arrowRight" className="w-5 h-5 transform group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          </div>

          <div className="group bg-[#041629]/90 border border-slate-700/30 rounded-3xl p-8 sm:p-12 hover:border-brand-teal/30 transition-all duration-500 cursor-pointer flex flex-col justify-between min-h-[420px] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/10 rounded-full blur-2xl group-hover:bg-brand-teal/15 transition-all duration-500" />

            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <Icon name="logo" className="w-8 h-8 text-brand-teal" />
                <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400 bg-slate-800 px-3 py-1 rounded-full">Developer Sandbox</span>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">API Documentation</h3>
                <p className="text-sm text-slate-300 font-light leading-relaxed">
                  Accelerate integration with standard REST resources. Utilize software development kits (SDKs), sandbox testing dashboards, mock credentials, and fully documented webhooks payloads.
                </p>
              </div>
            </div>

            <div className="my-6 border border-slate-800 bg-[#020a12] rounded-2xl p-6 font-mono text-[11px] sm:text-xs text-slate-400 space-y-2">
              <div className="flex justify-between text-slate-600 border-b border-slate-800 pb-2 mb-2">
                <span>POST /v1/transactions</span>
                <span>curl</span>
              </div>
              <div className="text-brand-teal"><span className="text-slate-500">"amount":</span> 150000,</div>
              <div className="text-brand-teal"><span className="text-slate-500">"currency":</span> "NGN",</div>
              <div className="text-brand-teal"><span className="text-slate-500">"email":</span> "customer@safetransact.com"</div>
            </div>

            <div className="flex items-center justify-between pt-4">
              <span className="font-semibold text-sm group-hover:text-brand-teal transition duration-300">Read API Reference</span>
              <div className="w-10 h-10 rounded-full bg-slate-800 text-white flex items-center justify-center group-hover:bg-brand-teal transition duration-300">
                <Icon name="arrowRight" className="w-5 h-5 transform group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
