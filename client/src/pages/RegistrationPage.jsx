
import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios"
const RegistrationPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const navigate = useNavigate()
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await axios.post("http://localhost:5000/registration", formData)
            toast.success(data.data.message)
            setFormData({
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
            })

        } catch (error) {
            toast.error(error.response.data.message)
        }
    };

    const inputStyle =
        "w-full rounded-xl border border-cyan-500/30 bg-slate-950/70 px-4 py-3.5 text-white placeholder-slate-500 outline-none transition duration-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20";

    return (
        <div className="relative min-h-screen overflow-hidden bg-[#050816] px-4 py-12 flex items-center justify-center">
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            {/* Background Glow */}
            <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]" />

            <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-purple-600/20 blur-[120px]" />

            {/* Registration Card */}
            <div className="relative z-10 w-full max-w-md rounded-3xl border border-cyan-400/20 bg-slate-900/70 p-6 shadow-[0_0_50px_rgba(6,182,212,0.12)] backdrop-blur-xl sm:p-9">

                {/* Logo */}
                <div className="mb-8 text-center">


                    <h1 className="text-3xl font-extrabold tracking-wider text-white">
                        CREATE <span className="text-cyan-400">ACCOUNT</span>
                    </h1>

                    <p className="mt-2 text-sm text-slate-400">
                        Join us and start your journey today.
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">

                    {/* Full Name */}
                    <div>
                        <label className="mb-2 block text-sm font-semibold tracking-wide text-cyan-300">
                            FULL NAME
                        </label>

                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            className={inputStyle}
                            required
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="mb-2 block text-sm font-semibold tracking-wide text-cyan-300">
                            EMAIL ADDRESS
                        </label>

                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            className={inputStyle}
                            required
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="mb-2 block text-sm font-semibold tracking-wide text-cyan-300">
                            PASSWORD
                        </label>

                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter your password"
                                className={`${inputStyle} pr-20`}
                                minLength={8}
                                required
                            />

                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-cyan-400 hover:text-white"
                            >
                                {showPassword ? "HIDE" : "SHOW"}
                            </button>
                        </div>
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="mb-2 block text-sm font-semibold tracking-wide text-cyan-300">
                            CONFIRM PASSWORD
                        </label>

                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="Confirm your password"
                            className={inputStyle}
                            required
                        />
                    </div>

                    {/* Terms */}
                    <label className="flex cursor-pointer items-start gap-3 text-sm text-slate-400">
                        <input
                            type="checkbox"
                            required
                            className="mt-1 accent-cyan-400"
                        />
                        <span>
                            I agree to the{" "}
                            <a href="/terms" className="text-cyan-400 hover:underline">
                                Terms & Conditions
                            </a>
                        </span>
                    </label>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="group relative w-full overflow-hidden rounded-xl bg-cyan-500 py-4 font-bold tracking-widest text-slate-950 shadow-[0_0_25px_rgba(6,182,212,0.35)] transition-all duration-300 hover:bg-cyan-300 hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] active:scale-[0.98]"
                    >
                        CREATE ACCOUNT
                        <span className="ml-2 transition-transform group-hover:translate-x-1 inline-block">
                            →
                        </span>
                    </button>

                </form>

                {/* Login Link */}
                <p className="mt-7 text-center text-sm text-slate-400">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="font-bold text-cyan-400 transition hover:text-cyan-200 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>

            </div>
        </div>
    );
};

export default RegistrationPage;
