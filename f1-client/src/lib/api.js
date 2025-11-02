const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export async function apiGet(path) {
    const res = await fetch(`${BASE_URL}${path}`);
    if (!res.ok) throw new Error('Erro ao buscar');
    return res.json();
}

export async function apiPost(path, body) {
    const res = await fetch(`${BASE_URL}${path}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
    });
    if (!res.ok) throw new Error('Erro ao criar');
    return res.json();
}

export async function apiPut(path, body) {
    const res = await fetch(`${BASE_URL}${path}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
    });
    if (!res.ok) throw new Error('Erro ao atualizar');
    return res.json();
}

export async function apiPatch(path, body) {
    const res = await fetch(`${BASE_URL}${path}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
    });
    if (!res.ok) throw new Error('Erro ao atualizar parcialmente');
    return res.json();
}

export async function apiDelete(path) {
    const res = await fetch(`${BASE_URL}${path}`, { method: 'DELETE' });
    if (!res.ok) throw new Error('Erro ao deletar');
    return res.json();
}