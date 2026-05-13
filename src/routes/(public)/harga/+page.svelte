<script lang="ts">
	import { Button } from "$lib/components/ui/button/index.js";
	import { Check } from "lucide-svelte";

	const tiers = [
		{
			name: "Gratis",
			price: "Rp 0",
			description: "Sempurna untuk blogger pemula yang ingin memulai.",
			features: [
				"Hingga 10 artikel per bulan",
				"Domain svelteblog.me",
				"Analitik dasar",
				"Dukungan komunitas"
			],
			buttonText: "Mulai Gratis",
			featured: false
		},
		{
			name: "Pro",
			price: "Rp 99k",
			description: "Untuk blogger serius yang butuh fitur lebih.",
			features: [
				"Artikel tak terbatas",
				"Domain kustom",
				"Analitik lanjutan",
				"Dukungan email prioritas",
				"Newsletter terintegrasi"
			],
			buttonText: "Langganan Pro",
			featured: true
		},
		{
			name: "Enterprise",
			price: "Rp 499k",
			description: "Solusi lengkap untuk tim dan media besar.",
			features: [
				"Semua fitur Pro",
				"Multi-penulis",
				"Akses API",
				"Manajer akun khusus",
				"SLA 99.9%"
			],
			buttonText: "Hubungi Penjualan",
			featured: false
		}
	];
</script>

<div class="container mx-auto px-4 py-24">
	<div class="text-center max-w-3xl mx-auto mb-20">
		<h1 class="text-4xl font-extrabold tracking-tight sm:text-6xl mb-6">Pilih Paket yang <span class="text-primary">Tepat</span></h1>
		<p class="text-lg text-muted-foreground">
			Satu harga sederhana untuk semua kebutuhan blogging Anda. Tanpa biaya tersembunyi, batalkan kapan saja.
		</p>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
		{#each tiers as tier (tier.name)}
			<div class="relative flex flex-col p-8 rounded-3xl border bg-card transition-all hover:shadow-xl {tier.featured ? 'border-primary ring-1 ring-primary scale-105 z-10' : ''}">
				{#if tier.featured}
					<div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
						Paling Populer
					</div>
				{/if}
				
				<div class="mb-8">
					<h3 class="text-2xl font-bold mb-2">{tier.name}</h3>
					<div class="flex items-baseline gap-1">
						<span class="text-4xl font-extrabold">{tier.price}</span>
						<span class="text-muted-foreground">/bulan</span>
					</div>
					<p class="mt-4 text-sm text-muted-foreground">{tier.description}</p>
				</div>

				<ul class="space-y-4 mb-10 flex-1">
					{#each tier.features as feature (feature)}
						<li class="flex items-start gap-3 text-sm">
							<div class="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
								<Check class="h-3 w-3 text-primary" />
							</div>
							<span>{feature}</span>
						</li>
					{/each}
				</ul>

				<Button variant={tier.featured ? 'default' : 'outline'} class="w-full h-12 text-base font-semibold">
					{tier.buttonText}
				</Button>
			</div>
		{/each}
	</div>

	<div class="mt-24 text-center">
		<h2 class="text-2xl font-bold mb-4">Butuh bantuan memilih?</h2>
		<p class="text-muted-foreground mb-8">Tim kami siap membantu Anda menemukan paket terbaik untuk kebutuhan Anda.</p>
		<Button variant="ghost" href="/kontak">Hubungi Tim Dukungan</Button>
	</div>
</div>
