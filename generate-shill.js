// /.netlify/functions/generate-shill

export default async (req, context) => {
  try {
    if (req.method !== "POST") {
      return new Response(
        JSON.stringify({ error: "POST only" }),
        { status: 405, headers: { "Content-Type": "application/json" } }
      );
    }

    const { brief, tone, withTags } = await req.json();

    if (!brief || brief.trim().length < 5) {
      return new Response(
        JSON.stringify({ error: "Brief too short" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    function fallbackGenerate() {
      let opener = "";
      if (tone === "hype") {
        opener = "🔥 Absolútne šialenstvo okolo $LAB!";
      } else if (tone === "seriozne") {
        opener = "Update ku $LAB pre tých, čo sledujú ekosystém:";
      } else if (tone === "meme") {
        opener = "gm degeneráti 😂 počuli ste už o $LAB alebo ešte stakujete banány?";
      } else if (tone === "bullish") {
        opener = "Jemne bullish na $LAB ngl.";
      } else {
        opener = "Čo sa deje s $LAB:";
      }

      const core = brief.trim();

      const ctaOptions = [
        "Pridajte sa teraz, kým je to stále early.",
        "Sleduj čo robíme a pochopíš prečo komunita nespí.",
        "Toto je infra pre shillerov, nie len ďalší meme coin.",
        "My nehovoríme, my shipujeme."
      ];
      const cta = ctaOptions[Math.floor(Math.random() * ctaOptions.length)];

      const tags = withTags ? "#LAB #crypto #builder #community" : "";

      return [opener, core, cta, tags].filter(Boolean).join(" ");
    }

    async function groqGenerate() {
      const apiKey = process.env.GROQ_API_KEY;
      if (!apiKey) {
        return null;
      }

      const systemPrompt =
        "You write short crypto shill / marketing posts. " +
        "NO illegal promises, NO guaranteed profit. " +
        "Keep hype but not scammy. Output should fit ~280 chars, ready for X / Telegram.";

      const userPrompt =
        `Brief: ${brief}\n` +
        `Tone: ${tone}\n` +
        `Hashtags allowed: ${withTags ? "yes" : "no"}\n\n` +
        "Write 1 shill-style social post in Slovak or English (match input language). " +
        "End with hashtags only if allowed.";

      const resp = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "llama-3.1-8b-instant",
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: userPrompt },
          ],
          temperature: 0.8,
        }),
      });

      if (!resp.ok) {
        return null;
      }

      const data = await resp.json();
      const text = data?.choices?.[0]?.message?.content?.trim() || null;
      return text;
    }

    let result = await groqGenerate();
    if (!result) {
      result = fallbackGenerate();
    }

    return new Response(
      JSON.stringify({ result }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    const safeText =
      "Čo sa deje s $LAB: komunita nespí, shipujeme nástroje pre shillerov. Sleduj nás, toto je infra pre builderov nie len hype. #LAB";
    return new Response(
      JSON.stringify({ result: safeText }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
