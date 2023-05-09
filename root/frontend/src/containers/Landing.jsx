import { FaMusic, FaPlane, FaTrain, FaArrowCircleRight } from 'react-icons/fa'
import { MdRestaurant } from 'react-icons/md'
import { Footer } from './Footer'
import Button from '@mui/material/Button'
import { Link } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export const Landing = () => {
  const navigate = useNavigate()
  return (
        <>
            <h1 ><strong>MYtineracy</strong></h1>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 5 }}>
                <FaMusic className='circle' />
                <FaPlane className='circle' />
                <MdRestaurant className='circle' />
                <FaTrain className='circle' />
            </div>
            <h4 style={{ marginTop: 15 }}> Find your perfect trip, designed by insider who know and love their cities</h4>
            <h2 style={{ marginTop: 15 }}><strong>Start browsing</strong></h2>
            <Link onClick={() => navigate('/cities')}> <FaArrowCircleRight /></Link>
            <h4 style={{ marginTop: 15 }}>Want to build your own MYtineracy?</h4>
            <div style={{ marginTop: 15, display: 'flex', justifyContent: 'space-between', width: '70%', margin: 'auto' }}>
                <Button variant="contained" color="primary">Login</Button>
                <Button variant="contained" color="primary">Register</Button>
            </div>
            <Footer />
        </>
  )
}
