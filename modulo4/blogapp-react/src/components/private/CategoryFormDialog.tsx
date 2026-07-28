// src/components/private/CategoryFormDialog.tsx
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { createCategory, updateCategory } from '@/api/categories.api'
import type { Category } from '@/types/category.types'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useToastStore } from '@/store/toast.store'

interface FormValues {
  name: string
}

interface Props {
  open: boolean
  onOpenChange: (open: boolean) => void
  category: Category | null
  onSaved: () => void
}

export default function CategoryFormDialog({ open, onOpenChange, category, onSaved }: Props) {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } =
    useForm<FormValues>({ defaultValues: { name: '' } })
  const showToast = useToastStore((s) => s.show)

  useEffect(() => {
    reset({ name: category?.name ?? '' })
  }, [category, open, reset])

  const onSubmit = async (values: FormValues) => {
    if (category) await updateCategory(category.id, values)
    else await createCategory(values)
    showToast(category ? 'Categoría actualizada' : 'Categoría creada')
    onOpenChange(false)
    onSaved()
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{category ? 'Editar categoría' : 'Nueva categoría'}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <div>
            <Label htmlFor="name">Nombre</Label>
            <Input
              id="name"
              {...register('name', {
                required: 'Nombre es requerido',
                minLength: { value: 2, message: 'Mínimo 2 caracteres' },
              })}
            />
            {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
          </div>
          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? 'Guardando...' : 'Guardar'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
