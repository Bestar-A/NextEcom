'use client';
import { useState } from "react"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"
import { signIn } from 'next-auth/react'

export default function Register() {
    const [email, setEmail] = useState('bestar@email.com')
    const [password, setPassword] = useState('123123')
    const [loading, setLoading] = useState(false)

    const router = useRouter()

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
            const result = await signIn('credentials', {
                redirect: false, email, password
            })
            if(result?.error){
                toast.error(result?.error)
                setLoading(false)
            } else {
                toast.success("Logged In Succefully")
                router.push('/')
            }
        } catch (error) {
            setLoading(false)
        }
    }

    return (
        <main className="h-100">
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-5 shadow bg-light p-5">
                        <h2 className="mb-4 text-center">Login</h2>

                        <form onSubmit={submitHandler}>
                            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}
                                className="form-control mb-4" placeholder="Enter your email"/>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                                className="form-control mb-4" placeholder="Enter your password"/>
                            <button type="submit" className="btn btn-primary btn-raised"
                                disabled={loading || !email || !password}>
                                    {loading ? "Please wait..." : 'Login'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}