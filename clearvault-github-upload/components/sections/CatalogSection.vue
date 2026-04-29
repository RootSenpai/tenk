<template>
  <section id="catalog" class="py-24">
    <div class="max-w-7xl mx-auto px-6 md:px-12">

      <div class="grid lg:grid-cols-2 gap-12 mb-16 items-end">
        <div class="reveal anim-slide-in-left">
          <p class="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">Catalog</p>
          <h2 class="font-[Syne] text-4xl md:text-5xl font-bold text-white leading-tight">
            What you'll find inside<br>the Discord.
          </h2>
        </div>
        <div class="reveal anim-fade-in-bottom">
          <p class="font-sans text-text-muted leading-relaxed lg:max-w-sm">
            Every product is browsable from a single bot, with the same filters, previews, and warranty rules across the catalog.
          </p>
        </div>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-px rounded-2xl overflow-hidden border border-white/6 bg-white/[0.04]">
        <div
          v-for="(cat, i) in categories"
          :key="cat.title"
          class="group relative p-7 bg-surface transition-colors duration-200 hover:bg-surface-hover reveal anim-fade-in-bottom"
          :style="{ animationDelay: i * 0.06 + 's' }"
        >
          <div class="flex items-start gap-4">
            <div class="w-10 h-10 rounded-lg bg-accent/8 border border-accent/15 flex items-center justify-center shrink-0 transition-colors group-hover:bg-accent/12">
              <svg class="w-[18px] h-[18px] text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.6">
                <path stroke-linecap="round" stroke-linejoin="round" :d="cat.icon" />
              </svg>
            </div>
            <div class="min-w-0">
              <h3 class="font-[Syne] text-[17px] font-semibold text-white mb-1.5 leading-tight">{{ cat.title }}</h3>
              <p class="font-sans text-[13.5px] text-text-muted leading-relaxed">{{ cat.desc }}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const categories = [
  {
    title: 'Game accounts',
    desc: 'Fortnite, Valorant, and Minecraft accounts filtered by skins, level, region, and warranty status.',
    icon: 'M21 12a9 9 0 11-18 0 9 9 0 0118 0zM10.5 7.5h.008v.008H10.5V7.5zm0 9h.008v.008H10.5V16.5zm-3-4.5h.008v.008H7.5V12zm9 0h.008v.008H16.5V12z',
  },
  {
    title: 'Account previews',
    desc: 'Inspect skins, items, and account history before checkout — no surprises after delivery.',
    icon: 'M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178zM15 12a3 3 0 11-6 0 3 3 0 016 0z',
  },
  {
    title: 'Utility products',
    desc: 'Steam keys, VPN access, and Discord tools delivered with clear restrictions noted up front.',
    icon: 'M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z',
  },
  {
    title: 'Bundles',
    desc: 'Multi-product bundles with itemized contents and delivery status visible before you buy.',
    icon: 'M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z',
  },
  {
    title: 'Booster perks',
    desc: 'Server boosters get checkout discounts and priority queue placement inside Discord.',
    icon: 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z',
  },
  {
    title: 'Stays in Discord',
    desc: 'Purchases tie to your Discord ID — no email signup, full warranty, refunds handled in-server.',
    icon: 'M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z',
  },
]
</script>
