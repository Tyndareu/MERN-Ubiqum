import { FaHome, FaStepBackward } from 'react-icons/fa'
import { Link } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export const Footer = () => {
  const URL = window.location.pathname
  const navigate = useNavigate()
  return (
    <div className='mt-5' style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
      <Link hidden={URL === '/'} onClick={() => navigate(-1)}><FaStepBackward /></Link>
      <Link hidden={URL === '/'} onClick={() => navigate('/')}> <FaHome /> </Link>
    </div>
  )
}
