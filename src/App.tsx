
import { Routes, Route } from 'react-router-dom';

// import { useState } from 'react'
import Content from './components/Content'
import Navbar from './components/Navbar'
import { clouds_bg } from './assets/_indexAssets';
import { About, Tadarus, Reference } from './pages/_indexPages';

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
        <Content />

        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/tadarus" element={<Tadarus />} />
          <Route path="/reference" element={<Reference />} />
        </Routes>
      </main>
    </>
  );  
}

export default App
