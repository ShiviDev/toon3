export async function createRoom() {
    const res = await fetch(`https://api.huddle01.com/api/v1/create-room`, {
        method: "POST",
        body: JSON.stringify({
            title: 'test',
            hostWallets: ['0x379f7dEBf9495D8DE278A4A45A401F27f38564B7']
        }),
        headers: {
            "Content-Type": "application/json",
            'x-api-key': `v-vpDjt8KKwXoe_7FmscmNq6uOuFn3s_`,
        },
    });
    const data = await res.json();
    return data;
}