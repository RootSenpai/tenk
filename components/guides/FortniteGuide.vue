<template>
  <div class="space-y-5 max-w-4xl mx-auto">

    <div class="relative rounded-2xl border border-white/8 bg-surface overflow-hidden">
      <img
        :src="'/images/games/fortnite.jpg'"
        alt=""
        aria-hidden="true"
        class="absolute right-0 top-0 h-full w-1/2 sm:w-2/3 object-cover object-center opacity-60 select-none pointer-events-none"
        style="mask-image: linear-gradient(to left, black 0%, transparent 100%); -webkit-mask-image: linear-gradient(to left, black 0%, transparent 100%);"
      />
      <div class="relative z-10 p-7 flex items-center gap-5">
        <img src="https://img.icons8.com/color/64/fortnite.png" alt="Fortnite" class="w-12 h-12 object-contain shrink-0" />
        <div>
          <p class="font-sans text-[10px] font-bold uppercase tracking-widest text-accent mb-1">Command Guide</p>
          <h3 class="font-[Syne] text-xl font-bold text-white">Fortnite Product Guide</h3>
          <p class="font-sans text-sm text-text-muted mt-1 leading-relaxed">Follow this guide to buy Fortnite products through the bot. Format everything properly and spell names correctly!</p>
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
      <p class="font-sans text-sm text-text-muted mb-4">Use one of the following as your base command:</p>
      <div class="flex flex-wrap gap-3">
        <code class="font-mono text-sm bg-secondary border border-white/6 rounded-xl px-4 py-2.5 text-accent">/fortnite</code>
      </div>
    </div>

    <div class="rounded-2xl border border-white/6 bg-surface p-7">
      <div class="flex items-center gap-3 mb-5">
        <div class="w-9 h-9 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
          <svg class="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3zM6 6h.008v.008H6V6z" />
          </svg>
        </div>
        <div>
          <p class="font-sans text-[10px] font-bold uppercase tracking-widest text-accent">Step 02</p>
          <h3 class="font-[Syne] text-lg font-bold text-white leading-tight">Adding Skins or Items</h3>
        </div>
      </div>
      <p class="font-sans text-sm text-text-muted mb-4 leading-relaxed">List the skin(s) and/or pickaxe(s) you want in the items box, followed by any filter commands. Separate everything with a comma.</p>
      <div class="font-mono text-sm bg-secondary border border-white/6 rounded-xl p-4 space-y-1">
        <div class="text-text-muted">/fortnite</div>
        <div class="text-white">items: <span class="text-accent">renegade raider, skins=100</span></div>
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
          <h3 class="font-[Syne] text-lg font-bold text-white leading-tight">Customizing Commands</h3>
        </div>
      </div>
      <p class="font-sans text-sm text-text-muted mb-5 leading-relaxed">Add these filter commands to the items box to narrow your results.</p>
      <div class="grid sm:grid-cols-2 gap-3 mb-5">
        <div v-for="filter in filters" :key="filter.cmd" class="p-4 rounded-xl border border-white/6 bg-secondary">
          <code class="font-mono text-xs text-accent block mb-1.5">{{ filter.cmd }}</code>
          <p class="font-sans text-xs text-text-muted leading-relaxed">{{ filter.desc }}</p>
          <p v-if="filter.note" class="font-sans text-[11px] text-text-muted/55 mt-1.5 leading-relaxed italic">{{ filter.note }}</p>
        </div>
      </div>
      <div class="rounded-xl border border-accent/15 bg-accent/5 p-4">
        <p class="font-sans text-xs font-semibold text-accent uppercase tracking-widest mb-3">Example — Multiple Options</p>
        <div class="font-mono text-sm space-y-1">
          <div class="text-text-muted">/fortnite</div>
          <div class="text-white">items: <span class="text-accent">black knight, ice breaker, skins=100, lvl=50, vbucks=200</span></div>
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
      <p class="font-sans text-sm text-text-muted mb-5 leading-relaxed">Use the bot to find a product matching your specifications, then top up your balance and complete the purchase.</p>
      <div class="grid sm:grid-cols-2 gap-3">
        <div class="p-5 rounded-xl border border-white/6 bg-secondary">
          <code class="font-mono text-sm text-accent block mb-2">/topup</code>
          <p class="font-sans text-xs text-text-muted leading-relaxed">Add funds to your balance to cover the product's cost.</p>
        </div>
        <div class="p-5 rounded-xl border border-white/6 bg-secondary">
          <code class="font-mono text-sm text-accent block mb-2">/bal</code>
          <p class="font-sans text-xs text-text-muted leading-relaxed">Verify your balance after topping up before purchasing.</p>
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
      <p class="font-sans text-sm text-text-muted mb-4 leading-relaxed">Use <code class="font-mono text-accent/80">/owned</code> to view purchased products. Select an account to manage it — if it still has warranty, you'll see a <strong class="text-white font-semibold">Refund Button</strong>.</p>
      <div class="p-3 rounded-xl bg-accent/5 border border-accent/10 flex items-start gap-2.5">
        <svg class="w-4 h-4 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
        <p class="font-sans text-xs text-text-muted">The refund button only appears during the active 24-hour warranty window.</p>
      </div>
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
      <p class="font-sans text-sm text-text-muted mb-4 leading-relaxed">Refunds are available within <strong class="text-white">24 hours</strong> only if the product was:</p>
      <div class="flex flex-wrap gap-2 mb-5">
        <span class="font-sans text-xs font-semibold px-3 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400">Pulled</span>
        <span class="font-sans text-xs font-semibold px-3 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400">Login Failed</span>
        <span class="font-sans text-xs font-semibold px-3 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400">Banned on Purchase</span>
      </div>
      <div class="p-3.5 rounded-xl bg-amber-500/5 border border-amber-500/15 mb-5 flex items-start gap-2.5">
        <svg class="w-4 h-4 text-amber-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
        </svg>
        <p class="font-sans text-xs text-amber-300/80 leading-relaxed">Include an <strong class="text-amber-300">unlisted YouTube link</strong> showing you purchasing and attempting to log in. No other reasons accepted. Abuse leads to blacklisting.</p>
      </div>
      <p class="font-sans text-sm font-semibold text-white mb-3">How to refund:</p>
      <ol class="space-y-2.5">
        <li v-for="(step, i) in refundSteps" :key="i" class="flex items-start gap-3">
          <span class="font-[Syne] text-xs font-bold w-5 h-5 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">{{ i + 1 }}</span>
          <p class="font-sans text-sm text-text-muted leading-relaxed">{{ step }}</p>
        </li>
      </ol>
    </div>

    <div class="rounded-2xl border border-white/6 bg-surface p-7">
      <div class="flex items-center gap-3 mb-5">
        <div class="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
          <svg class="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
          </svg>
        </div>
        <div>
          <p class="font-sans text-[10px] font-bold uppercase tracking-widest text-amber-400">Tips</p>
          <h3 class="font-[Syne] text-lg font-bold text-white leading-tight">Quick Tips</h3>
        </div>
      </div>
      <ul class="space-y-3">
        <li v-for="tip in tips" :key="tip" class="flex items-start gap-3">
          <svg class="w-4 h-4 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
          <p class="font-sans text-sm text-text-muted leading-relaxed">{{ tip }}</p>
        </li>
      </ul>
    </div>

  </div>
