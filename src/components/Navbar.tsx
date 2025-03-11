import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="w-full px-4 pb-6 md:pb-10 fade-in-static-2">
      <nav className="max-w-6xl mx-auto bg-white/5 backdrop-blur-md border border-white/20 shadow-lg rounded-xl flex flex-col md:flex-row items-center justify-between p-3">
        <div className="mb-4 md:mb-0">
          {/* <Link to="/" className="flex items-center"> */}
            <span className="text-xl font-serif font-semibold text-slate-800">
              Tadarus
              <span className="text-xs block text-center">
                Dibawa oleh:  
                <a href="https://ambik.link" target="_blank" rel="noopener noreferrer"> Ambik!</a>
              </span>
            </span>
          {/* </Link> */}
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-slate-700 font-medium">
          <Link to="/about" className="hover:text-slate-900">
            About
          </Link>
          <Link to="/tadarus" className="hover:text-slate-900">
            Tadarus
          </Link>
          <Link to="/reference" className="hover:text-slate-900">
            Rujukan
          </Link>
        </div>

        <div className="flex flex-wrap justify-center text-slate-700 font-medium">
          {/* <Link to="/about" className="hover:text-slate-900">
            Sponsor
          </Link> */}
          <span className="text-xl pr-2">💌</span> 
          <span className="text-sm pt-1">Hubungi saya</span>
        </div>
      </nav>
    </div>
  );
}
