// lib/fetchClient.ts

const API_URL = process.env.API!;

type FetchOptions = RequestInit & {
    headers?: Record<string, string>;
};

export async function fetchClient<T>(
    endpoint: string,
    options: FetchOptions = {}
): Promise<T> {
    const res = await fetch(`${API_URL}${endpoint}`, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...(options.headers || {}),
        },
    });

    if (!res.ok) {
        const error = await res.text();
        throw new Error(`Fetch error ${res.status}: ${error}`);
    }

    return res.json();
}