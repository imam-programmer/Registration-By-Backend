
import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { Link } from "react-router";


const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
        password: "",

    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const data = await axios.post("http://localhost:5000/login", formData)
           toast.success(data.data)
            setFormData({ email: "", password: "" })
        } catch (error) {

        toast.error(error.response.data.message.password)
        }
    };

    const inputStyle =
        "w-full rounded-xl border border-cyan-500/30 bg-slate-950/70 px-4 py-4 text-white placeholder-slate-500 outline-none transition duration-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20";

    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050816] px-4 py-12">
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            {/* Background Effects */}
            <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]" />

            <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-purple-600/20 blur-[120px]" />

            <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[100px]" />

            {/* Login Card */}
            <div className="relative z-10 w-full max-w-md rounded-3xl border border-cyan-400/20 bg-slate-900/70 p-7 shadow-[0_0_50px_rgba(6,182,212,0.12)] backdrop-blur-xl sm:p-10">

                {/* Logo */}
                <div className="mb-8 text-center">

                    <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/40 bg-cyan-400/10 shadow-[0_0_25px_rgba(34,211,238,0.25)]">

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-9 w-9 text-cyan-300"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.1a7.5 7.5 0 0 1 15 0A17.9 17.9 0 0 1 12 21.75a17.9 17.9 0 0 1-7.5-1.65Z"
                            />
                        </svg>

                    </div>

                    <h1 className="text-3xl font-extrabold tracking-wider text-white">
                        WELCOME <span className="text-cyan-400">BACK</span>
                    </h1>

                    <p className="mt-2 text-sm text-slate-400">
                        Login to continue your journey.
                    </p>

                </div>

                {/* Login Form */}
                <form onSubmit={handleSubmit} className="space-y-6">

                    {/* Email */}
                    <div>

                        <label className="mb-2 block text-sm font-semibold tracking-wide text-cyan-300">
                            EMAIL ADDRESS
                        </label>

                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400">
                                ✉
                            </span>

                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                className={`${inputStyle} pl-12`}
                                required
                            />
                        </div>

                    </div>

                    {/* Password */}
                    <div>

                        <label className="mb-2 block text-sm font-semibold tracking-wide text-cyan-300">
                            PASSWORD
                        </label>

                        <div className="relative">

                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400">
                                🔒
                            </span>

                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter your password"
                                className={`${inputStyle} pl-12 pr-20`}
                                required
                            />

                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-cyan-400 transition hover:text-white"
                            >
                                {showPassword ? "HIDE" : "SHOW"}
                            </button>

                        </div>

                    </div>

                    {/* Remember & Forgot Password */}
                    <div className="flex flex-wrap items-center justify-between gap-3 text-sm">

                        <label className="flex cursor-pointer items-center gap-2 text-slate-400">
                            <input
                                type="checkbox"

                                className="h-4 w-4 accent-cyan-400"
                            />
                            Remember me
                        </label>

                        <a
                            href="/forgot-password"
                            className="font-semibold text-cyan-400 transition hover:text-cyan-200 hover:underline"
                        >
                            Forgot Password?
                        </a>

                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="group relative w-full overflow-hidden rounded-xl bg-cyan-500 py-4 font-bold tracking-widest text-slate-950 shadow-[0_0_25px_rgba(6,182,212,0.35)] transition-all duration-300 hover:bg-cyan-300 hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] active:scale-[0.98]"
                    >
                        SIGN IN
                        <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                            →
                        </span>
                    </button>

                </form>

                {/* Register Link */}
                <div className="mt-8 text-center">

                    <p className="text-sm text-slate-400">
                        Don't have an account?{" "}
                        <Link
                            to="/"
                            className="font-bold text-cyan-400 transition hover:text-cyan-200 hover:underline"
                        >
                            Create Account
                        </Link>
                    </p>

                </div>

                {/* Footer */}
                <div className="mt-8 border-t border-slate-700/60 pt-5 text-center">

                    <p className="text-xs tracking-widest text-slate-600">
                        SECURE LOGIN • NEON EXPERIENCE
                    </p>

                </div>

            </div>
        </div>
    );
};

export default LoginPage;
