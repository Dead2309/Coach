import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="min-h-screen text-white font-sans animated-bg bg-black relative overflow-hidden">
            {/* Header */}
            <header className="flex justify-between items-center px-6 py-4 bg-black/80 backdrop-blur-md shadow-md z-10 relative">
                <h1 className="text-2xl font-bold text-purple-500">Coach</h1>
                <nav className="space-x-6 flex items-center">
                    <Link to="/" className="hover:text-purple-400">Accueil</Link>
                    <Link to="/a-propos" className="hover:text-purple-400">À propos</Link>
                    <Link to="/contact" className="hover:text-purple-400">Contact</Link>
                    <Link
                        to="/register"
                        className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-1.5 rounded-xl shadow-md neon-glow ml-4"
                    >
                        S'inscrire
                    </Link>
                </nav>

            </header>

            {/* Background animé */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="w-[150%] h-[150%] bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 animate-spin-slow blur-3xl opacity-10 rounded-full"></div>
            </div>

            {/* Hero Section */}
            <section className="relative grid grid-cols-1 md:grid-cols-2 items-center px-8 py-20 z-10">
                {/* Contenu texte */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                        Coaching sportif <span className="text-purple-500">futuriste</span>
                    </h2>
                    <p className="mt-6 text-lg text-gray-300">
                        Une plateforme pensée pour les coachs et les clients de demain. Organisation, suivi et motivation au top.
                    </p>
                    <div className="mt-8 flex gap-4">
                        <motion.a
                            href="/login"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-purple-500 hover:bg-purple-700 text-white py-2 px-6 rounded-2xl shadow-md neon-glow"
                        >
                            Je suis Coach
                        </motion.a>
                        <motion.a
                            href="/login"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white hover:bg-gray-100 text-black py-2 px-6 rounded-2xl shadow-md neon-glow"
                        >
                            Je suis Client
                        </motion.a>
                    </div>
                </motion.div>

                {/* Image principale */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                    className="mt-10 md:mt-0 flex justify-center"
                >
                    <img
                        src="/hero-futuriste.png"
                        alt="coach et client"
                        className="w-full max-w-md drop-shadow-[0_0_30px_rgba(192,132,252,0.5)] rounded-xl"
                    />
                </motion.div>
            </section>
        </div>
    );
}

export default Home;

