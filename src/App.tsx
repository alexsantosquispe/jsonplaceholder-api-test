import { AppRouter } from './AppRouter';
import { Footer } from './components/molecules/Footer/Footer';
import { Navbar } from './components/molecules/Navbar/Navbar';

function App() {
  return (
    <div className="flex w-full flex-col dark:bg-black/95">
      <Navbar />
      <main className="mt-[4rem] flex max-w-[80rem] justify-center self-center py-2 md:p-0">
        <AppRouter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
