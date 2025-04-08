import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

function Register() {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("Utilisateur inscrit :", userCredential.user);
    })
    .catch((error) => {
      console.error("Erreur :", error.message);
    });
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white font-sans relative overflow-hidden">
      {/* Background animé */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-[150%] h-[150%] bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 animate-spin-slow blur-3xl opacity-10 rounded-full"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-black/70 backdrop-blur-lg p-10 rounded-3xl shadow-lg w-full max-w-md z-10"
      >
        <h2 className="text-3xl font-bold text-purple-500 mb-6 text-center">Créer un compte</h2>

        <form className="space-y-5">
          <div>
            <label className="block mb-1 text-gray-300">Nom complet</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-2 rounded-xl bg-gray-800 text-white border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-300">Email</label>
            <input
              type="email"
              placeholder="exemple@mail.com"
              className="w-full px-4 py-2 rounded-xl bg-gray-800 text-white border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-300">Mot de passe</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-xl bg-gray-800 text-white border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-xl shadow-md neon-glow"
          >
            S'inscrire
          </motion.button>
        </form>

        <p className="text-center mt-6 text-sm text-gray-400">
          Vous avez déjà un compte ?{" "}
          <Link to="/login" className="text-purple-400 hover:underline">
            Connectez-vous
          </Link>
        </p>
      </motion.div>
    </div>
  );
}

export default Register;