</template>

<script setup lang="ts">
const filters = [
  { cmd: 'skins=100',           desc: 'Minimum number of skins (e.g. at least 100 skins).' },
  { cmd: 'lvl=100',             desc: 'Minimum account level.' },
  { cmd: 'vbucks=100',          desc: 'Minimum V-Bucks amount.' },
  { cmd: 'ranked ready',        desc: 'Show only accounts ready for ranked gameplay.' },
  { cmd: 'cmail=true',          desc: 'Changeable mail — email has passed the 90-day non-claim period.', note: 'If an account doesn\'t show Changeable Mail it\'s still FA — the email just isn\'t changeable yet.' },
  { cmd: 'tready',              desc: 'Tournament-ready products (not events played).' },
  { cmd: 'og ghoul trooper',    desc: 'OG Ghoul Trooper variant.' },
  { cmd: 'og skull trooper',    desc: 'OG Skull Trooper variant.' },
  { cmd: 'og renegade raider',  desc: 'OG Renegade Raider variant.' },
  { cmd: 'og aerial assault trooper', desc: 'OG Aerial Assault Trooper variant.' },
  { cmd: 'lpdays=30',           desc: 'Products last active a set number of days ago (e.g. lpdays=30 means inactive for 30+ days).' },
]

const refundSteps = [
  'Run /owned and select your account.',
  'If it has warranty, press the Refund Button.',
  'Provide your reason (pulled or banned) + an unlisted YouTube link as proof.',
  'Wait for staff review within 24 hours.',
]

const tips = [
  'Always separate items and commands with a comma.',
  'Double-check spelling to avoid errors — wrong names return no results.',
  'Don\'t use ranked ready and lvl= together — this is redundant.',
  'Combine multiple filter commands in one search for the best results.',
]
</script>
