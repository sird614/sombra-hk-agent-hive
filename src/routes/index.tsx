import { useMemo, useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import {
  Activity,
  Bot,
  BrainCircuit,
  ChevronRight,
  CircleDot,
  Cloud,
  Code2,
  Database,
  Fingerprint,
  Gauge,
  LockKeyhole,
  Menu,
  Network,
  Play,
  Plus,
  Radio,
  Search,
  Server,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  WandSparkles,
  Zap,
} from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Sombra HK · Agent Hive' },
      { name: 'description', content: 'Control room for a modular intelligence orchestration swarm.' },
    ],
  }),
  component: HiveControlRoom,
})

type Agent = { name: string; role: string; icon: typeof Bot; color: string; status: 'online' | 'standby' | 'learning' }

const agents: Agent[] = [
  { name: 'H.K.', role: 'Black-box audit', icon: Fingerprint, color: 'text-primary', status: 'online' },
  { name: 'Dash HK', role: 'Replication systems', icon: Code2, color: 'text-amber-300', status: 'online' },
  { name: 'Aegis', role: 'Cybersecurity', icon: ShieldCheck, color: 'text-emerald-300', status: 'online' },
  { name: 'Nox', role: 'Privacy & anonymity', icon: LockKeyhole, color: 'text-violet-300', status: 'online' },
  { name: 'Vector', role: 'Knowledge memory', icon: Network, color: 'text-cyan-300', status: 'online' },
  { name: 'Quanta', role: 'Quantization logic', icon: Sparkles, color: 'text-fuchsia-300', status: 'standby' },
  { name: 'Forge', role: 'Tool generation', icon: WandSparkles, color: 'text-orange-300', status: 'standby' },
  { name: 'Cipher', role: 'Secure code review', icon: TerminalSquare, color: 'text-sky-300', status: 'standby' },
  { name: 'Atlas', role: 'Web intelligence', icon: Search, color: 'text-lime-300', status: 'standby' },
  { name: 'Mantis', role: 'Threat modeling', icon: Radio, color: 'text-rose-300', status: 'standby' },
  { name: 'Sage', role: 'Research synthesis', icon: BrainCircuit, color: 'text-indigo-300', status: 'standby' },
  { name: 'Prism', role: 'Pattern analysis', icon: Gauge, color: 'text-yellow-200', status: 'standby' },
  { name: 'Kite', role: 'App architecture', icon: Server, color: 'text-teal-300', status: 'standby' },
  { name: 'Lumen', role: 'Continuous learning', icon: Zap, color: 'text-pink-300', status: 'learning' },
  { name: 'Orbis', role: 'Swarm coordinator', icon: Bot, color: 'text-primary', status: 'online' },
]

const initialLogs = [
  ['17:29:58', 'Orbis', 'Swarm heartbeat synchronized · 15 nodes visible'],
  ['17:29:44', 'Vector', 'Shared memory index compacted · 1.8 GB active'],
  ['17:29:31', 'H.K.', 'Audit channel ready · waiting for mission payload'],
  ['17:28:09', 'Nox', 'Privacy boundary verified · no external writes'],
]

