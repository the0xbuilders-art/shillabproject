export default function DocsPage(){
  return (
    <main className="container section">
      <h1 className="h2">Dokumentácia</h1>
      <p className="p mt-2">Toto je kostra dokumentácie. Doplníme autentizáciu, API endpointy, webhooks a príklady.</p>
      <ul className="list-disc pl-6 text-slate-300 mt-6">
        <li>Autorizácia: API keys (soon: OAuth)</li>
        <li>Endpointy: /v1/campaigns, /v1/posts, /v1/metrics</li>
        <li>Webhooks: post.created, campaign.completed</li>
      </ul>
      <p className="text-xs text-slate-500 mt-6">*Vzorové údaje. Nahraďte reálnymi detailmi pred produkciou.</p>
    </main>
  );
}
