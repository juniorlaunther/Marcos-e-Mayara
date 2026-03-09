/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { 
  Instagram, 
  Youtube, 
  Music2, 
  Mic2, 
  Calendar, 
  Star, 
  Users, 
  Play, 
  ChevronRight,
  Phone
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const bentoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero Entrance Animation
    const ctx = gsap.context(() => {
      gsap.from('.hero-content > *', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power4.out'
      });

      gsap.from('.hero-bg', {
        scale: 1.2,
        duration: 2,
        ease: 'power2.out'
      });

      // Scroll Reveal Animations
      const sections = document.querySelectorAll('.reveal');
      sections.forEach((section) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          y: 50,
          opacity: 0,
          duration: 1,
          ease: 'power3.out'
        });
      });

      // Bento Grid Animation
      gsap.from('.bento-item', {
        scrollTrigger: {
          trigger: '.bento-grid',
          start: 'top 80%'
        },
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'back.out(1.7)'
      });
    });

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-amber-500 selection:text-black overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 px-6 py-4">
        <nav className="max-w-7xl mx-auto flex items-center justify-between backdrop-blur-md bg-white/5 border border-white/10 rounded-full px-6 py-3">
          <div className="text-xl font-bold tracking-tighter flex items-center gap-2">
            <span className="text-amber-500">M&M</span>
            <span className="hidden sm:inline">MARCOS & MAYARA</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-white/70">
            <button onClick={() => scrollToSection('home')} className="hover:text-amber-500 transition-colors">Início</button>
            <button onClick={() => scrollToSection('lancamento')} className="hover:text-amber-500 transition-colors">Lançamento</button>
            <button onClick={() => scrollToSection('sobre')} className="hover:text-amber-500 transition-colors">A Dupla</button>
            <button onClick={() => scrollToSection('agenda')} className="hover:text-amber-500 transition-colors">Agenda</button>
          </div>

          <a 
            href="https://wa.me/5511997303009" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-amber-500 hover:bg-amber-400 text-black px-6 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105 flex items-center gap-2"
          >
            CONTRATAR <Phone size={16} />
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://instagram.fcpq7-1.fna.fbcdn.net/v/t51.82787-15/565812030_18345731971166093_8870832651672209246_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=107&ig_cache_key=Mzc0NjE4NTU0MjA1Njg2NzI1Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTA3NS5zZHIuQzMifQ%3D%3D&_nc_ohc=N4Mkgshc-XkQ7kNvwEA3T_E&_nc_oc=Adn3SbjH4JZQJee4jjkJQdludCp_uX9OK4udQ_M7bR_X2k5w3qhjrAdMbWVdH3YK6dI&_nc_ad=z-m&_nc_cid=1138&_nc_zt=23&_nc_ht=instagram.fcpq7-1.fna&_nc_gid=-OhzdSUc9jdoFS3dapyHCg&_nc_ss=8&oh=00_AfycMV7vQYcxSpwS_xAjbOBpidBM9x9NdDj6z8mgIrC3qg&oe=69B4E8B0" 
            alt="Marcos e Mayara Hero" 
            className="hero-bg w-full h-full object-cover object-top"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center hero-content">
          <span className="inline-block text-amber-500 font-bold tracking-[0.3em] uppercase text-xs mb-6">A Nova Força do Sertanejo</span>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
            MARCOS <span className="text-amber-500">&</span> MAYARA
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Vozes marcantes, carisma inigualável e um show que transborda energia. Prepare-se para a experiência sertaneja definitiva.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => scrollToSection('agenda')}
              className="w-full sm:w-auto bg-amber-500 text-black px-10 py-4 rounded-full font-black text-lg hover:bg-amber-400 transition-all flex items-center justify-center gap-2 group"
            >
              GARANTIR SHOW <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href="https://open.spotify.com/intl-pt/artist/4eyDJWoZK9jzLaeADnClib" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto backdrop-blur-md bg-white/10 border border-white/20 px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2"
            >
              OUVIR NO SPOTIFY <Music2 size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Authority Marquee */}
      <div className="py-12 bg-amber-500 overflow-hidden whitespace-nowrap border-y border-black/10">
        <div className="flex animate-marquee items-center gap-12">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center gap-12">
              <span className="text-black text-2xl font-black italic uppercase tracking-tighter">+20 MIL STREAMS</span>
              <Star className="text-black fill-black" size={24} />
              <span className="text-black text-2xl font-black italic uppercase tracking-tighter">SHOWS EM TODO BRASIL</span>
              <Star className="text-black fill-black" size={24} />
              <span className="text-black text-2xl font-black italic uppercase tracking-tighter">DUPLA REVELAÇÃO</span>
              <Star className="text-black fill-black" size={24} />
              <span className="text-black text-2xl font-black italic uppercase tracking-tighter">REPERTÓRIO EXCLUSIVO</span>
              <Star className="text-black fill-black" size={24} />
            </div>
          ))}
        </div>
      </div>

      {/* Recent Release */}
      <section id="lancamento" className="py-12 md:py-24 px-6 reveal">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">LANÇAMENTO POPULAR</h2>
          </div>
          
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-amber-500/10">
            <iframe 
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/3zNU-SAczvE" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-12 md:py-24 px-6 reveal overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10">
              <img 
                src="https://instagram.fcpq7-1.fna.fbcdn.net/v/t39.30808-6/470743410_18312995944166093_5693565614917534181_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=100&ig_cache_key=MzQwODcxNjg3MzIxMjkyMzIzNA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTc0Mi5zZHIuQzMifQ%3D%3D&_nc_ohc=MGkyTvSfIAwQ7kNvwGzA9fF&_nc_oc=AdkshL3IubWLQ_2MeGQFPFPdIHHtYara92eJPg73Sr6kf0NYSE67cSLa3mUUZYa06_0&_nc_ad=z-m&_nc_cid=1138&_nc_zt=23&_nc_ht=instagram.fcpq7-1.fna&_nc_gid=66dkpzs6HCwK82Rxno6agw&_nc_ss=8&oh=00_AfzFgDg9iYrzCgJiksCcqjvPPhbDEtLOo1mO4IQ90wLA1w&oe=69B4FED3" 
                alt="Marcos e Mayara" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-amber-500 p-8 rounded-3xl text-black hidden xl:block">
              <p className="text-4xl font-black italic tracking-tighter">DESDE 2016</p>
              <p className="font-bold uppercase tracking-widest text-xs opacity-70">Unindo vozes e sonhos</p>
            </div>
          </div>

          <div className="overflow-hidden">
            <span className="text-amber-500 font-bold tracking-widest uppercase text-sm mb-4 block">A História</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 italic break-words">MARCOS & MAYARA</h2>
            <div className="space-y-6 text-white/70 leading-relaxed text-base md:text-lg">
              <p>
                Uma das duplas mistas de maior destaque no cenário sertanejo, Marcos & Mayara unem vozes e personalidades que se complementam de forma única.
              </p>
              <p>
                Nascidos e criados em Caieiras (SP), ambos iniciaram na música ainda crianças. A parceria profissional se formou em 2016, após terem cantado juntos por diversão e percebido a química vocal imediata.
              </p>
              <p>
                Com o projeto "DVDZIN" gravado em 2020, a dupla consolidou seu espaço com músicas autorais como "Começo e Fim", conquistando admiradores por onde passam com um show cheio de energia e carisma.
              </p>
            </div>
            
            <div className="mt-12 flex flex-wrap items-center gap-4 md:gap-6">
              <a href="https://www.instagram.com/marcosemayaraoficial/" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 rounded-full hover:bg-amber-500 hover:text-black transition-all shrink-0">
                <Instagram size={24} />
              </a>
              <a href="https://www.youtube.com/@MarcoseMayaraOficial" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 rounded-full hover:bg-amber-500 hover:text-black transition-all shrink-0">
                <Youtube size={24} />
              </a>
              <a href="https://open.spotify.com/intl-pt/artist/4eyDJWoZK9jzLaeADnClib" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 rounded-full hover:bg-amber-500 hover:text-black transition-all shrink-0">
                <Music2 size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-24 px-6 bg-[#0a0a0a] reveal overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 italic break-words uppercase">O que dizem os contratantes</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Ricardo Silva",
                role: "Proprietário de Casa Noturna",
                text: "Show impecável! A energia da dupla é contagiante e o repertório é muito bem selecionado. Casa lotada e público satisfeito."
              },
              {
                name: "Ana Paula",
                role: "Organizadora de Eventos",
                text: "Contratei para um evento corporativo e foi um sucesso. Profissionalismo total desde a montagem até o final do show."
              },
              {
                name: "Marcos Oliveira",
                role: "Contratante de Rodeio",
                text: "Uma das melhores duplas que já passaram pelo nosso palco. Mayara tem uma voz técnica incrível e o Marcos domina o palco."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:border-amber-500/50 transition-colors">
                <div className="flex gap-1 text-amber-500 mb-6">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} fill="currentColor" />)}
                </div>
                <p className="text-white/70 italic mb-8 leading-relaxed">"{item.text}"</p>
                <div>
                  <p className="font-bold text-lg">{item.name}</p>
                  <p className="text-amber-500 text-sm font-medium uppercase tracking-widest">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="agenda" className="py-12 md:py-24 px-6 reveal">
        <div className="max-w-5xl mx-auto bg-amber-500 rounded-[3rem] p-12 md:p-24 text-center text-black relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-8 leading-none">
              LEVE MARCOS & MAYARA PARA O SEU EVENTO
            </h2>
            <p className="text-xl font-bold mb-12 opacity-80 max-w-2xl mx-auto">
              Datas limitadas para 2026. Entre em contato agora com nossa equipe de vendas e garanta o sucesso da sua festa.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="https://wa.me/5511997303009" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-black text-amber-500 px-12 py-5 rounded-full font-black text-xl hover:scale-105 transition-transform flex items-center justify-center gap-3"
              >
                FALAR NO WHATSAPP <Phone size={24} />
              </a>
              <div className="text-left">
                <p className="text-sm font-black uppercase tracking-widest opacity-60">Contato Direto</p>
                <p className="text-2xl font-black">(11) 99730-3009</p>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <Mic2 size={200} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-black tracking-tighter italic">
            MARCOS <span className="text-amber-500">&</span> MAYARA
          </div>
          
          <div className="flex gap-8 text-white/50 text-sm font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-amber-500 transition-colors">Instagram</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Youtube</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Spotify</a>
          </div>

          <div className="text-white/30 text-xs font-medium tracking-widest uppercase">
            Copyright © 2026 - Marcos & Mayara. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      {/* Floating Action Button Mobile */}
      <a 
        href="https://wa.me/5511997303009" 
        target="_blank" 
        rel="noopener noreferrer"
        className="md:hidden fixed bottom-6 right-6 z-50 bg-amber-500 text-black p-4 rounded-full shadow-2xl shadow-amber-500/50 animate-bounce"
      >
        <Phone size={24} />
      </a>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Syne:wght@400;500;600;700;800&display=swap');
        
        body {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        
        h1, h2, h3, .font-syne {
          font-family: 'Syne', sans-serif;
        }

        .bento-item {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </div>
  );
}
