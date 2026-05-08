import './App.css'

const trainerStats = [
  { label: 'STR', value: 74, color: '#5db65d' },
  { label: 'DEX', value: 62, color: '#c87935' },
  { label: 'INT', value: 88, color: '#5277c8' },
]

const lowerStats = [
  { label: 'CHA', value: 81, color: '#5db65d' },
  { label: 'WIL', value: 54, color: '#b04c58' },
]

const party = [
  { name: 'Politoed', level: 33, type: 'WTR', color: '#3478d4', variant: 'frog' },
  { name: 'Tadbuld', level: 31, type: 'ELC', color: '#d89a28', variant: 'spark' },
  { name: 'Bulbasaur', level: 17, type: 'GRA', color: '#3ea64b', variant: 'sprout' },
]

const badges = [
  { label: 'Whimsical', color: '#d89324' },
  { label: 'Dragon', color: '#4e5657' },
  { label: 'Mystic', color: '#d15abb' },
  { label: 'Brawler', color: '#c96f35' },
  { label: 'Overgrowth', color: '#38a62f' },
]

function PixelPanel({ children, className = '', tone = 'cream' }) {
  const tones = {
    cream: 'bg-[#f7e2bf]',
    sage: 'bg-[#cbd8a7]',
    mint: 'bg-[#dce8bd]',
    peach: 'bg-[#ffd7ae]',
    slate: 'bg-[#d7dfc6]',
  }

  return (
    <div className={`relative border-[4px] border-[#1f1f1f] ${tones[tone]} shadow-[6px_6px_0_#1f1f1f] ${className}`}>
      <div className="pointer-events-none absolute left-1 top-1 right-1 h-[3px] bg-white/45" />
      <div className="pointer-events-none absolute bottom-1 left-1 right-1 h-[2px] bg-[#7d654d]/20" />
      {children}
    </div>
  )
}

function WindowControls() {
  return (
    <div className="absolute -top-7 left-3 flex gap-2">
      {['#eef4d2', '#f7f1dc', '#4f5a54'].map((color) => (
        <div key={color} className="grid h-9 w-9 place-items-center border-[4px] border-[#1f1f1f] bg-white shadow-[4px_4px_0_#1f1f1f]">
          <span className="block h-4 w-4 border-[3px] border-[#4f5a54]" style={{ backgroundColor: color }} />
        </div>
      ))}
    </div>
  )
}

function StatBar({ label, value, color }) {
  const safeValue = Math.max(0, Math.min(100, value))

  return (
    <div className="w-full">
      <div className="mb-1 text-right text-[13px] uppercase leading-none tracking-[0.18em] text-[#8b402d] md:text-[15px]">
        {label}
      </div>
      <div className="relative h-[18px] border-[3px] border-[#1f1f1f] bg-[#d8ddb9] shadow-[4px_4px_0_#1f1f1f]">
        <div className="absolute left-0 top-0 h-full" style={{ width: `${safeValue}%`, backgroundColor: color }} />
        <div className="absolute inset-0 status-ticks" />
        <div className="absolute left-0 top-0 h-[3px] w-full bg-white/40" />
      </div>
    </div>
  )
}

function TypeBadge({ label, color }) {
  return (
    <div className="relative min-w-[148px] border-[3px] border-white px-3 py-1 text-[12px] uppercase leading-none text-white shadow-[4px_4px_0_#1f1f1f] md:text-[14px]" style={{ backgroundColor: color }}>
      <span className="relative z-10">{label}</span>
      <span className="absolute right-8 top-0 h-full w-[4px] -skew-x-[20deg] bg-white/20" />
      <span className="absolute bottom-[-3px] left-[-3px] h-[3px] w-8 bg-[#1f1f1f]" />
    </div>
  )
}

