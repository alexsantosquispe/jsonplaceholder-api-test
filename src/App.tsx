import { Route, Routes } from 'react-router-dom';

import './App.css';
import { Navbar } from './components/molecules/Navbar/Navbar';
import { Albums } from './components/organisms/Albums/Albums';
import { Posts } from './components/organisms/Posts/Posts';
import { Todos } from './components/organisms/Todos/Todos';

function App() {
  return (
    <div className="flex w-full flex-col dark:bg-black">
      <Navbar />
      <main className="mt-[4rem] flex max-w-[80rem] justify-center self-center py-6">
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="albums" element={<Albums />} />
          <Route path="todos" element={<Todos />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
