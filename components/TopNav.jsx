import Link from 'next/link'
import React from 'react'

const TopNav = () => {
  return (
    <nav className='nav shadow p-2 justify-content-between mb-3'>
        <Link href='/' className='nav-link'>
            NextEcom
        </Link>
    </nav>
  )
}

export default TopNav