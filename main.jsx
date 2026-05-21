import { useState } from 'react';

export default function HomeServerLanding() {
  const [selectedServices, setSelectedServices] = useState([]);

  const toggleService = (service) => {
    if (service === 'CasaOS') {
      if (selectedServices.includes('CasaOS')) {
        setSelectedServices(selectedServices.filter((s) => s !== 'CasaOS'));
      } else {
        setSelectedServices([
          ...selectedServices.filter(
            (s) => s !== 'Portainer' && s !== 'Homepage Dashboard'
          ),
          'CasaOS',
        ]);
      }

      return;
    }

    if (
      selectedServices.includes('CasaOS') &&
      (service === 'Portainer' || service === 'Homepage Dashboard')
    ) {
      return;
    }

    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };
  const plans = [
    {
      name: 'START',
      price: 'R$ 349',
      desc: 'Servidor de arquivos e backup pessoal',
      features: [
        'File Browser',
        'Samba',
        'Tailscale',
        'Homepage Dashboard',
        'Acesso remoto',
      ],
    },
    {
      name: 'MEDIA',
      price: 'R$ 649',
      desc: 'Sua própria Netflix privada',
      features: [
        'Jellyfin',
        'Streaming na TV',
        'Biblioteca organizada',
        'Usuários separados',
        'Dashboard personalizada',
      ],
      highlight: true,
    },
    {
      name: 'CLOUD',
      price: 'R$ 899',
      desc: 'Google Drive privado doméstico',
      features: [
        'Nextcloud',
        'Backup automático',
        'Sincronização',
        'Múltiplos usuários',
        'Acesso seguro',
      ],
    },
    {
      name: 'ULTIMATE',
      price: 'R$ 1899',
      desc: 'Central digital completa da casa',
      features: [
        'CasaOS',
        'Jellyfin',
        'Nextcloud',
        'Pi-hole',
        'Portainer',
        'Dashboard premium',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <header className="border-b border-zinc-800 bg-zinc-900/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">HomeServer</h1>
            <p className="text-zinc-400 text-sm">
              Transformamos computadores antigos em servidores modernos.
            </p>
          </div>

          <a href="#orcamento" className="bg-white text-black px-5 py-2 rounded-2xl font-semibold hover:scale-105 transition-transform inline-block">
            Solicitar orçamento
          </a>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="bg-zinc-800 px-4 py-2 rounded-full text-sm text-zinc-300">
            Self-hosted • Privacidade • Streaming • Backup
          </span>

          <h2 className="text-5xl font-black leading-tight mt-6">
            Seu computador velho pode virar sua própria nuvem privada.
          </h2>

          <p className="text-zinc-400 text-lg mt-6 leading-relaxed">
            Instalação profissional de servidores domésticos com Jellyfin,
            Nextcloud, Pi-hole, Tailscale e dashboards modernas.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="#planos"
              className="bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition-transform inline-block"
            >
              Ver planos
            </a>

            <a
              href="#funciona"
              className="border border-zinc-700 px-6 py-3 rounded-2xl hover:bg-zinc-900 transition-colors inline-block"
            >
              Como funciona
            </a>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl">
          <div className="grid grid-cols-2 gap-4">
            {[
              'Jellyfin',
              'Nextcloud',
              'Pi-hole',
              'Portainer',
              'Tailscale',
              'CasaOS',
            ].map((app) => (
              <div
                key={app}
                className="bg-zinc-800 rounded-2xl p-5 hover:bg-zinc-700 transition-colors cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-zinc-700 mb-4"></div>
                <h3 className="font-semibold">{app}</h3>
                <p className="text-zinc-400 text-sm mt-1">
                  Serviço instalado
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="planos" className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">Planos</h2>
          <p className="text-zinc-400 mt-4 text-lg">
            Escolha o servidor ideal para sua casa.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl border p-8 transition-all hover:-translate-y-2 hover:shadow-2xl ${
                plan.highlight
                  ? 'bg-white text-black border-white scale-105'
                  : 'bg-zinc-900 border-zinc-800'
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold">{plan.name}</h3>

                {plan.highlight && (
                  <span className="bg-black text-white px-3 py-1 rounded-full text-xs font-semibold">
                    POPULAR
                  </span>
                )}
              </div>

              <p
                className={`mt-4 text-sm ${
                  plan.highlight ? 'text-zinc-700' : 'text-zinc-400'
                }`}
              >
                {plan.desc}
              </p>

              <div className="mt-8 text-4xl font-black">{plan.price}</div>

              <button
                className={`w-full mt-8 py-3 rounded-2xl font-semibold transition-transform hover:scale-105 ${
                  plan.highlight
                    ? 'bg-black text-white'
                    : 'bg-white text-black'
                }`}
              >
                Escolher plano
              </button>

              <div className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 text-sm"
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${
                        plan.highlight ? 'bg-black' : 'bg-white'
                      }`}
                    ></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="funciona" className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700 rounded-[2rem] p-10 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-black leading-tight">
                O que seu servidor pode fazer?
              </h2>

              <div className="grid sm:grid-cols-2 gap-4 mt-10">
                {[
                  'Netflix particular',
                  'Backup automático',
                  'Nuvem privada',
                  'Bloqueio de anúncios',
                  'Acesso remoto',
                  'Dashboard moderna',
                ].map((item) => (
                  <div
                    key={item}
                    className="bg-zinc-900/70 rounded-2xl p-5 border border-zinc-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-black rounded-3xl border border-zinc-700 p-8">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <h3 className="font-bold text-xl">Dashboard</h3>
                <span className="text-green-400 text-sm">Online</span>
              </div>

              <div className="space-y-4 mt-6">
                {[
                  ['Jellyfin', 'Online'],
                  ['Nextcloud', 'Sincronizando'],
                  ['Pi-hole', 'Bloqueando anúncios'],
                  ['Tailscale', 'Conectado'],
                ].map(([service, status]) => (
                  <div
                    key={service}
                    className="flex items-center justify-between bg-zinc-900 rounded-2xl p-4"
                  >
                    <span>{service}</span>
                    <span className="text-zinc-400 text-sm">{status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">
            <h2 className="text-3xl font-bold">Como funciona</h2>

            <div className="space-y-6 mt-8">
              {[
                ['1. Você envia o computador', 'Pode ser desktop, notebook antigo ou mini PC.'],
                ['2. Fazemos a instalação', 'Configuramos Debian, Docker e todos os serviços.'],
                ['3. Entrega pronta para uso', 'Você conecta ao roteador e acessa pelo celular, TV ou notebook.'],
                ['4. Suporte remoto', 'Atualizações e manutenção podem ser feitas remotamente.'],
              ].map(([title, desc]) => (
                <div key={title} className="border border-zinc-800 rounded-2xl p-5 bg-zinc-950">
                  <h3 className="font-semibold text-lg">{title}</h3>
                  <p className="text-zinc-400 mt-2 text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">
            <h2 className="text-3xl font-bold">Requisitos recomendados</h2>

            <p className="text-zinc-400 mt-3 leading-relaxed">
              Quanto melhor o hardware, melhor será a experiência com streaming,
              backup e múltiplos usuários conectados.
            </p>

            <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-5 mt-6">
              <h3 className="font-semibold text-lg">💡 Recomendação ideal</h3>

              <div className="space-y-2 mt-4 text-sm text-zinc-400">
                <p>• Intel i3 6ª geração ou superior</p>
                <p>• 8 GB RAM mínimo</p>
                <p>• SSD para sistema \(120 GB ou mais\)</p>
                <p>• Armazenamento para filmes opcional \(+R$ 80/mês por 1 TB\)</p>
                <p>• Rede cabeada Gigabit</p>
                <p>• Computador dedicado ligado 24h</p>
              </div>
            </div>

            <div className="mt-8 space-y-5">
              {[
                ['Processador', 'Intel i3/i5 • Ryzen 3/5 ou superior'],
                ['Memória RAM', '8 GB recomendado • 16 GB ideal'],
                ['Armazenamento', 'SSD 120 GB+ recomendado • armazenamento extra opcional'],
                ['Rede', 'Cabo de rede Gigabit recomendado'],
                ['Sistema', 'Equipamento dedicado ligado 24h'],
              ].map(([name, value]) => (
                <div key={name} className="flex justify-between border-b border-zinc-800 pb-4">
                  <span className="text-zinc-400">{name}</span>
                  <span className="font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="orcamento" className="max-w-4xl mx-auto px-6 pb-24">
        <div className="bg-white text-black rounded-[2rem] p-10 shadow-2xl">
          <h2 className="text-4xl font-black">Solicitar orçamento</h2>
          <p className="text-zinc-700 mt-3 text-lg">
            Envie os dados do computador e do projeto desejado.
          </p>

          <form className="grid gap-6 mt-10">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Nome completo
                </label>
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="w-full rounded-2xl border border-zinc-300 bg-zinc-50 px-5 py-4 outline-none focus:ring-2 focus:ring-black transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  WhatsApp
                </label>
                <input
                  type="text"
                  placeholder="(31) 99999-9999"
                  className="w-full rounded-2xl border border-zinc-300 bg-zinc-50 px-5 py-4 outline-none focus:ring-2 focus:ring-black transition-all"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Cidade
                </label>
                <input
                  type="text"
                  placeholder="Sua cidade"
                  className="w-full rounded-2xl border border-zinc-300 bg-zinc-50 px-5 py-4 outline-none focus:ring-2 focus:ring-black transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Plano desejado
                </label>
                <select className="w-full rounded-2xl border border-zinc-300 bg-zinc-50 px-5 py-4 outline-none focus:ring-2 focus:ring-black transition-all">
                  <option>START</option>
                  <option>MEDIA</option>
                  <option>CLOUD</option>
                  <option>ULTIMATE</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Hardware disponível
              </label>
              <textarea
                rows={4}
                placeholder="Exemplo: i3 8GB RAM SSD 240GB"
                className="w-full rounded-2xl border border-zinc-300 bg-zinc-50 px-5 py-4 outline-none focus:ring-2 focus:ring-black transition-all"
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium mb-4">
                Serviços extras
              </label>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'Backup automático',
                  'Acesso remoto',
                  'Monitoramento',
                  'Armazenamento para filmes \(\+R\$ 80/mês\)',
                  'Suporte mensal',
                  'Dashboard personalizada',
                ].map((service) => (
                  <label
                    key={service}
                    className={`flex items-center justify-between border rounded-2xl px-5 py-4 transition-all cursor-pointer ${
                      selectedServices.includes(service)
                        ? 'border-black bg-zinc-200'
                        : 'border-zinc-300 hover:border-black hover:bg-zinc-100'
                    } ${
                      selectedServices.includes('CasaOS') &&
                      (service === 'Portainer' || service === 'Homepage Dashboard')
                        ? 'opacity-40 cursor-not-allowed'
                        : ''
                    }`}
                  >
                    <div>
                      <span className="font-medium">{service}</span>

                      {service === 'CasaOS' && (
                        <p className="text-xs text-zinc-500 mt-1">
                          Inclui dashboard e gerenciamento integrados.
                        </p>
                      )}
                    </div>

                    <input
                      type="checkbox"
                      checked={selectedServices.includes(service)}
                      disabled={
                        selectedServices.includes('CasaOS') &&
                        (service === 'Portainer' || service === 'Homepage Dashboard')
                      }
                      onChange={() => toggleService(service)}
                      className="w-5 h-5 accent-black"
                    />
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Observações
              </label>
              <textarea
                rows={4}
                placeholder="Exemplo: quero acesso remoto, backup automático e armazenamento para filmes..."
                className="w-full rounded-2xl border border-zinc-300 bg-zinc-50 px-5 py-4 outline-none focus:ring-2 focus:ring-black transition-all"
              ></textarea>
            </div>

            <div className="bg-zinc-100 rounded-2xl p-5 border border-zinc-200">
              <h3 className="font-semibold text-lg">O que acontece depois?</h3>
              <div className="space-y-2 mt-3 text-sm text-zinc-700">
                <p>• Analisamos o hardware enviado</p>
                <p>• Recomendamos o melhor plano</p>
                <p>• Entramos em contato via WhatsApp</p>
                <p>• Fazemos a instalação e configuração completa</p>
              </div>
            </div>

            <button
              type="submit"
              className="bg-black text-white py-5 rounded-2xl font-semibold text-lg hover:scale-[1.02] transition-transform shadow-xl"
            >
              Solicitar orçamento agora
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-zinc-800 py-10 text-center text-zinc-500 text-sm">
        HomeServer © 2026 • Servidores domésticos modernos
      </footer>
    </div>
  );
}
