import CredentialsProvider from 'next-auth/providers/credentials'
import connectDB from './connectDB'
import { User } from '@/models/user';
import bcrypt from 'bcrypt'

export const authOptions = {
    session: {
        strategy: 'jwt'
    },
    providers: [
        CredentialsProvider({
            async authorize(credentials, req) {
                await connectDB();
                const { email, password } = credentials;
                const user = await User.findOne({email});
                if(!user) {
                    throw new Error("Invaild Email or Password")
                }
                const passwordMatch = await bcrypt.compare(password, user.password)
                if(!passwordMatch) {
                    throw new Error("Invalid Email or Password")
                }
                return user;
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/login'
    }
}