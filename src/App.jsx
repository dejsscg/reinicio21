import React, { useState, useEffect } from 'react';
import { BookOpen, Check, X, BatteryWarning, Zap, Anchor, Compass, Clock, ShieldCheck, ArrowRight, Menu } from 'lucide-react';

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCheckout = () => {
    const checkoutElement = document.getElementById('checkout');
    if (checkoutElement) {
      checkoutElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200 font-sans selection:bg-orange-500 selection:text-white">

      {/* Sticky Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-gray-800 py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tighter text-white">
            REINICIO<span className="text-orange-500">21</span>
          </div>
          <button onClick={scrollToCheckout} className="bg-white text-black px-5 py-2 rounded-full font-bold text-sm hover:bg-orange-500 hover:text-white transition-colors duration-300">
            Descargar Ahora
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
        {/* Gradient background effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-600/20 rounded-full blur-[120px] -z-10"></div>

        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-semibold tracking-wide uppercase">
            Método Guiado
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
            21 Días Para <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Recuperarte</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
            El método diario, simple y guiado para salir del estancamiento mental y volver a sentir claridad, enfoque y dirección.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-16">
            <button onClick={scrollToCheckout} className="w-full md:w-auto px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg shadow-orange-900/20 flex items-center justify-center gap-2">
              Empezar el Día 1 <ArrowRight size={20} />
            </button>
            <p className="text-sm text-gray-500 mt-4 md:mt-0 md:ml-4">
              <span className="block font-semibold text-gray-300">Descarga inmediata</span>
              Formato digital (PDF Interactivo)
            </p>
          </div>

          {/* Quote Block */}
          <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl backdrop-blur-sm inline-block">
            <h3 className="text-lg font-semibold text-white mb-2">La verdad cruda:</h3>
            <p className="text-gray-400 italic">
              "No necesitas motivación. No necesitas más teoría.<br />
              Solo un proceso claro que puedas seguir diariamente."
            </p>
          </div>
        </div>
      </header>

      {/* Pain Points Section */}
      <section className="py-20 bg-gray-900 border-y border-gray-800">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <div className="relative">
                {/* Soft glow effect around the card */}
                <div className="absolute -inset-4 bg-red-500/10 rounded-2xl blur-xl"></div>
                <div className="relative bg-black p-8 rounded-2xl border border-gray-800">
                  <BatteryWarning className="w-12 h-12 text-red-500 mb-6" />
                  <h2 className="text-3xl font-bold text-white mb-4">¿Sientes esto últimamente?</h2>
                  <p className="text-gray-400">Si esto te describe, no estás solo. Y no estás roto. Solo estás bloqueado.</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              {[
                "Te despiertas cansado sin siquiera haber empezado el día",
                "Sientes que ya no sabes hacia dónde vas",
                "Sabes que podrías más… pero no arrancas",
                "Tu mente está saturada, dispersa, cargada",
                "La vida parece repetirse cada semana",
                "Estás harto de estar estancado",
                "Y cada día postergas tu verdadero cambio"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 min-w-[20px]">
                    <X className="w-5 h-5 text-red-500" />
                  </div>
                  <p className="text-gray-300 text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Pivot / Solution */}
      <section className="py-24 px-6 text-center">
        <div className="container mx-auto max-w-3xl">
          <div className="mb-8">
            <Zap className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">La verdad es esta:</h2>
            <p className="text-2xl text-gray-300 leading-relaxed">
              El problema no es la falta de motivación… <br />
              <span className="text-orange-500 font-bold">es la falta de claridad y estructura mental.</span>
            </p>
          </div>
          <p className="text-lg text-gray-500">Y eso es exactamente lo que este programa corrige.</p>
        </div>
      </section>

      {/* What is this ebook */}
      <section className="py-20 bg-[#0f0f0f]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">✍️ Qué es este ebook</h2>
            <p className="text-xl text-gray-400">Es un ritual diario. Una guía clara. Un proceso transformador.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Compass className="w-6 h-6" />, title: "Limpiar tu mente", desc: "Elimina el ruido mental acumulado." },
              { icon: <Anchor className="w-6 h-6" />, title: "Recuperar enfoque", desc: "Vuelve a lo esencial." },
              { icon: <Zap className="w-6 h-6" />, title: "Reconstruir disciplina", desc: "Sin fuerza de voluntad extrema." },
              { icon: <ShieldCheck className="w-6 h-6" />, title: "Soltar ruido emocional", desc: "Deja ir lo que pesa." },
              { icon: <BookOpen className="w-6 h-6" />, title: "Crear claridad interna", desc: "Define tu siguiente paso." },
              { icon: <BatteryWarning className="w-6 h-6" />, title: "Recuperar poder", desc: "Vuelve a sentirte capaz." },
            ].map((feature, idx) => (
              <div key={idx} className="bg-black border border-gray-800 p-8 rounded-xl hover:border-orange-500/50 transition-colors group">
                <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="inline-block bg-white/5 text-white px-6 py-2 rounded-full border border-white/10">
              Es un reinicio interno durante <span className="text-orange-400 font-bold">21 días</span>.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 border-y border-gray-800">
        <div className="container mx-auto px-6 max-w-4xl flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-white mb-8">🧭 Cómo funciona</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-orange-900/30 flex items-center justify-center text-orange-500 font-bold">1</div>
                <p className="text-lg text-gray-200">1 ejercicio diario</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-orange-900/30 flex items-center justify-center text-orange-500 font-bold">2</div>
                <p className="text-lg text-gray-200">1 acción simple</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-orange-900/30 flex items-center justify-center text-orange-500 font-bold">3</div>
                <p className="text-lg text-gray-200">1 reflexión guiada</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-orange-900/30 flex items-center justify-center text-orange-500 font-bold">4</div>
                <p className="text-lg text-gray-200">Menos de 15 min por día</p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 bg-gradient-to-br from-gray-800 to-black p-1 rounded-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
            <div className="bg-[#111] p-8 rounded-xl h-full flex flex-col justify-center items-center text-center">
              <Clock className="w-16 h-16 text-gray-600 mb-4" />
              <h3 className="text-2xl font-bold text-white">Resultados Acumulativos</h3>
              <p className="text-gray-400 mt-2">No es magia. Es constancia guiada.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience & Benefits */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16">

            {/* Audience */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                🔥 ¿Para quién es?
              </h3>
              <ul className="space-y-4">
                {[
                  "Están cansadas mentalmente",
                  "Se sienten perdidas",
                  "Postergan su vida",
                  "Han intentado hábitos y fallado",
                  "Buscan claridad y dirección",
                  "Desean reconstruirse desde dentro"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <ArrowRight className="w-4 h-4 text-orange-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 text-sm text-gray-500 uppercase tracking-widest font-semibold">
                Edad promedio: 24–34 años
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                💥 Beneficios Reales
              </h3>
              <ul className="space-y-4">
                {[
                  "Mente más ordenada",
                  "Claridad sobre tu vida y dirección",
                  "Nuevas prioridades",
                  "Más calma mental",
                  "Enfoque y energía emocional",
                  "Impulso para avanzar"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white font-medium">
                    <Check className="w-5 h-5 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-xl text-orange-400 font-serif italic">
                "Volverás a sentirte capaz."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison / Different */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl bg-black border border-gray-800 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gray-800/20 rounded-full blur-[80px]"></div>

          <h2 className="text-3xl font-bold text-white mb-10 relative z-10">🧩 Lo que hace este libro diferente</h2>

          <div className="grid md:grid-cols-2 gap-8 relative z-10">
            <div className="space-y-4 text-left">
              <div className="flex items-center gap-3 text-gray-400">
                <X className="w-5 h-5 text-red-500 shrink-0" /> No es motivación pasajera
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <X className="w-5 h-5 text-red-500 shrink-0" /> No es filosofía espiritual
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <X className="w-5 h-5 text-red-500 shrink-0" /> No es psicología compleja
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <X className="w-5 h-5 text-red-500 shrink-0" /> No es desarrollo personal genérico
              </div>
            </div>

            <div className="flex items-center justify-center border-t md:border-t-0 md:border-l border-gray-800 pt-8 md:pt-0">
              <p className="text-2xl font-bold text-white">
                Es un proceso <br />
                <span className="text-orange-500">guiado, diario, práctico y transformador.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's included (Checklist) */}
      <section className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h3 className="text-2xl font-bold text-white mb-10">📎 ¿Qué incluye la descarga?</h3>
          <div className="grid sm:grid-cols-2 gap-4 text-left">
            {[
              "21 días completos paso a paso",
              "Ejercicios prácticos diarios",
              "Estructura para mente + emoción",
              "Rutinas AM & PM",
              "Rituales de claridad",
              "Bitácora de seguimiento",
              "Sistema anti-autobloqueo",
              "Plan de continuidad post-21 días"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-black p-4 rounded-lg border border-gray-800">
                {/* Small bullet point */}
                <div className="w-2 h-2 bg-orange-500 rounded-full shrink-0"></div>
                <span className="text-gray-300 text-sm md:text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section id="checkout" className="py-24 px-6 relative overflow-hidden">
        {/* Background effect for CTA */}
        <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900"></div>
        <div className="container mx-auto max-w-3xl text-center relative z-10">

          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">🧨 Si no haces nada distinto… <br />¿qué cambia?</h2>
            <p className="text-3xl font-bold text-gray-500 mb-8">Nada.</p>
            <p className="text-xl text-gray-300">Y tú lo sabes.</p>
          </div>

          <div className="bg-gray-800/30 backdrop-blur-md border border-gray-700 p-8 md:p-12 rounded-3xl shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">❤️‍🔥 ESTE ES TU MOMENTO</h3>
            <p className="text-gray-300 mb-8">21 días pueden cambiar tu vida si cambian tu dirección.</p>

            <a href="https://bizzshop.gumroad.com/l/fdste" className="w-full md:w-auto px-12 py-5 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-xl text-xl transition-all shadow-[0_0_30px_rgba(234,88,12,0.3)] hover:shadow-[0_0_50px_rgba(234,88,12,0.5)] mb-6 inline-block">
              👉 DESCARGAR AHORA
              <span className="block text-sm font-normal text-orange-100 mt-1">Empieza hoy el Día 1</span>
            </a>

            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-8 pt-8 border-t border-gray-700">
              <div className="text-left">
                <div className="flex items-center gap-2 text-white font-bold mb-1">
                  <ShieldCheck className="w-5 h-5 text-green-500" /> Sin Riesgo
                </div>
                <p className="text-sm text-gray-400">Si no haces nada, sigues igual.</p>
              </div>
              <div className="text-left">
                <div className="flex items-center gap-2 text-white font-bold mb-1">
                  <ArrowRight className="w-5 h-5 text-green-500" /> Tienes salida
                </div>
                <p className="text-sm text-gray-400">Compra tu regreso.</p>
              </div>
            </div>
          </div>

          <p className="mt-12 text-2xl font-serif text-gray-400 italic">
            "No compres un libro. Compra tu regreso."
          </p>

        </div>
      </section>

      <footer className="py-8 bg-black text-center text-gray-600 text-sm">
        <p>© 2024 Recuperarte. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default App;
