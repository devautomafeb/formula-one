import { useEffect, useState } from 'react'
import { apiGet, apiPost, apiPut, apiDelete } from './lib/api'
import CarForm from './components/CarForm'
import CarList from './components/CarList'

export default function App() {
  const [cars, setCars] = useState([])
  const [editing, setEditing] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function loadCars() {
    setLoading(true)
    setError('')
    try {
      const data = await apiGet('/api/cars')
      setCars(data)
    } catch (e) {
      console.error(e)
      setError('Falha ao carregar carros')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadCars()
  }, [])

  async function handleCreate(payload) {
    try {
      const created = await apiPost('/api/cars', payload)
      setCars(prev => [created, ...prev])
    } catch (e) {
      alert('Erro ao criar carro')
    }
  }

  async function handleUpdate(payload) {
    try {
      const updated = await apiPut(`/api/cars/${editing.id}`, payload)
      setCars(prev => prev.map(c => (c.id === editing.id ? updated : c)))
      setEditing(null)
    } catch (e) {
      alert('Erro ao atualizar carro')
    }
  }

  async function handleDelete(car) {
    if (!confirm(`Excluir ${car.driver}?`)) return
    try {
      await apiDelete(`/api/cars/${car.id}`)
      setCars(prev => prev.filter(c => c.id !== car.id))
    } catch (e) {
      alert('Erro ao excluir carro')
    }
  }

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-8">
      <header className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">🏎️ F1 Cars</h1>
        <button
          onClick={loadCars}
          className="px-4 py-2 border rounded-lg hover:bg-gray-100"
        >
          Recarregar
        </button>
      </header>

      {error && (
        <div className="bg-red-100 border border-red-300 text-red-800 p-3 rounded-lg">
          {error}
        </div>
      )}

      <section className="space-y-4">
        <h2 className="font-semibold text-lg">
          {editing ? 'Editar Carro' : 'Adicionar Novo Carro'}
        </h2>
        <CarForm
          onSubmit={editing ? handleUpdate : handleCreate}
          initial={editing}
        />
        {editing && (
          <button
            onClick={() => setEditing(null)}
            className="text-sm text-blue-600 underline"
          >
            Cancelar edição
          </button>
        )}
      </section>

      <section className="space-y-3">
        <h2 className="font-semibold text-lg">Lista de Carros</h2>
        {loading ? (
          <p>Carregando...</p>
        ) : (
          <CarList cars={cars} onEdit={setEditing} onDelete={handleDelete} />
        )}
      </section>
    </div>
  )
}
