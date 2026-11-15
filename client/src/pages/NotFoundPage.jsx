
import React from "react";
import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050816] px-4 py-12">

      {/* Background Glow Effects */}
      <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-purple-600/20 blur-[120px]" />

      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

      {/* Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(#22d3ee 1px, transparent 1px), linear-gradient(90deg, #22d3ee 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-3xl text-center">

  

        {/* 404 Number */}
        <div className="relative mb-6">

          <h1
            className="select-none text-[130px] font-black leading-none tracking-widest text-transparent sm:text-[190px] md:text-[240px]"
            style={{
              WebkitTextStroke: "2px #22d3ee",
              textShadow:
                "0 0 10px rgba(34,211,238,0.8), 0 0 30px rgba(34,211,238,0.6), 0 0 70px rgba(168,85,247,0.5)",
            }}
          >
            404
          </h1>

          {/* Decorative Line */}
          <div className="mx-auto mt-5 h-[2px] w-40 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#22d3ee]" />

        </div>

        {/* Heading */}
        <h2 className="mb-4 text-3xl font-extrabold text-white sm:text-4xl">
          Oops! <span className="text-cyan-400">Page Not Found</span>
        </h2>

        {/* Description */}
        <p className="mx-auto mb-9 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
          Looks like you've entered an unknown dimension.
          The page you are searching for might have been removed,
          renamed, or temporarily unavailable.
        </p>

        {/* Buttons */}
        <div className="flex flex-col justify-center gap-4 sm:flex-row">

          <Link
            to="/"
            className="group flex items-center justify-center gap-3 rounded-xl bg-cyan-500 px-8 py-4 font-bold tracking-wider text-slate-950 shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all duration-300 hover:bg-cyan-300 hover:shadow-[0_0_40px_rgba(6,182,212,0.7)] active:scale-95"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
            BACK TO HOME
          </Link>

          <button
            onClick={() => window.history.back()}
            className="rounded-xl border border-purple-400/40 bg-purple-500/10 px-8 py-4 font-bold tracking-wider text-purple-300 transition-all duration-300 hover:border-purple-400 hover:bg-purple-500/20 hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] active:scale-95"
          >
            GO BACK
          </button>

        </div>

       

      </div>
    </div>
  );
};

export default NotFoundPage;