function HiveControlRoom() {
  const [mission, setMission] = useState('Map the attack surface of a modular web application')
  const [running, setRunning] = useState(false)
  const [selectedAgent, setSelectedAgent] = useState('Orbis')
  const [logs, setLogs] = useState(initialLogs)
  const [menuOpen, setMenuOpen] = useState(false)
  const onlineCount = useMemo(() => agents.filter((agent) => agent.status === 'online').length, [])

  function startMission() {
    if (!mission.trim()) return toast.error('Escribe una misión antes de iniciar el enjambre')
    setRunning(true)
    setLogs((current) => [[new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', second: '2-digit' }), 'Orbis', `Misión iniciada · ${mission.trim()}`], ...current])
    toast.success('Misión enviada al enjambre', { description: 'Orbis está asignando especialistas.' })
    window.setTimeout(() => setRunning(false), 3800)
  }

  return (
    <main className="min-h-dvh bg-background text-foreground selection:bg-primary/20">
      <div className="mx-auto flex min-h-dvh max-w-[1600px]">
        <aside className={`${menuOpen ? 'absolute inset-y-0 left-0 z-20 flex' : 'hidden'} w-64 shrink-0 flex-col border-r border-sidebar-border bg-sidebar lg:relative lg:flex`}>
          <div className="flex h-20 items-center gap-3 border-b border-sidebar-border px-5">
            <div className="grid size-9 place-items-center rounded-lg bg-primary text-primary-foreground shadow-[0_0_24px_color-mix(in_oklch,var(--primary)_28%,transparent)]"><Bot className="size-5" /></div>
            <div><p className="font-semibold tracking-tight">SOMBRA HK</p><p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Agent Hive / 01</p></div>
          </div>
          <nav className="flex-1 space-y-1 px-3 py-6" aria-label="Navegación principal">
            <p className="px-3 pb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Control room</p>
            <NavItem icon={Activity} label="Mission control" active />
            <NavItem icon={Bot} label="Agent registry" />
            <NavItem icon={Database} label="Shared memory" />
            <NavItem icon={ShieldCheck} label="Audit trails" />
            <p className="px-3 pb-2 pt-8 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Runtime</p>
            <NavItem icon={Cloud} label="Local / cloud" />
            <NavItem icon={TerminalSquare} label="Tool forge" />
          </nav>
          <div className="border-t border-sidebar-border p-4"><div className="flex items-center gap-3 rounded-lg bg-sidebar-accent/50 p-3"><div className="size-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" /><div className="min-w-0"><p className="text-xs font-medium">Local runtime</p><p className="truncate font-mono text-[10px] text-muted-foreground">GGUF · 7.2B · 12.4 GB RAM</p></div></div></div>
        </aside>

        <section className="min-w-0 flex-1">
          <header className="flex h-20 items-center justify-between border-b border-border px-5 sm:px-8">
            <div className="flex items-center gap-3"><Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMenuOpen((open) => !open)} aria-label="Abrir menú"><Menu className="size-5" /></Button><div><p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">System / Mission control</p><h1 className="mt-1 text-lg font-semibold tracking-tight sm:text-xl">Intelligence orchestration</h1></div></div>
            <div className="flex items-center gap-3"><div className="hidden items-center gap-2 rounded-full border border-border px-3 py-1.5 sm:flex"><span className="size-1.5 rounded-full bg-emerald-400" /><span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">All systems nominal</span></div><Button variant="outline" size="icon" aria-label="Nuevo proyecto"><Plus className="size-4" /></Button></div>
          </header>

          <div className="space-y-6 p-5 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-3">
              <Metric label="Active agents" value={`${onlineCount} / 15`} detail="swarm capacity" icon={Bot} accent="text-primary" />
              <Metric label="Shared memory" value="1.8 GB" detail="vector index online" icon={Database} accent="text-violet-300" />
              <Metric label="Runtime health" value="98.7%" detail="local inference" icon={Gauge} accent="text-emerald-300" />
            </div>

            <Card className="overflow-hidden border-primary/30 bg-card shadow-[0_0_55px_color-mix(in_oklch,var(--primary)_7%,transparent)]">
              <CardHeader className="flex flex-row items-start justify-between gap-4 border-b border-border/70 pb-5"><div><div className="mb-2 flex items-center gap-2"><span className="size-1.5 animate-pulse rounded-full bg-primary" /><span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">Mission interface</span></div><CardTitle className="text-xl sm:text-2xl">What should the hive solve?</CardTitle></div><span className="hidden rounded border border-border px-2 py-1 font-mono text-[10px] text-muted-foreground sm:block">CTRL + ENTER</span></CardHeader>
              <CardContent className="p-5 sm:p-6"><textarea value={mission} onChange={(event) => setMission(event.target.value)} className="min-h-24 w-full resize-none bg-transparent text-base leading-relaxed text-foreground outline-none placeholder:text-muted-foreground" placeholder="Describe a mission for the swarm…" aria-label="Descripción de la misión" /><div className="mt-5 flex flex-col justify-between gap-4 border-t border-border/70 pt-4 sm:flex-row sm:items-center"><div className="flex flex-wrap gap-2"><span className="rounded bg-muted px-2 py-1 font-mono text-[10px] text-muted-foreground">REASONING: ADAPTIVE</span><span className="rounded bg-muted px-2 py-1 font-mono text-[10px] text-muted-foreground">MEMORY: SHARED</span><span className="rounded bg-muted px-2 py-1 font-mono text-[10px] text-muted-foreground">MODE: HYBRID</span></div><Button onClick={startMission} disabled={running} className="group h-10 gap-2 bg-primary font-semibold text-primary-foreground hover:bg-primary/90">{running ? 'Orchestrating…' : 'Start mission'}<Play className="size-4 transition-transform group-hover:translate-x-0.5" /></Button></div></CardContent>
            </Card>

            <div className="grid gap-6 xl:grid-cols-[1.45fr_1fr]">
              <Card><CardHeader className="flex flex-row items-center justify-between border-b border-border/70 pb-4"><div><CardTitle className="text-base">Agent registry</CardTitle><p className="mt-1 text-xs text-muted-foreground">Specialists available to Orbis</p></div><span className="font-mono text-xs text-muted-foreground">{agents.length.toString().padStart(2, '0')} / 15</span></CardHeader><CardContent className="grid gap-2 p-3 sm:grid-cols-2"><div className="col-span-full mb-1 rounded-lg border border-primary/20 bg-primary/5 px-3 py-2 font-mono text-[10px] text-primary">SHARED CONTEXT BUS · ONLINE · 42 TOKENS/S</div>{agents.map((agent) => <AgentRow key={agent.name} agent={agent} selected={selectedAgent === agent.name} onSelect={() => setSelectedAgent(agent.name)} />)}</CardContent></Card>
              <div className="space-y-6"><Card><CardHeader className="border-b border-border/70 pb-4"><CardTitle className="text-base">Live activity</CardTitle></CardHeader><CardContent className="space-y-4 p-5">{logs.map(([time, source, message]) => <div key={`${time}-${message}`} className="flex gap-3"><span className="mt-0.5 font-mono text-[10px] text-muted-foreground">{time}</span><div className="min-w-0"><p className="text-xs leading-relaxed"><span className="mr-1.5 font-mono text-primary">{source}</span>{message}</p></div></div>)}<Button variant="ghost" className="h-auto w-full justify-between px-0 pt-2 text-xs text-muted-foreground hover:text-primary">Open audit stream <ChevronRight className="size-3" /></Button></CardContent></Card><Card className="border-violet-400/20"><CardHeader className="border-b border-border/70 pb-4"><CardTitle className="flex items-center gap-2 text-base"><Database className="size-4 text-violet-300" />Memory substrate</CardTitle></CardHeader><CardContent className="space-y-4 p-5"><div className="flex items-end justify-between"><div><p className="font-mono text-2xl font-semibold">86.4%</p><p className="text-xs text-muted-foreground">semantic recall quality</p></div><span className="font-mono text-xs text-emerald-300">+4.2%</span></div><div className="h-1.5 overflow-hidden rounded-full bg-muted"><div className="h-full w-[86%] rounded-full bg-violet-300" /></div><div className="flex justify-between font-mono text-[10px] text-muted-foreground"><span>VECTOR INDEX</span><span>QUANTIZED 4-bit</span></div></CardContent></Card></div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

function NavItem({ icon: Icon, label, active = false }: { icon: typeof Bot; label: string; active?: boolean }) {
  return <button className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${active ? 'bg-sidebar-accent text-sidebar-accent-foreground' : 'text-muted-foreground hover:bg-sidebar-accent/60 hover:text-foreground'}`}><Icon className="size-4" /><span>{label}</span>{active && <CircleDot className="ml-auto size-3 text-primary" />}</button>
}

function Metric({ label, value, detail, icon: Icon, accent }: { label: string; value: string; detail: string; icon: typeof Bot; accent: string }) {
  return <Card className="group transition-transform duration-200 hover:-translate-y-0.5"><CardContent className="flex items-start justify-between p-5"><div><p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{label}</p><p className="mt-2 text-2xl font-semibold tracking-tight">{value}</p><p className="mt-1 text-xs text-muted-foreground">{detail}</p></div><Icon className={`size-5 ${accent} transition-transform group-hover:scale-110`} /></CardContent></Card>
}

function AgentRow({ agent, selected, onSelect }: { agent: Agent; selected: boolean; onSelect: () => void }) {
  const Icon = agent.icon
  return <button onClick={onSelect} className={`flex items-center gap-3 rounded-lg border px-3 py-3 text-left transition-all ${selected ? 'border-primary/50 bg-primary/10' : 'border-transparent bg-muted/30 hover:border-border hover:bg-muted/60'}`}><div className={`grid size-8 shrink-0 place-items-center rounded-md bg-background ${agent.color}`}><Icon className="size-4" /></div><div className="min-w-0 flex-1"><div className="flex items-center gap-2"><span className="text-sm font-medium">{agent.name}</span><span className={`size-1.5 rounded-full ${agent.status === 'online' ? 'bg-emerald-400' : agent.status === 'learning' ? 'bg-amber-300' : 'bg-muted-foreground/50'}`} /></div><p className="truncate text-[11px] text-muted-foreground">{agent.role}</p></div><span className="font-mono text-[9px] uppercase text-muted-foreground">{agent.status}</span></button>
}
