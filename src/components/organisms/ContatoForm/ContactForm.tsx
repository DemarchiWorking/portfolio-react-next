'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import { useMetaEvents } from '@/hooks/useMetaEvents'

interface ContactFormProps {
  accessKey: string
}

export function ContactForm({ accessKey }: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const { trackLead, trackContact } = useMetaEvents()

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('loading')

    const formData = new FormData(event.currentTarget)

    formData.append('access_key', accessKey)
    formData.append('subject', 'Novo Contato do Portfólio — Antonio Demarchi')
    formData.append('from_name', 'Portfolio Demarchi')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      const data = (await response.json()) as { success: boolean; message?: string }

      if (data.success) {
        trackLead('contact_form')
        trackContact('contact_form')
        setStatus('success')
      } else {
        console.error('Web3Forms Error:', data.message)
        setStatus('error')
      }
    } catch (error) {
      console.error('Network Error:', error)
      setStatus('error')
    }
  }

  return (
    <section className="w-full">
      <AnimatePresence mode="wait">
        {status !== "success" ? (
          <motion.form
            key="contact-form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-6 p-1"
          >
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-semibold text-foreground/80 ml-1">
                  Nome Completo
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  type="text"
                  placeholder="Como posso te chamar?"
                  className="w-full bg-card/40 border border-border rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-pink-500/40 focus:border-pink-500 transition-all backdrop-blur-sm"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-semibold text-foreground/80 ml-1">
                  E-mail Profissional
                </label>
                <input
                  id="email"
                  name="email"
                  required
                  type="email"
                  placeholder="exemplo@dominio.com"
                  className="w-full bg-card/40 border border-border rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-pink-500/40 focus:border-pink-500 transition-all backdrop-blur-sm"
                />
              </div>
            </div>

            {/* NOVO CAMPO: WhatsApp */}
            <div className="flex flex-col gap-2">
              <label htmlFor="whatsapp" className="text-sm font-semibold text-foreground/80 ml-1">
                WhatsApp
              </label>
              <input
                id="whatsapp"
                name="whatsapp"
                required
                type="tel"
                placeholder="(24) 99999-9999 Telefone Contato"
                className="w-full bg-card/40 border border-border rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-pink-500/40 focus:border-pink-500 transition-all backdrop-blur-sm"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-semibold text-foreground/80 ml-1">
                Sua Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Descreva seu projeto ou dúvida..."
                className="w-full bg-card/40 border border-border rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-pink-500/40 focus:border-pink-500 transition-all backdrop-blur-sm resize-none"
              />
            </div>

            {/* BOTÃO COM ANIMAÇÃO MODERNA (FILL DA DIREITA PARA ESQUERDA + ZOOM) */}
            <motion.button
              disabled={status === "loading"}
              type="submit"
              className="group relative w-full py-5 overflow-hidden rounded-2xl border-2 border-[#1C398E] bg-transparent text-[#1C398E] dark:text-gray-200 font-black uppercase tracking-widest flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.03] disabled:opacity-50 shadow-lg shadow-pink-500/10 cursor-pointer"
            >
              {/* Overlay de cor animado */}
              <span className="absolute inset-0 translate-x-full bg-[#1C398E] transition-transform duration-500 ease-out group-hover:translate-x-0"></span>

              {/* Conteúdo do botão com Z-Index para ficar acima do overlay */}
              <span className="relative z-10 flex items-center gap-3 group-hover:text-white transition-colors duration-300">
                {status === "loading" ? (
                  <Loader2 className="animate-spin" size={24} />
                ) : (
                  <>
                    Enviar Solicitação
                    <Send size={20} className="transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </span>
            </motion.button>

            {status === "error" && (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="flex items-center justify-center gap-2 text-red-500 font-medium bg-red-500/10 py-3 rounded-xl border border-red-500/20"
              >
                <AlertCircle size={18} />
                <span>Erro ao enviar. Verifique sua conexão ou Access Key.</span>
              </motion.div>
            )}
          </motion.form>
        ) : (
          <motion.div
            key="success-message"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-16 px-6 text-center bg-card/30 border border-border rounded-3xl backdrop-blur-md"
          >
            <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mb-6 shadow-inner text-green-500">
              <CheckCircle2 size={48} />
            </div>
            <h3 className="text-3xl font-extrabold mb-3 tracking-tighter text-foreground">Mensagem Enviada!</h3>
            <p className="text-muted-foreground max-w-sm mb-8">
              Sua solicitação foi processada. Em breve retornarei no e-mail informado.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="px-8 py-3 rounded-xl border border-border hover:bg-muted transition-colors text-sm font-bold uppercase tracking-tighter text-foreground"
            >
              Enviar nova mensagem
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}