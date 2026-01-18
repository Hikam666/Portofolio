// api/contact.js
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { name, email, message } = req.body;
    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    const text = `📩 *Pesan Baru dari Portfolio*\n\n` +
                 `*Nama:* ${name}\n` +
                 `*Email:* ${email}\n\n` +
                 `*Pesan:*\n${message}`;

    try {
        const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: text,
                parse_mode: 'Markdown'
            })
        });

        const result = await response.json();
        if (result.ok) {
            return res.status(200).json({ message: 'Success' });
        } else {
            return res.status(500).json({ message: result.description });
        }
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}