<template>
  <div class="space-y-5 max-w-4xl mx-auto">

    <div class="relative rounded-2xl border border-white/8 bg-surface overflow-hidden">
      <div class="relative z-10 p-7 flex items-center gap-5">
        <div class="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
          <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 2.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
          </svg>
        </div>
        <div>
          <p class="font-sans text-[10px] font-bold uppercase tracking-widest text-accent mb-1">Command Guide</p>
          <h3 class="font-[Syne] text-xl font-bold text-white">Market Product Guide</h3>
          <p class="font-sans text-sm text-text-muted mt-1 leading-relaxed">Use <code class="font-mono text-accent/80">/market</code> to browse VPN and Discord products. Select a category below to see the guide.</p>
        </div>
      </div>
    </div>

    <div class="flex gap-2">
      <button
        v-for="sub in subTabs"
        :key="sub.id"
        @click="activeSub = sub.id"
        class="flex items-center gap-2 px-4 py-2.5 rounded-xl border font-sans text-sm font-semibold transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        :class="activeSub === sub.id
          ? 'border-accent/40 bg-accent/[0.07] text-white'
          : 'border-white/6 bg-surface text-text-muted hover:border-white/12 hover:text-white'"
      >
        <span>{{ sub.label }}</span>
      </button>
    </div>

    <template v-if="activeSub === 'vpn'">
      <div class="rounded-2xl border border-white/6 bg-surface p-7">
        <div class="flex items-center gap-3 mb-5">
          <div class="w-9 h-9 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
            <svg class="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
            </svg>
          </div>
          <div>
            <p class="font-sans text-[10px] font-bold uppercase tracking-widest text-accent">Step 01</p>
            <h3 class="font-[Syne] text-lg font-bold text-white leading-tight">Command to Start</h3>
          </div>
        </div>
        <p class="font-sans text-sm text-text-muted mb-4">Open the market and select <strong class="text-white">VPN</strong> as the platform:</p>
        <code class="font-mono text-sm bg-secondary border border-white/6 rounded-xl px-4 py-2.5 text-accent inline-block">/market</code>
      </div>

      <div class="rounded-2xl border border-white/6 bg-surface p-7">
        <div class="flex items-center gap-3 mb-5">
          <div class="w-9 h-9 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
            <svg class="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>
          <div>
            <p class="font-sans text-[10px] font-bold uppercase tracking-widest text-accent">Step 02</p>
            <h3 class="font-[Syne] text-lg font-bold text-white leading-tight">Select a VPN</h3>
          </div>
        </div>
        <p class="font-sans text-sm text-text-muted mb-5 leading-relaxed">After selecting VPN, choose from the available providers:</p>
        <div class="grid sm:grid-cols-3 gap-3">
          <div v-for="vpn in vpnOptions" :key="vpn.name" class="p-4 rounded-xl border border-white/6 bg-secondary flex flex-col gap-1.5">
            <p class="font-sans text-sm font-semibold text-white">{{ vpn.name }}</p>
            <p class="font-sans text-xs text-text-muted leading-relaxed">{{ vpn.desc }}</p>
          </div>
        </div>
      </div>
    </template>

    <template v-if="activeSub === 'discord'">
      <div class="rounded-2xl border border-white/6 bg-surface p-7">
        <div class="flex items-center gap-3 mb-5">
          <div class="w-9 h-9 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
            <svg class="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
            </svg>
          </div>
          <div>
            <p class="font-sans text-[10px] font-bold uppercase tracking-widest text-accent">Step 01</p>
            <h3 class="font-[Syne] text-lg font-bold text-white leading-tight">Command to Start</h3>
          </div>
        </div>
        <p class="font-sans text-sm text-text-muted mb-4">Open the market and select <strong class="text-white">Discord</strong> as the platform:</p>
        <code class="font-mono text-sm bg-secondary border border-white/6 rounded-xl px-4 py-2.5 text-accent inline-block">/market</code>
      </div>

      <div class="rounded-2xl border border-white/6 bg-surface p-7">
        <div class="flex items-center gap-3 mb-5">
          <div class="w-9 h-9 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
            <svg class="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>
          <div>
            <p class="font-sans text-[10px] font-bold uppercase tracking-widest text-accent">Step 02</p>
            <h3 class="font-[Syne] text-lg font-bold text-white leading-tight">Select a Service</h3>
          </div>
        </div>
        <p class="font-sans text-sm text-text-muted mb-5 leading-relaxed">After selecting Discord, choose from the available services:</p>
        <div class="grid sm:grid-cols-2 gap-3">
          <div v-for="svc in discordOptions" :key="svc.name" class="p-4 rounded-xl border border-white/6 bg-secondary flex flex-col gap-1.5">
            <p class="font-sans text-sm font-semibold text-white">{{ svc.name }}</p>
            <p class="font-sans text-xs text-text-muted leading-relaxed">{{ svc.desc }}</p>
          </div>
        </div>
      </div>
    </template>

  </div>
</template>

<script setup lang="ts">
const activeSub = ref<'vpn' | 'discord'>('vpn')

const subTabs = [
  { id: 'vpn',     label: 'VPN' },
  { id: 'discord', label: 'Discord' },
]

const vpnOptions = [
  { name: 'Windscribe PRO', desc: 'Premium Windscribe account with unlimited data and all server locations.' },
  { name: 'Mullvad',        desc: 'Privacy-focused VPN with no-logs policy and anonymous accounts.' },
  { name: 'PIA',            desc: 'Private Internet Access — wide server network with strong encryption.' },
]

const discordOptions = [
  { name: 'Nitro Full Accounts', desc: 'Full Discord Nitro accounts with boosting perks, animated avatars, and more.' },
]
</script>
