
import { Routes, Route } from 'react-router-dom';

// import { useState } from 'react'
import Content from './components/Content'
import Navbar from './components/Navbar'
import { clouds_bg } from './assets/_indexAssets';
import { About, Tadarus, Reference, Tracking, Error404 } from './pages/_indexPages';

function App() {

  return (
    <>
      <div className="absolute inset-0 -z-10">
        <img
          src={clouds_bg}
          alt="Fluffy clouds in a blue sky"
          className="object-cover w-full h-full"
        />
      </div>
      <main className="absolute inset-0 flex flex-col items-center justify-center">

        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/about" element={<About />} />
          <Route path="/tadarus" element={<Tadarus />} />
          <Route path="/reference" element={<Reference />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
        
        <Navbar />
      </main>
    </>
  );  
}

export default App