function PixelMonsterIcon({ variant = 'frog', size = 'md' }) {
  const palettes = {
    frog: { body: '#56b56b', belly: '#f2c957', accent: '#236b67', eye: '#ffffff' },
    spark: { body: '#efc84f', belly: '#5d7280', accent: '#d96042', eye: '#f4f3d7' },
    sprout: { body: '#49a978', belly: '#7ccf9a', accent: '#1f6b48', eye: '#e2464b' },
  }

  const palette = palettes[variant]
  const scaleClass = size === 'lg' ? 'h-24 w-28' : 'h-14 w-16'

  return (
    <div className={`relative ${scaleClass} shrink-0 pixelated`} aria-hidden="true">
      <div className="absolute bottom-1 left-2 h-[62%] w-[68%] border-[3px] border-[#1f1f1f]" style={{ backgroundColor: palette.body }} />
      <div className="absolute bottom-2 left-4 h-[36%] w-[42%] border-[2px] border-[#1f1f1f]" style={{ backgroundColor: palette.belly }} />
      <div className="absolute left-5 top-1 h-[30%] w-[44%] border-[3px] border-[#1f1f1f]" style={{ backgroundColor: palette.body }} />
      <div className="absolute left-[42%] top-[22%] h-3 w-3 border-[2px] border-[#1f1f1f]" style={{ backgroundColor: palette.eye }} />
      <div className="absolute left-[48%] top-[28%] h-1 w-1 bg-[#1f1f1f]" />
      <div className="absolute bottom-0 right-1 h-[24%] w-[28%] border-[3px] border-[#1f1f1f]" style={{ backgroundColor: palette.accent }} />
    </div>
  )
}

function PartySlot({ name, level, type, color, variant }) {
  return (
    <div className="relative flex min-h-[82px] items-center border-[4px] border-[#26313a] bg-[#cbd8a7] px-3 shadow-[6px_6px_0_#1f1f1f]">
      <div className="mr-4 grid h-[58px] w-[82px] place-items-center border-[3px] border-[#26313a] bg-[#e6efc8]">
        <PixelMonsterIcon variant={variant} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="pixel-soft-shadow truncate text-[18px] uppercase leading-none text-white md:text-[22px]">{name}</p>
        <p className="pixel-soft-shadow mt-1 text-[15px] uppercase leading-none text-white md:text-[19px]">LVL.{level}</p>
      </div>
      <div className="absolute -bottom-4 right-3 border-[3px] border-white px-3 py-1 text-[14px] uppercase leading-none text-white shadow-[4px_4px_0_#1f1f1f]" style={{ backgroundColor: color }}>
        {type}
      </div>
    </div>
  )
}

