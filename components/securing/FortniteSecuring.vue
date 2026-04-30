<template>
  <div class="space-y-5 max-w-4xl mx-auto">

    <div class="relative rounded-2xl border border-white/8 bg-surface overflow-hidden">
      <img
        :src="'/images/games/fortnite.jpg'"
        alt=""
        aria-hidden="true"
        class="absolute right-0 top-0 h-full w-64 object-cover object-center opacity-[0.12] select-none pointer-events-none"
        style="mask-image: linear-gradient(to left, black 0%, transparent 100%); -webkit-mask-image: linear-gradient(to left, black 0%, transparent 100%);"
      />
      <div class="relative z-10 p-7 flex items-center gap-5">
        <img src="https://img.icons8.com/color/64/fortnite.png" alt="Fortnite" class="w-12 h-12 object-contain shrink-0" />
        <div>
          <p class="font-sans text-[10px] font-bold uppercase tracking-widest text-accent mb-1">Security Guide</p>
          <h3 class="font-[Syne] text-xl font-bold text-white">Buyer's Guide — Fortnite Products</h3>
          <p class="font-sans text-sm text-text-muted mt-1 leading-relaxed">Once you've purchased a digital product, follow these steps to keep it secure and minimize the risk of service interruptions.</p>
        </div>
      </div>
    </div>

    <div class="rounded-2xl border border-white/6 bg-surface p-7">
      <div class="flex items-center gap-3 mb-5">
        <div class="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
          <svg class="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <p class="font-sans text-[10px] font-bold uppercase tracking-widest text-amber-400">Before You Buy</p>
          <h3 class="font-[Syne] text-lg font-bold text-white leading-tight">Longevity Tips</h3>
        </div>
      </div>
      <p class="font-sans text-sm text-text-muted mb-5 leading-relaxed">If you want your product to last as long as possible, use these filters when searching:</p>
      <div class="space-y-3">
        <div v-for="tip in longevityTips" :key="tip.cmd" class="p-4 rounded-xl border border-white/6 bg-secondary">
          <div class="flex items-start gap-3">
            <svg class="w-4 h-4 text-amber-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            <div>
              <p class="font-sans text-sm text-white mb-1">{{ tip.title }}</p>
              <p class="font-sans text-xs text-text-muted leading-relaxed mb-2">{{ tip.desc }}</p>
              <code class="font-mono text-xs text-accent">{{ tip.cmd }}</code>
              <p v-if="tip.note" class="font-sans text-[11px] text-text-muted/60 mt-1.5 italic leading-relaxed">{{ tip.note }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="rounded-2xl border border-white/6 bg-surface p-7">
      <div class="flex items-center gap-3 mb-5">
        <div class="w-9 h-9 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
          <svg class="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
          </svg>
        </div>
        <div>
          <p class="font-sans text-[10px] font-bold uppercase tracking-widest text-accent">Section 01</p>
          <h3 class="font-[Syne] text-lg font-bold text-white leading-tight">Protecting from Access Loss</h3>
        </div>
      </div>
      <ul class="space-y-3">
        <li v-for="point in section1" :key="point" class="flex items-start gap-3">
          <svg class="w-4 h-4 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
          <p class="font-sans text-sm text-text-muted leading-relaxed">{{ point }}</p>
        </li>
      </ul>
    </div>

    <div class="rounded-2xl border border-white/6 bg-surface p-7">
      <div class="flex items-center gap-3 mb-5">
        <div class="w-9 h-9 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
          <svg class="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
        </div>
        <div>
          <p class="font-sans text-[10px] font-bold uppercase tracking-widest text-accent">Section 02</p>
          <h3 class="font-[Syne] text-lg font-bold text-white leading-tight">Monitoring Your Contact Email</h3>
        </div>
      </div>
      <p class="font-sans text-sm text-text-muted mb-5 leading-relaxed">You will receive full access to the email linked to your product. Watch for unexpected change request emails like this:</p>
      <div class="font-mono text-xs bg-secondary border border-white/6 rounded-xl p-4 mb-5 space-y-1 leading-relaxed">
        <p class="text-text-muted">Subject: <span class="text-white">Change Request for Your Linked Product</span></p>
        <p class="text-text-muted mt-2">Hello,</p>
        <p class="text-text-muted">We received a request to update the email address linked to your product from <span class="text-accent">a***@example.com</span> to <span class="text-rose-400">b***@example.com</span>.</p>
        <p class="text-text-muted mt-1">If you did not make this request, use the cancellation link in this email to prevent unauthorized access.</p>
      </div>
      <p class="font-sans text-sm font-semibold text-white mb-3">What to do:</p>
      <ol class="space-y-2.5 mb-4">
        <li v-for="(step, i) in emailSteps" :key="i" class="flex items-start gap-3">
          <span class="font-[Syne] text-xs font-bold w-5 h-5 rounded-full bg-accent/20 text-accent flex items-center justify-center shrink-0 mt-0.5">{{ i + 1 }}</span>
          <p class="font-sans text-sm text-text-muted leading-relaxed">{{ step }}</p>
        </li>
      </ol>
      <div class="p-3.5 rounded-xl bg-accent/5 border border-accent/10 flex items-start gap-2.5">
        <svg class="w-4 h-4 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
        </svg>
        <p class="font-sans text-xs text-text-muted leading-relaxed">Cancelling email change requests prevents any unauthorized person from reclaiming the product.</p>
      </div>
    </div>

    <div class="rounded-2xl border border-white/6 bg-surface p-7">
      <div class="flex items-center gap-3 mb-5">
        <div class="w-9 h-9 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
          <svg class="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <div>
          <p class="font-sans text-[10px] font-bold uppercase tracking-widest text-accent">Section 03</p>
          <h3 class="font-[Syne] text-lg font-bold text-white leading-tight">Be Cautious with Product Changes</h3>
        </div>
      </div>
      <p class="font-sans text-sm text-text-muted mb-4 leading-relaxed">Issuing platforms may monitor significant modifications and flag them as unusual. To reduce the risk of access restrictions:</p>
      <ul class="space-y-3">
        <li class="flex items-start gap-3">
          <svg class="w-4 h-4 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
          <p class="font-sans text-sm text-text-muted leading-relaxed">Avoid making major updates (region, payment methods, personal details) immediately after purchase.</p>
        </li>
        <li class="flex items-start gap-3">
          <svg class="w-4 h-4 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
          <p class="font-sans text-sm text-text-muted leading-relaxed">Spread out changes gradually rather than doing them all at once.</p>
        </li>
      </ul>
    </div>

    <div class="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-7">
      <div class="flex items-center gap-3 mb-5">
        <div class="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
          <svg class="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
          </svg>
        </div>
        <div>
          <p class="font-sans text-[10px] font-bold uppercase tracking-widest text-amber-400">Section 04</p>
          <h3 class="font-[Syne] text-lg font-bold text-white leading-tight">Competitive Use Warning</h3>
        </div>
      </div>
      <p class="font-sans text-sm text-text-muted mb-5 leading-relaxed">Do not enter tournaments, cups, or ranked events with a product unless it is specifically labeled as tournament-ready.</p>
      <div class="space-y-3 mb-5">
        <div class="p-3.5 rounded-xl bg-rose-500/5 border border-rose-500/15 flex items-start gap-2.5">
          <svg class="w-4 h-4 text-rose-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
          </svg>
          <p class="font-sans text-xs text-rose-300/80 leading-relaxed">Products not marked as tournament-ready may have competitive access disabled if used in those modes. This is not covered under warranty.</p>
        </div>
      </div>
      <div class="p-3.5 rounded-xl bg-secondary border border-white/6 flex items-center gap-3">
        <svg class="w-4 h-4 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
        </svg>
        <p class="font-sans text-xs text-text-muted">Use the <code class="font-mono text-accent/80">tready</code> filter in the marketplace to view only tournament-ready products.</p>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
const longevityTips = [
  {
    title: 'Look for "Last Active 30+ Days"',
    desc: 'Products that haven\'t been active for at least 30 days before purchase generally have a lower chance of sudden pullbacks. The longer the better.',
    cmd: 'lpdays=30',
  },
  {
    title: 'Filter for Changeable Mail',
    desc: 'Shows products where the email has passed the 90-day non-claim period and is now changeable. These products typically have a proven track record in our system.',
    cmd: 'cmail=true',
    note: 'If a product doesn\'t have changeable mail, it\'s still FA — the email just isn\'t changeable yet.',
  },
]

const emailSteps = [
  'Log into the email account and locate the cancellation link.',
  'Click the link to cancel the change request.',
  'After the warranty period, consider updating your security details for additional safety.',
]

const section1 = [
  'Avoid unlinking your product from connected services unless absolutely necessary — the issuing platform can sometimes detect major changes.',
  'Leaving most linked services intact reduces the chances of losing access.',
  'If you encounter unexpected logouts or "session invalid" errors, you may consider unlinking from unused services — but only do this if required.',
]
</script>
