import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

function Login() {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("Utilisateur inscrit :", userCredential.user);
    })
    .catch((error) => {
      console.error("Erreur :", error.message);
    });
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black font-sans overflow-hidden">
      {/* Arrière-plan animé */}
      <div className="absolute inset-0 z-0">
        <div className="w-[150%] h-[150%] bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 animate-spin-slow blur-3xl opacity-10 rounded-full"></div>
      </div>

      {/* Carte de connexion */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="z-10 bg-black/80 backdrop-blur-xl border border-purple-500/30 rounded-3xl shadow-2xl p-8 md:p-10 w-full max-w-md"
      >
        <h2 className="text-3xl font-extrabold text-purple-400 text-center mb-6">
          Connexion à <span className="text-white">CoachX</span>
        </h2>

        <form className="space-y-6">
          <div>
            <label className="block mb-2 text-sm text-purple-300">Email</label>
            <input
              type="email"
              placeholder="exemple@mail.com"
              className="w-full px-4 py-2 bg-black border border-purple-500/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-purple-300">Mot de passe</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 bg-black border border-purple-500/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.03, boxShadow: "0 0 20px #a855f7" }}
            whileTap={{ scale: 0.97 }}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-xl shadow-md neon-glow"
          >
            Se connecter
          </motion.button>
        </form>

        <p className="text-center mt-6 text-sm text-gray-400">
          Pas encore de compte ?{" "}
          <Link to="/register" className="text-purple-400 hover:underline">
            S’inscrire
          </Link>
        </p>
      </motion.div>
    </div>
  );
}

export default Login;
