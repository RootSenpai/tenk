<template>
  <div class="space-y-5 max-w-4xl mx-auto">

    <div class="relative rounded-2xl border border-white/8 bg-surface overflow-hidden">
      <img
        src="https://img.icons8.com/color/240/minecraft-logo.png"
        alt=""
        aria-hidden="true"
        class="absolute right-6 top-1/2 -translate-y-1/2 w-44 h-44 object-contain opacity-30 select-none pointer-events-none"
        style="mask-image: linear-gradient(to left, black 30%, transparent 100%); -webkit-mask-image: linear-gradient(to left, black 30%, transparent 100%);"
      />
      <div class="relative z-10 p-7 flex items-center gap-5">
        <img src="https://img.icons8.com/color/64/minecraft-logo.png" alt="Minecraft" class="w-12 h-12 object-contain shrink-0" />
        <div>
          <p class="font-sans text-[10px] font-bold uppercase tracking-widest text-accent mb-1">Command Guide</p>
          <h3 class="font-[Syne] text-xl font-bold text-white">Minecraft Product Guide</h3>
          <p class="font-sans text-sm text-text-muted mt-1 leading-relaxed">Get the right Minecraft access for the right price. Choose your version, access type, and optional filters through the bot.</p>
        </div>
      </div>
    </div>

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
      <p class="font-sans text-sm text-text-muted mb-4">Use the following command to open the selection menu:</p>
      <code class="font-mono text-sm bg-secondary border border-white/6 rounded-xl px-4 py-2.5 text-accent inline-block">/minecraft</code>
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
          <h3 class="font-[Syne] text-lg font-bold text-white leading-tight">Selecting Version &amp; Access</h3>
        </div>
      </div>
      <p class="font-sans text-sm text-text-muted mb-5 leading-relaxed">When you run the command, select from the following options:</p>
      <div class="grid sm:grid-cols-2 gap-4">
        <div>
          <p class="font-sans text-xs font-semibold uppercase tracking-widest text-text-muted mb-3">Account Type</p>
          <div class="space-y-2">
            <div v-for="type in accountTypes" :key="type.label" class="p-4 rounded-xl border border-white/6 bg-secondary">
              <div class="flex items-center gap-2 mb-1.5">
                <span class="font-mono text-xs text-accent font-bold">{{ type.label }}</span>
              </div>
              <p class="font-sans text-xs text-text-muted leading-relaxed">{{ type.desc }}</p>
            </div>
          </div>
        </div>
        <div>
          <p class="font-sans text-xs font-semibold uppercase tracking-widest text-text-muted mb-3">Access Level</p>
          <div class="space-y-2">
            <div v-for="access in accessLevels" :key="access.label" class="p-4 rounded-xl border border-white/6 bg-secondary">
              <div class="flex items-center gap-2 mb-1.5">
                <span class="font-mono text-xs text-accent font-bold">{{ access.label }}</span>
                <span class="font-sans text-[10px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded-full" :class="access.badgeClass">{{ access.badge }}</span>
              </div>
              <p class="font-sans text-xs text-text-muted leading-relaxed">{{ access.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="rounded-2xl border border-white/6 bg-surface p-7">
      <div class="flex items-center gap-3 mb-5">
        <div class="w-9 h-9 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
          <svg class="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
          </svg>
        </div>
        <div>
          <p class="font-sans text-[10px] font-bold uppercase tracking-widest text-accent">Step 03</p>
          <h3 class="font-[Syne] text-lg font-bold text-white leading-tight">Optional Filters</h3>
        </div>
      </div>
      <p class="font-sans text-sm text-text-muted mb-5 leading-relaxed">Add these in the options box to narrow down results.</p>
      <div class="grid sm:grid-cols-2 gap-3 mb-5">
        <div v-for="filter in filters" :key="filter.cmd" class="p-4 rounded-xl border border-white/6 bg-secondary">
          <code class="font-mono text-xs text-accent block mb-1.5">{{ filter.cmd }}</code>
          <p class="font-sans text-xs text-text-muted leading-relaxed">{{ filter.desc }}</p>
        </div>
      </div>
      <div class="rounded-xl border border-accent/15 bg-accent/5 p-4">
        <p class="font-sans text-xs font-semibold text-accent uppercase tracking-widest mb-3">Example Search</p>
        <div class="font-mono text-sm space-y-1">
          <div class="text-text-muted">/minecraft</div>
          <div class="text-white">version: <span class="text-accent">Java</span></div>
          <div class="text-white">acc_type: <span class="text-accent">FA</span></div>
          <div class="text-white">items: <span class="text-accent">can_name_change=yes, hypixelban=no</span></div>
        </div>
      </div>
    </div>

    <div class="rounded-2xl border border-white/6 bg-surface p-7">
      <div class="flex items-center gap-3 mb-5">
        <div class="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
          <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </div>
        <div>
          <p class="font-sans text-[10px] font-bold uppercase tracking-widest text-emerald-400">Step 04</p>
          <h3 class="font-[Syne] text-lg font-bold text-white leading-tight">Finding &amp; Purchasing</h3>
        </div>
      </div>
      <p class="font-sans text-sm text-text-muted mb-5 leading-relaxed">Use the filters to find a matching account, top up your balance, then follow the prompts to complete the purchase.</p>
      <div class="grid sm:grid-cols-2 gap-3">
        <div class="p-5 rounded-xl border border-white/6 bg-secondary">
          <code class="font-mono text-sm text-accent block mb-2">/topup</code>
          <p class="font-sans text-xs text-text-muted leading-relaxed">Add funds to your balance to cover the account's cost.</p>
        </div>
        <div class="p-5 rounded-xl border border-white/6 bg-secondary">
          <code class="font-mono text-sm text-accent block mb-2">/bal</code>
          <p class="font-sans text-xs text-text-muted leading-relaxed">Verify your balance after topping up.</p>
        </div>
      </div>
    </div>

    <div class="rounded-2xl border border-white/6 bg-surface p-7">
      <div class="flex items-center gap-3 mb-5">
        <div class="w-9 h-9 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
          <svg class="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
          </svg>
        </div>
        <div>
          <p class="font-sans text-[10px] font-bold uppercase tracking-widest text-accent">Step 05</p>
          <h3 class="font-[Syne] text-lg font-bold text-white leading-tight">Owning the Product</h3>
        </div>
      </div>
      <p class="font-sans text-sm text-text-muted leading-relaxed">Use <code class="font-mono text-accent/80">/owned</code> to view your purchased accounts. If the account has an active warranty, you will see a <strong class="text-white font-semibold">Refund Button</strong> available.</p>
    </div>

    <div class="rounded-2xl border border-rose-500/20 bg-rose-500/5 p-7">
      <div class="flex items-center gap-3 mb-5">
        <div class="w-9 h-9 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center shrink-0">
          <svg class="w-4 h-4 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
          </svg>
        </div>
        <div>
          <p class="font-sans text-[10px] font-bold uppercase tracking-widest text-rose-400">Policy</p>
          <h3 class="font-[Syne] text-lg font-bold text-white leading-tight">Refund Policy</h3>
        </div>
      </div>
      <p class="font-sans text-sm text-text-muted mb-4">Refunds available within <strong class="text-white">24 hours</strong> only if the account was:</p>
      <div class="flex flex-wrap gap-2 mb-5">
        <span class="font-sans text-xs font-semibold px-3 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400">Pulled</span>
        <span class="font-sans text-xs font-semibold px-3 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400">Login Failed</span>
        <span class="font-sans text-xs font-semibold px-3 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400">Banned on Purchase</span>
      </div>
      <div class="p-3.5 rounded-xl bg-amber-500/5 border border-amber-500/15 mb-5 flex items-start gap-2.5">
        <svg class="w-4 h-4 text-amber-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
        </svg>
        <p class="font-sans text-xs text-amber-300/80 leading-relaxed">Include an <strong class="text-amber-300">unlisted YouTube link</strong> showing you purchasing and attempting to log in. Abuse leads to blacklisting.</p>
      </div>
      <ol class="space-y-2.5">
        <li v-for="(step, i) in refundSteps" :key="i" class="flex items-start gap-3">
          <span class="font-[Syne] text-xs font-bold w-5 h-5 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">{{ i + 1 }}</span>
          <p class="font-sans text-sm text-text-muted">{{ step }}</p>
        </li>
      </ol>
    </div>

  </div>
</template>

<script setup lang="ts">
const accountTypes = [
  { label: 'Java',    desc: 'Java Edition only.' },
  { label: 'Bedrock', desc: 'Bedrock Edition only.' },
  { label: 'Both',    desc: 'Java + Bedrock combined.' },
]

const accessLevels = [
  { label: 'FA',  badge: 'Full Access',     badgeClass: 'bg-accent/10 text-accent',         desc: 'Includes email access. Best for main accounts.' },
  { label: 'NFA', badge: 'Non-Full Access', badgeClass: 'bg-white/8 text-text-muted',        desc: 'No email access. Much cheaper — ideal for alting.' },
]

const filters = [
  { cmd: 'can_name_change=yes', desc: 'Show only accounts ready for a name change.' },
  { cmd: 'hypixelban=no',       desc: 'Show only accounts with no active Hypixel ban.' },
]

const refundSteps = [
  'Run /owned and select your account.',
  'Press the Refund Button if warranty is still active.',
  'Provide your reason (pulled or banned) + an unlisted YouTube proof link.',
]
</script>
