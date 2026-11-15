// Vercel Serverless Function - Sécurité Forte
// Les codes sont dans Vercel > Settings > Environment Variables : DIRECTION_CODE et AGENT_CODE
export default function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ ok: false, error: "Méthode non autorisée" });
  const { type, code } = req.body || {};
  if (!type || !code) return res.status(400).json({ ok: false });
  const attendu = type === "direction" ? process.env.DIRECTION_CODE : type === "agent" ? process.env.AGENT_CODE : null;
  if (!attendu) return res.status(500).json({ ok: false, error: "Code non configuré sur Vercel" });
  const ok = String(code).trim() === String(attendu).trim();
  return res.status(200).json({ ok });
}
