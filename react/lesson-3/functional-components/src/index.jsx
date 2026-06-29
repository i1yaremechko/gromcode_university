import { createRoot } from 'react-dom/client'
import './index.scss'
import Search from './Search.jsx'

createRoot(document.getElementById('root')).render(
  <Search name="Tom" />
)
