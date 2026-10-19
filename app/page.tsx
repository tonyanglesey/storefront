const products = [
  { name: "Stoneware planter", price: "$38", tone: "bg-[#c9b79c]", shape: "rounded-b-[40%] rounded-t-md" },
  { name: "Linen throw", price: "$84", tone: "bg-[#a8b5a2]", shape: "rounded-lg" },
  { name: "Oak serving board", price: "$46", tone: "bg-[#b98d63]", shape: "rounded-full" },
  { name: "Beeswax candle set", price: "$24", tone: "bg-[#e3c77d]", shape: "rounded-t-full" },
];

export default function Home() {
  return (
    <div className="flex-1 bg-[#f6f1e9] text-[#2f3a2c]">
      <header className="border-b border-[#2f3a2c]/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <span className="font-serif text-2xl tracking-tight">Fernwood</span>
          <nav className="hidden gap-8 text-sm sm:flex">
            <a href="#">Shop</a>
            <a href="#">Journal</a>
            <a href="#">About</a>
          </nav>
          <span className="text-sm">Cart (2)</span>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6">
        <section className="grid items-center gap-10 py-16 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#6b7a5e]">Autumn collection</p>
            <h1 className="mt-4 font-serif text-5xl leading-tight">Slow goods for a well-kept home.</h1>
            <p className="mt-5 max-w-md text-[#2f3a2c]/75">
              Small-batch ceramics, linens and woodwork from independent makers. Free shipping over $75.
            </p>
            <a href="#" className="mt-8 inline-block rounded-full bg-[#2f3a2c] px-6 py-3 text-sm text-[#f6f1e9]">
              Shop the collection
            </a>
          </div>
          <div className="flex h-72 items-end justify-center gap-6 rounded-2xl bg-[#e8dfd0] p-10">
            <div className="h-32 w-24 rounded-b-[40%] rounded-t-md bg-[#c9b79c]" />
            <div className="h-48 w-20 rounded-t-full bg-[#6b7a5e]" />
            <div className="h-24 w-24 rounded-full bg-[#b98d63]" />
          </div>
        </section>

        <section className="pb-20">
          <div className="flex items-baseline justify-between">
            <h2 className="font-serif text-2xl">New this week</h2>
            <a href="#" className="text-sm underline underline-offset-4">View all</a>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-4">
            {products.map((p) => (
              <div key={p.name}>
                <div className="flex aspect-square items-center justify-center rounded-xl bg-[#ece4d6]">
                  <div className={`h-1/2 w-1/2 ${p.tone} ${p.shape}`} />
                </div>
                <div className="mt-3 flex justify-between text-sm">
                  <span>{p.name}</span>
                  <span className="text-[#2f3a2c]/70">{p.price}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
