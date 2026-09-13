import logo from "../assets/logo.png"

export default function Footer() {
  return (
    <footer className="font-inter w-full bg-white border-t border-slate-100 pt-16 pb-8 text-slate-600">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12">
          
          
          <div className="md:col-span-2 space-y-4">
            
            <img src={logo} alt="logo" />

            
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Curated tools, technologies, and resources for developers building modern software.
            </p>

            
            <div className="flex items-center gap-6 pt-2 font-medium text-sm text-slate-700">
              <a href="#" className="hover:text-slate-950 transition-colors">GitHub</a>
              <a href="#" className="hover:text-slate-950 transition-colors">Twitter</a>
              <a href="#" className="hover:text-slate-950 transition-colors">LinkedIn</a>
            </div>
          </div>

          
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-900 tracking-wider uppercase">
              PRODUCT
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-500">
              <li><a href="#" className="hover:text-slate-900 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Technologies</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Projects</a></li>
            </ul>
          </div>

          
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-900 tracking-wider uppercase">
              COMPANY
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-500">
              <li><a href="#" className="hover:text-slate-900 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Careers</a></li>
            </ul>
          </div>

          
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-900 tracking-wider uppercase">
              LEGAL
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-500">
              <li><a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        
        <div className="border-t border-slate-100 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  )
}