<template>
  <section id="policies" class="py-24">
    <div class="max-w-7xl mx-auto px-6 md:px-12">

      <div class="grid lg:grid-cols-2 gap-12 mb-16 items-end">
        <div class="reveal anim-slide-in-left">
          <p class="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">Checkout Policies</p>
          <h2 class="font-[Syne] text-4xl md:text-5xl font-bold text-white leading-tight">
            Clear terms<br>before payment.
          </h2>
        </div>
        <div class="reveal anim-fade-in-bottom">
          <p class="font-sans text-text-muted leading-relaxed lg:max-w-sm">
            ClearVault publishes the details customers need before buying: what is sold,
            how it is delivered, how to get help, and when warranty, refunds, or
            cancellations apply.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div
          v-for="(policy, i) in policies"
          :key="policy.num"
          class="rounded-2xl border border-white/6 bg-surface p-8 reveal anim-fade-in-bottom"
          :class="policy.span"
          :style="{ animationDelay: i * 0.08 + 's' }"
        >
          <div class="w-10 h-10 rounded-xl flex items-center justify-center font-[Syne] font-bold text-sm mb-5" :class="policy.numClass">
            {{ policy.num }}
          </div>
          <h3 class="font-[Syne] text-xl font-bold text-white mb-2">{{ policy.title }}</h3>
          <p class="font-sans text-text-muted text-[15px] leading-relaxed">{{ policy.desc }}</p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const policies = [
  {
    span: 'md:col-span-5',
    num: '01', numClass: 'bg-amber-500/10 border border-amber-500/20 text-amber-400',
    title: 'Business and Support',
    desc: 'Business name: ClearVault. Customer service is handled exclusively through Discord tickets at discord.gg/clear.',
  },
  {
    span: 'md:col-span-7',
    num: '02', numClass: 'bg-accent/10 border border-accent/20 text-accent',
    title: 'Digital Products',
    desc: 'ClearVault offers digital products only when we reasonably believe they are lawful, transferable, and allowed for sale.',
  },
  {
    span: 'md:col-span-7',
    num: '03', numClass: 'bg-rose-500/10 border border-rose-500/20 text-rose-400',
    title: 'Delivery and Warranty',
    desc: 'No physical goods are shipped. Eligible purchases are delivered through Discord. Report delivery or functionality issues within the 24-hour warranty window.',
  },
  {
    span: 'md:col-span-5',
    num: '04', numClass: 'bg-amber-500/10 border border-amber-500/20 text-amber-400',
    title: 'Refunds and Disputes',
    desc: 'All sales are final unless covered by warranty or required by law. Clear video evidence may be required before replacement or refund review.',
  },
  {
    span: 'md:col-span-5',
    num: '05', numClass: 'bg-accent/10 border border-accent/20 text-accent',
    title: 'Returns and Cancellations',
    desc: 'Digital products cannot be physically returned. Orders may be cancelled before digital delivery begins.',
  },
  {
    span: 'md:col-span-7',
    num: '06', numClass: 'bg-rose-500/10 border border-rose-500/20 text-rose-400',
    title: 'Restrictions and Promotions',
    desc: 'Products are unavailable where prohibited. Booster bonuses and promotions apply only when shown in Discord or at checkout.',
  },
]
</script>
