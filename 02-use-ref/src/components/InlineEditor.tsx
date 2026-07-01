import { useRef, useState } from 'react'

export default function InlineEditor() {
  const inputRef1 = useRef<HTMLInputElement>(null)
  const inputRef2 = useRef<HTMLInputElement>(null)

  const [saved, setSaved] = useState({
    nombre: 'Sin guardar',
    apellido: 'Sin guardar',
  })

  function handleSave() {
    const nombre = inputRef1.current?.value.trim() || '(vacío)'
    const apellido = inputRef2.current?.value.trim() || '(vacío)'
    setSaved({
      nombre,
      apellido,
    })
  }

  function handleClear() {
    if (inputRef1.current) inputRef1.current.value = ''
    if (inputRef2.current) inputRef2.current.value = ''

    inputRef1.current?.focus()
  }

  return (
    <div
      style={{
        maxWidth: 340,
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
      }}
    >
      <p style={{ margin: 0 }}>
        <strong>Nombre:</strong> {saved.nombre}
      </p>

      <p style={{ margin: 0 }}>
        <strong>Apellido:</strong> {saved.apellido}
      </p>

      <input
        ref={inputRef1}
        placeholder="Nombre"
        defaultValue=""
        style={{
          padding: '8px 12px',
          border: '1px solid #d1d5db',
          borderRadius: 6,
        }}
      />

      <input
        ref={inputRef2}
        placeholder="Apellido"
        defaultValue=""
        style={{
          padding: '8px 12px',
          border: '1px solid #d1d5db',
          borderRadius: 6,
        }}
      />

      <div style={{ display: 'flex', gap: 8 }}>
        <button
          onClick={handleSave}
          style={{
            flex: 1,
            padding: '8px',
            background: '#0070f3',
            color: '#fff',
            border: 'none',
            borderRadius: 6,
            cursor: 'pointer',
          }}
        >
          Guardar
        </button>

        <button
          onClick={handleClear}
          style={{
            padding: '8px 16px',
            background: '#f3f4f6',
            color: '#6b7280',
            border: 'none',
            borderRadius: 6,
            cursor: 'pointer',
          }}
        >
          Limpiar
        </button>
      </div>
    </div>
  )
}