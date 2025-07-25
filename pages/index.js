import Navbar from '../components/navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">Welcome to Mech IT Possible</h1>
      </main>
    </>
  );
}
