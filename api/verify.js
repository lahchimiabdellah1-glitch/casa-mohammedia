export default function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ ok: false });
  const { type, code } = req.body || {};
  if (!type || !code) return res.status(400).json({ ok: false });
  let attendu = null;
  if (type === "direction") {
    attendu = process.env.DIRECTION_CODE || process.env.CODE_DE_DIRECTION;
  }
  if (type === "agent") {
    attendu = process.env.AGENT_CODE || process.env.CODE_AGENT;
  }
  if (!attendu) return res.status(500).json({ ok: false });
  const ok = String(code).trim() === String(attendu).trim();
  return res.status(200).json({ ok });
}
