import { FaMusic, FaPlane, FaTrain, FaArrowCircleRight } from 'react-icons/fa'
import { MdRestaurant } from 'react-icons/md'
import { Footer } from './Footer'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

export const Landing = () => {
  return (
        <>
            <h1 className='mt-5'><strong>MYtineracy</strong></h1>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '90%', margin: 'auto' }}>
                <FaMusic className='circle' />
                <FaPlane className='circle' />
                <MdRestaurant className='circle' />
                <FaTrain className='circle' />
            </div>
            <h4 className='mt-5'>Find your perfect trip, designed by insider who know and love their cities</h4>
            <h2 className='mt-5'><strong>Start browsing</strong></h2>
            <Link to={('./cities')}> <FaArrowCircleRight /></Link>
            <h4 className='mt-5'>Want to build your own MYtineracy?</h4>
            <div className='mt-5' style={{ display: 'flex', justifyContent: 'space-between', width: '70%', margin: 'auto' }}>
                <Button variant="contained" color="primary">Login</Button>
                <Button variant="contained" color="primary">Register</Button>
            </div>
            <Footer />
        </>
  )
}
