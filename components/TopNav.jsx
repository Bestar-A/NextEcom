'use client';
import Link from 'next/link'
import React from 'react'
import { useSession } from 'next-auth/react';

const TopNav = () => {
    const { data, status, loading } = useSession();
    console.table(data, status, loading);
    return (
        <nav className='nav shadow p-4 justify-content-between mb-3'>
            <Link href='/' className='nav-link'>
                <h4 className="text-capitalize">
                    <span className='text-primary'>Next</span>
                    <span className='text-secondary'>Ecom</span>
                </h4>
            </Link>

            <div className="d-flex">
                <Link href='/login' className='nav-link'>
                    Login
                </Link>
                <Link href='/register' className='nav-link'>
                    Register
                </Link>
            </div>
        </nav>
    )
}

export default TopNav