'use server'
import type { RowDataPacket } from 'mysql2'
import { z } from 'zod'
import executeQuery from './mysqldb'

export const insertConsult = async (formData: FormData) => {
  const fullname = formData.get('fullname')
  const email = formData.get('email')
  const consult = formData.get('consult')

  const result = z
    .object({
      fullname: z
        .string()
        .min(3, { message: 'Debes ingresar al menos 3 caracteres' }),
      email: z.string().email({ message: 'Correo Electronico Invalido' }),
      consult: z
        .string()
        .min(5, { message: 'Debes ingresar al menos 5 caracteres' }),
    })
    .safeParse({
      fullname,
      email,
      consult,
    })

  if (result.success) {
    try {
      const response = (await executeQuery(
        'INSERT INTO consultas (fullname, email, consult) VALUES (?, ?, ?)',
        [fullname, email, consult],
      )) as RowDataPacket
      
      if (response?.affectedRows) {
        return {
          success: true,
          message: 'Consulta enviada exitosamente'
        }
      }
      
      return {
        success: false,
        message: 'Error al enviar la consulta'
      }

    } catch (error) {
      console.error('Database error:', error)
      return {
        success: false,
        message: 'Error en el servidor',
        error: error instanceof Error ? error.message : 'Unknown error'
      }
    }
  }

  return {
    success: false,
    message: 'Error de validación',
    errors: result.error.flatten().fieldErrors
  }
}
