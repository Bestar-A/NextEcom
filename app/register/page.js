'use client'
import { useState } from "react"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"

export default function Register() {
    const [name, setName] = useState('Bestar')
    const [email, setEmail] = useState('bestar@email.com')
    const [password, setPassword] = useState('123123')
    const [loading, setLoading] = useState(false)

    const router = useRouter()

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
            const response = await fetch(`${process.env.API}/register`, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password })
            })
            const data = await response.json();
            if(!response.ok) {
                toast.error(data.error)
                setLoading(false)
            } else {
                toast.success(data.success)
                setLoading(false)
                router.push('/login')
            }
        } catch (error) {
            console.log(error.error)
            setLoading(false)
        }
    }

    return (
        <main className="h-100">
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-5 shadow bg-light p-5">
                        <h2 className="mb-4 text-center">Register</h2>

                        <form onSubmit={submitHandler}>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)}
                                className="form-control mb-4" placeholder="Enter your name"/>
                            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}
                                className="form-control mb-4" placeholder="Enter your email"/>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                                className="form-control mb-4" placeholder="Enter your password"/>
                            <button type="submit" className="btn btn-primary btn-raised"
                                disabled={loading || !name || !email || !password}>
                                    {loading ? "Please wait..." : 'Register'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}