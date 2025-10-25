// netlify/functions/generate-shill.js
// Serverless funkcia pre Netlify.
// Endpoint bude /.netlify/functions/generate-shill
//
// Ak nastavíš v Netlify environment variable OPENAI_API_KEY,
// skúsime použiť OpenAI API (chat completions, model 'gpt-4').
// Inak vrátime fallback text.

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

    // Fallback generator (keď nie je OPENAI_API_KEY alebo AI spadne)
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

    async function openAIGenerate() {
      const apiKey = process.env.OPENAI_API_KEY;
      if (!apiKey) {
        return null;
      }

      const systemPrompt =
        "You are an assistant that writes crypto/community marketing posts. " +
        "You MUST avoid illegal claims, insider promises, guaranteed profit, or '100x guaranteed'. " +
        "Keep hype but not scammy. Keep it short and social-ready (X / Telegram).";

      const userPrompt =
        `Brief: ${brief}\n` +
        `Tone: ${tone}\n` +
        `Hashtags allowed: ${withTags ? "yes" : "no"}\n\n` +
        "Write 1 short shill-style social post in Slovak or English (match input language). " +
        "Max ~280 chars. End with hashtags only if allowed.";

      const resp = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-4",
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

    let result = await openAIGenerate();
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
    return new Response(
      JSON.stringify({ error: "Server error." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
