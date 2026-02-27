/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Share, MoreVertical, PlusSquare, ArrowRight, Smartphone, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [showInstructions, setShowInstructions] = useState(false);
  const [platform, setPlatform] = useState<'ios' | 'android' | 'other'>('other');

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod/.test(userAgent)) {
      setPlatform('ios');
    } else if (/android/.test(userAgent)) {
      setPlatform('android');
    }
  }, []);

  const handleCreateShortcut = () => {
    // Redirect to the target URL
    window.location.href = 'https://jornadacristaapp.vercel.app/';
  };

  return (
    <div className="min-h-screen bg-[#f5f5f0] flex flex-col items-center justify-center p-6 font-sans text-[#1a1a1a]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white rounded-[32px] shadow-xl shadow-black/5 p-8 text-center border border-black/5"
      >
        <div className="mb-8 flex justify-center">
          <div className="w-20 h-20 bg-[#5A5A40] rounded-3xl flex items-center justify-center shadow-lg shadow-[#5A5A40]/20">
            <Smartphone className="text-white w-10 h-10" />
          </div>
        </div>

        <h1 className="text-2xl font-semibold mb-2 tracking-tight">Jornada Cristã</h1>
        <p className="text-[#5A5A40] mb-8 text-sm font-medium">
          Crie um atalho na sua tela inicial para acessar rapidamente.
        </p>

        <button
          id="create-shortcut-btn"
          onClick={handleCreateShortcut}
          className="w-full bg-[#5A5A40] hover:bg-[#4a4a35] text-white font-semibold py-4 px-6 rounded-2xl transition-all active:scale-95 flex items-center justify-center gap-2 shadow-md"
        >
          Criar atalho de aplicativo
          <ArrowRight className="w-5 h-5" />
        </button>

        <button
          onClick={() => setShowInstructions(!showInstructions)}
          className="mt-6 text-sm text-[#5A5A40]/60 hover:text-[#5A5A40] flex items-center justify-center gap-1 mx-auto transition-colors"
        >
          <Info className="w-4 h-4" />
          Como adicionar manualmente?
        </button>

        <AnimatePresence>
          {showInstructions && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="mt-8 pt-8 border-t border-black/5 text-left space-y-6">
                {platform === 'ios' ? (
                  <div className="space-y-4">
                    <h3 className="font-semibold text-sm uppercase tracking-wider text-[#5A5A40]">Passos para iPhone/iPad</h3>
                    <div className="flex gap-4 items-start">
                      <div className="bg-[#f5f5f0] p-2 rounded-lg">
                        <Share className="w-5 h-5 text-[#5A5A40]" />
                      </div>
                      <p className="text-sm leading-relaxed">
                        1. Toque no botão de <strong>Compartilhar</strong> na barra inferior do Safari.
                      </p>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="bg-[#f5f5f0] p-2 rounded-lg">
                        <PlusSquare className="w-5 h-5 text-[#5A5A40]" />
                      </div>
                      <p className="text-sm leading-relaxed">
                        2. Role para baixo e selecione <strong>Adicionar à Tela de Início</strong>.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <h3 className="font-semibold text-sm uppercase tracking-wider text-[#5A5A40]">Passos para Android</h3>
                    <div className="flex gap-4 items-start">
                      <div className="bg-[#f5f5f0] p-2 rounded-lg">
                        <MoreVertical className="w-5 h-5 text-[#5A5A40]" />
                      </div>
                      <p className="text-sm leading-relaxed">
                        1. Toque nos <strong>três pontos</strong> no canto superior direito do Chrome.
                      </p>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="bg-[#f5f5f0] p-2 rounded-lg">
                        <Smartphone className="w-5 h-5 text-[#5A5A40]" />
                      </div>
                      <p className="text-sm leading-relaxed">
                        2. Selecione <strong>Instalar aplicativo</strong> ou <strong>Adicionar à tela inicial</strong>.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <footer className="mt-8 text-[#5A5A40]/40 text-xs uppercase tracking-[0.2em]">
        Jornada Cristã &copy; 2024
      </footer>
    </div>
  );
}