function TrainerSprite() {
  return (
    <div className="relative h-[300px] w-[220px] pixelated" aria-label="Pixel trainer placeholder">
      <div className="absolute left-[74px] top-4 h-16 w-20 border-[4px] border-[#1f1f1f] bg-[#733346] shadow-[6px_0_0_#2b1720]" />
      <div className="absolute left-[86px] top-16 h-16 w-16 border-[4px] border-[#1f1f1f] bg-[#f0b98d]" />
      <div className="absolute left-[104px] top-[88px] h-3 w-3 bg-[#237a72]" />
      <div className="absolute left-[140px] top-[88px] h-3 w-3 bg-[#237a72]" />
      <div className="absolute left-[70px] top-[118px] h-[96px] w-[92px] border-[4px] border-[#1f1f1f] bg-[#d8dcaa]" />
      <div className="absolute left-[52px] top-[124px] h-[88px] w-8 border-[4px] border-[#1f1f1f] bg-[#9fb0a8]" />
      <div className="absolute left-[150px] top-[126px] h-[84px] w-8 border-[4px] border-[#1f1f1f] bg-[#9fb0a8]" />
      <div className="absolute left-[74px] top-[206px] h-[78px] w-10 border-[4px] border-[#1f1f1f] bg-[#8b5d35]" />
      <div className="absolute left-[118px] top-[206px] h-[78px] w-10 border-[4px] border-[#1f1f1f] bg-[#8b5d35]" />
      <div className="absolute left-[54px] bottom-0 h-5 w-[72px] border-[4px] border-[#1f1f1f] bg-white" />
      <div className="absolute left-[118px] bottom-0 h-5 w-[72px] border-[4px] border-[#1f1f1f] bg-white" />
      <div className="absolute bottom-4 left-0">
        <PixelMonsterIcon variant="frog" size="lg" />
      </div>
    </div>
  )
}

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f8d5a4] px-4 py-8 font-pixeled text-[#1f1f1f] md:px-8 lg:px-10">
      <div className="pixel-bg absolute inset-0 opacity-60" />

      <section className="relative mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-[11px] uppercase tracking-[0.35em] text-[#8b402d]">Tailwind base kit</p>
            <h1 className="pixel-title text-[38px] uppercase leading-[0.95] text-white md:text-[56px] lg:text-[72px]">Pixel UI Lab</h1>
          </div>
          <p className="max-w-md text-[11px] leading-6 text-[#6d4d3a] md:text-[13px]">
            A React + Tailwind recreation of chunky retro windows, stat bars, type badges, and party cards.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_390px]">
          <PixelPanel tone="peach" className="min-h-[560px] p-5 md:p-8">
            <WindowControls />
            <div className="absolute -top-10 left-5 right-5 h-12 border-[4px] border-[#1f1f1f] bg-[#ffe7c8] shadow-[6px_6px_0_#1f1f1f]" />
            <h2 className="pixel-title relative z-10 mt-2 text-[44px] uppercase leading-none text-white md:text-[72px]">Tadcrepe</h2>

            <div className="relative mt-6 grid gap-6 md:grid-cols-[280px_1fr]">
              <PixelPanel tone="sage" className="z-10 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[26px] uppercase leading-none text-[#657993] md:text-[34px]">Sam</p>
                    <div className="mt-3 space-y-2 text-[11px] uppercase leading-none text-[#657993] md:text-[14px]">
                      <p>· he/him</p>
                      <p>· 27 yo</p>
                      <p>· lvl 38</p>
                    </div>
                  </div>
                  <div className="grid h-20 w-20 place-items-center border-[4px] border-[#1f1f1f] bg-[#dfe9be] shadow-[4px_4px_0_#1f1f1f]">
                    <PixelMonsterIcon variant="spark" />
                  </div>
                </div>
              </PixelPanel>

              <div className="z-10 space-y-5 md:pl-12">
                {trainerStats.map((stat) => <StatBar key={stat.label} {...stat} />)}
              </div>
            </div>

            <div className="relative mt-8 grid items-end gap-6 md:grid-cols-[260px_1fr]">
              <div className="z-20 mx-auto md:mx-0">
                <TrainerSprite />
              </div>

              <div className="z-10 space-y-6 pb-4">
                <div className="grid grid-cols-2 gap-4">
                  {lowerStats.map((stat) => <StatBar key={stat.label} {...stat} />)}
                </div>

                <PixelPanel tone="mint" className="p-4">
                  <p className="mb-3 text-[16px] uppercase leading-none text-white [text-shadow:3px_3px_0_#9ba984] md:text-[22px]">Social</p>
                  <div className="flex gap-3">
                    {['M', 'C', '☆'].map((icon, index) => (
                      <button key={icon} className="grid h-14 w-14 place-items-center border-[4px] border-[#1f1f1f] bg-white text-[20px] text-[#26313a] shadow-[4px_4px_0_#1f1f1f] transition-transform hover:-translate-y-1" type="button">
                        <span className={index === 0 ? 'text-[#3478d4]' : index === 2 ? 'text-[#5db65d]' : ''}>{icon}</span>
                      </button>
                    ))}
                  </div>
                </PixelPanel>
              </div>
            </div>
          </PixelPanel>

          <div className="space-y-7">
            <PixelPanel tone="slate" className="p-4">
              <p className="mb-5 text-[18px] uppercase leading-none text-[#657993] md:text-[24px]">Party Windows</p>
              <div className="space-y-7">
                {party.map((member) => <PartySlot key={member.name} {...member} />)}
              </div>
            </PixelPanel>

            <PixelPanel tone="cream" className="p-4">
              <p className="mb-4 text-[18px] uppercase leading-none text-[#8b402d] md:text-[24px]">Type Badges</p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {badges.map((badge) => <TypeBadge key={badge.label} {...badge} />)}
              </div>
            </PixelPanel>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
