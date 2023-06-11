import { createBrowserRouter } from 'react-router-dom'
import { clientRouter } from './client'

export const router = createBrowserRouter([...clientRouter])
