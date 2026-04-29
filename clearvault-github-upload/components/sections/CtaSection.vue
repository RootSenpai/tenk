<template>
  <section class="py-24">
    <div class="max-w-7xl mx-auto px-6 md:px-12">
      <div class="relative overflow-hidden rounded-2xl border border-white/6 bg-surface reveal anim-fade-in-bottom">

        <div aria-hidden="true" class="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-accent/10 blur-[120px] pointer-events-none" />

        <div class="relative grid md:grid-cols-[1.4fr_1fr] gap-px bg-white/[0.04]">

          <div class="bg-surface p-10 md:p-14">
            <div class="inline-flex items-center gap-2 mb-6">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span class="font-sans text-[11px] font-semibold uppercase tracking-widest text-text-muted">Server is live</span>
            </div>
            <h2 class="font-[Syne] text-3xl md:text-4xl font-extrabold text-white leading-[1.05] mb-5">
              Run the market<br>from inside Discord.
            </h2>
            <p class="font-sans text-text-muted leading-relaxed max-w-md mb-7">
              Join the server, type <code class="font-mono text-accent text-sm">/fortnite</code>, <code class="font-mono text-accent text-sm">/valorant</code>, or <code class="font-mono text-accent text-sm">/market</code> — the bot does the rest. No signup, no website checkout.
            </p>

            <div class="flex flex-wrap items-center gap-2">
              <span class="font-sans text-[10px] font-semibold uppercase tracking-widest text-text-muted/60 mr-1">Supports</span>
              <span v-for="game in games" :key="game" class="font-sans text-xs font-medium text-white/80 px-3 py-1 rounded-full border border-white/8 bg-white/[0.03]">
                {{ game }}
              </span>
            </div>
          </div>

          <div class="bg-surface p-10 md:p-12 flex flex-col justify-center">

            <div class="mb-8">
              <p class="font-sans text-[10px] font-semibold uppercase tracking-widest text-text-muted/60 mb-2">Invite</p>
              <p class="font-mono text-2xl md:text-3xl font-bold text-white leading-none">
                discord.gg<span class="text-accent">/clear</span>
              </p>
            </div>

            <a
              href="https://discord.gg/clear"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex h-12 items-center justify-center px-6 rounded-full bg-accent font-sans font-semibold text-background transition-colors duration-200 hover:bg-accent/90 w-full"
            >
              <svg class="w-5 h-5 mr-2.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 00-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 00-4.8 0c-.14-.34-.35-.76-.54-1.09-.01-.02-.04-.03-.07-.03-1.5.26-2.93.71-4.27 1.33-.01 0-.02.01-.03.02-2.72 4.07-3.47 8.03-3.1 11.95 0 .02.01.04.03.05 1.8 1.32 3.53 2.12 5.24 2.65.03.01.06 0 .07-.02.4-.55.76-1.13 1.07-1.74.02-.04 0-.08-.04-.09-.57-.22-1.11-.48-1.64-.78-.04-.02-.04-.08-.01-.11.11-.08.22-.17.33-.25.02-.02.05-.02.07-.01 3.44 1.57 7.15 1.57 10.55 0 .02-.01.05 0 .07.01.11.09.22.17.33.26.04.03.04.09-.01.11-.52.31-1.07.56-1.64.78-.04.01-.05.06-.04.09.32.61.68 1.19 1.07 1.74.03.01.06.02.09.01 1.72-.53 3.45-1.33 5.25-2.65.02-.01.03-.03.03-.05.44-4.53-.73-8.46-3.1-11.95-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.83 2.12-1.89 2.12z"/>
              </svg>
              Open in Discord
            </a>

            <p class="font-sans text-xs text-text-muted/55 mt-4 text-center">
              Free to join · 24/7 delivery
            </p>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const games = ['Fortnite', 'Valorant', 'Minecraft', 'Steam', 'VPN']
</script>
