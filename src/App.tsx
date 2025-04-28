import './App.css';
import { Navbar } from './components/molecules/Navbar/Navbar';
import { Posts } from './components/molecules/Posts/Posts';

function App() {
  return (
    <div className="flex w-full flex-col">
      <Navbar />
      <main className="mt-[4rem] flex max-w-[80rem] justify-center self-center py-6">
        <Posts />
      </main>
    </div>
  );
}

export default App;
