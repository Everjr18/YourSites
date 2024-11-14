'use server'
import type { RowDataPacket } from 'mysql2'
import { z } from 'zod'
import executeQuery from './mysqldb'
import type { FormState } from '../contactcta/contactCTA'


export const insertConsult = async (prevState: FormState, formData: FormData): Promise<FormState> => {
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
          message: 'Consulta enviada exitosamente',
          errors: {}
        } as FormState
      }
      
      return {
        success: false,
        message: 'Error al enviar la consulta',
        errors: {}
      } as FormState

    } catch (error) {
      return {
        success: false,
        message: 'Intentalo mas tarde',
        errors: {},
        error: error instanceof Error ? error.message : 'Unknown error'
      } as FormState
    }
  }

  return {
    success: false,
    message: 'Error de validación',
    errors: result.error.flatten().fieldErrors
  } as FormState
  
}
