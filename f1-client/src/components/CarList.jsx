export default function CarList({ cars, onEdit, onDelete }) {
    if (!cars?.length) {
        return <p className="text-gray-500">Nenhum carro cadastrado.</p>
    }
    return (
        <ul className="grid gap-3">
            {cars.map((c) => (
                <li key={c.id} className="bg-white rounded-2xl shadow p-4 flex items-center justify-between">
                    <div>
                        <p className="font-semibold">{c.driver} <span className="text-gray-500">({c.year})</span></p>
                        <p className="text-sm text-gray-600">Equipe: {c.team} • Motor: {c.engine}</p>
                    </div>
                    <div className="flex gap-2">
                        <button onClick={() => onEdit(c)} className="px-3 py-1 rounded-lg border">Editar</button>
                        <button onClick={() => onDelete(c)} className="px-3 py-1 rounded-lg border bg-red-600 text-white">Excluir</button>
                    </div>
                </li>
            ))}
        </ul>
    )
}