import fetch from 'node-fetch';
export async function getAsset(url, timeout = 5000) {
    try {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), timeout);
        const response = await fetch(url, { signal: controller.signal });
        clearTimeout(timer);
        if (!response.ok) {
            throw new Error(`Error with HTTP status: ${response.status}`);
        }
        const responseBuffer = await response.arrayBuffer();
        return Buffer.from(responseBuffer);
    }
    catch (err) {
        console.error("Request failed: ", err);
        return null;
    }
}
//# sourceMappingURL=assetGetter.js.map