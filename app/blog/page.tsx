export default function BlogPage(){
  return (
    <main className="container section">
      <h1 className="h2">Blog</h1>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {[1,2,3].map(i => (
          <article key={i} className="card p-6">
            <div className="text-xl font-semibold">Ukážkový článok {i}</div>
            <p className="text-slate-300 mt-1">Krátky perex o tom, čo sa v labáku chystá. Nahraď vlastným obsahom.</p>
            <a className="btn-ghost mt-3 inline-flex" href="#">Čítať →</a>
          </article>
        ))}
      </div>
    </main>
  );
}
