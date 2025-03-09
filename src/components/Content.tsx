import { BookOpen } from "lucide-react";

export default function Content() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 pt-32 pb-20 md:pt-40 md:pb-32 fade-in-static">
      <h1 className="text-5xl md:text-7xl font-serif text-slate-800 mb-4">
        Mudahkan Tadarus Anda💖
      </h1>
      <p className="text-lg md:text-xl text-slate-700 mb-10 max-w-md">
        Simpan, guna, kongsi dan permudahkan urusan Tadarus anda!
      </p>
      <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-6 rounded-md flex items-center transition-colors">
        Mula bacaan
        <BookOpen className="ml-2 h-5 w-5" />
      </button>
    </div>
  );
}
