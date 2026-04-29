<template>
  <section id="services" class="py-24">
    <div class="max-w-7xl mx-auto px-6 md:px-12">

      <div class="grid lg:grid-cols-2 gap-12 mb-16 items-end">
        <div class="reveal anim-slide-in-left">
          <p class="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">Built for Discord</p>
          <h2 class="font-[Syne] text-4xl md:text-5xl font-bold text-white leading-tight">
            Clean tools for buying,<br>checking, and managing<br>digital orders.
          </h2>
        </div>
        <div class="reveal anim-fade-in-bottom">
          <p class="font-sans text-text-muted leading-relaxed lg:max-w-sm">
            ClearVault keeps the important actions inside Discord while giving members
            a sharp, easy-to-scan home page that matches the bot experience.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div
          v-for="(feature, i) in features"
          :key="feature.title"
          class="rounded-2xl border border-white/6 bg-surface p-8 reveal anim-fade-in-bottom"
          :class="feature.span"
          :style="{ animationDelay: i * 0.1 + 's' }"
        >
          <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-6" :class="feature.iconBg">
            <svg class="w-6 h-6" :class="feature.iconColor" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" :d="feature.icon" />
            </svg>
          </div>
          <h3 class="font-[Syne] text-xl font-bold text-white mb-2">{{ feature.title }}</h3>
          <p class="font-sans text-text-muted text-[15px] leading-relaxed">{{ feature.desc }}</p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const features = [
  {
    span: 'md:col-span-7',
    title: 'Catalog Browser',
    desc: 'Browse supported platforms from Discord and jump into filtered results without messy menus.',
    icon: 'M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zm0 9.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zm9.75-9.75A2.25 2.25 0 0115.75 3.75H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zm0 9.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z',
    iconBg: 'bg-accent/10 border border-accent/20',
    iconColor: 'text-accent',
  },
  {
    span: 'md:col-span-5',
    title: 'Order Tracking',
    desc: 'Delivery status, support history, and receipt details stay organized for each purchase.',
    icon: 'M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z',
    iconBg: 'bg-emerald-500/10 border border-emerald-500/20',
    iconColor: 'text-emerald-400',
  },
  {
    span: 'md:col-span-5',
    title: 'Locker Previews',
    desc: 'Preview reports turn digital product details into polished shareable visuals before checkout.',
    icon: 'M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
    iconBg: 'bg-amber-500/10 border border-amber-500/20',
    iconColor: 'text-amber-400',
  },
  {
    span: 'md:col-span-7',
    title: 'Support Mode',
    desc: 'Staff can review order details when a customer enables temporary support access. Ranked staff only.',
    icon: 'M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z',
    iconBg: 'bg-rose-500/10 border border-rose-500/20',
    iconColor: 'text-rose-400',
  },
  {
    span: 'md:col-span-7',
    title: 'Booster Perks',
    desc: 'Server boosters get promotional checkout perks and room for premium benefits as the community grows.',
    icon: 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z',
    iconBg: 'bg-violet-500/10 border border-violet-500/20',
    iconColor: 'text-violet-400',
  },
  {
    span: 'md:col-span-5',
    title: 'Order Hub',
    desc: 'Members can view purchases, retrieve details, request refunds, and keep their orders organized.',
    icon: 'M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z',
    iconBg: 'bg-accent/10 border border-accent/20',
    iconColor: 'text-accent',
  },
]
</script>
