import { useState } from 'react'

export default function CarForm({ onSubmit, initial }) {
    const [driver, setDriver] = useState(initial?.driver || '')
    const [team, setTeam] = useState(initial?.team || '')
    const [year, setYear] = useState(initial?.year || '')
    const [engine, setEngine] = useState(initial?.engine || '')

    function handleSubmit(e) {
        e.preventDefault()
        onSubmit({ driver, team, year: Number(year), engine })
        if (!initial) { // se é create, limpa
            setDriver(''); setTeam(''); setYear(''); setEngine('')
        }
    }

    return (
        <form onSubmit={handleSubmit} className="grid gap-3 bg-white p-4 rounded-2xl shadow">
            <div>
                <label className="block text-sm mb-1">Piloto</label>
                <input className="w-full border rounded-lg px-3 py-2" value={driver} onChange={e => setDriver(e.target.value)} required />
            </div>
            <div>
                <label className="block text-sm mb-1">Equipe</label>
                <input className="w-full border rounded-lg px-3 py-2" value={team} onChange={e => setTeam(e.target.value)} required />
            </div>
            <div className="grid grid-cols-2 gap-3">
                <div>
                    <label className="block text-sm mb-1">Ano</label>
                    <input type="number" className="w-full border rounded-lg px-3 py-2" value={year} onChange={e => setYear(e.target.value)} required />
                </div>
                <div>
                    <label className="block text-sm mb-1">Motor</label>
                    <input className="w-full border rounded-lg px-3 py-2" value={engine} onChange={e => setEngine(e.target.value)} required />
                </div>
            </div>
            <button className="bg-black text-white rounded-lg px-4 py-2 hover:opacity-90">{initial ? 'Salvar' : 'Adicionar'}</button>
        </form>
    )
}