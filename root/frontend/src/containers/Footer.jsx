import { FaHome, FaStepBackward } from 'react-icons/fa'
import { Link } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export const Footer = () => {
  const URL = window.location.pathname
  const navigate = useNavigate()
  return (
    <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginTop: 15, cursor: 'pointer' }}>
      <Link hidden={URL === '/'} onClick={() => navigate(-1)}><FaStepBackward /></Link>
      <Link hidden={URL === '/'} onClick={() => navigate('/')}> <FaHome /> </Link>
    </div>
  )
}
