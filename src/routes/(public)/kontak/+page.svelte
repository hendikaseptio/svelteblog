<script lang="ts">
	import { Button } from "$lib/components/ui/button/index.js";
	import { Input } from "$lib/components/ui/input/index.js";
	import { Label } from "$lib/components/ui/label/index.js";
	import { Textarea } from "$lib/components/ui/textarea/index.js";
	import { Mail, MessageSquare, Phone } from "lucide-svelte";
</script>

<div class="container mx-auto px-4 py-24">
	<div class="max-w-5xl mx-auto">
		<div class="text-center mb-16">
			<h1 class="text-4xl font-extrabold tracking-tight sm:text-5xl">Hubungi Kami</h1>
			<p class="mt-4 text-lg text-muted-foreground">Ada pertanyaan atau saran? Kami akan senang mendengarnya dari Anda.</p>
		</div>

		<div class="grid grid-cols-1 gap-12 md:grid-cols-3">
			<div class="space-y-8">
				<div class="flex items-start gap-4">
					<div class="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
						<Mail class="h-5 w-5" />
					</div>
					<div>
						<h3 class="font-bold">Email</h3>
						<p class="text-sm text-muted-foreground">halo@svelteblog.com</p>
					</div>
				</div>
				<div class="flex items-start gap-4">
					<div class="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
						<Phone class="h-5 w-5" />
					</div>
					<div>
						<h3 class="font-bold">Telepon</h3>
						<p class="text-sm text-muted-foreground">+62 812 3456 7890</p>
					</div>
				</div>
				<div class="flex items-start gap-4">
					<div class="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
						<MessageSquare class="h-5 w-5" />
					</div>
					<div>
						<h3 class="font-bold">Chat</h3>
						<p class="text-sm text-muted-foreground">Tersedia Senin-Jumat</p>
					</div>
				</div>
			</div>

			<div class="md:col-span-2">
				<form class="space-y-6 rounded-2xl border bg-card p-8 shadow-sm">
					<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
						<div class="space-y-2">
							<Label for="name">Nama Lengkap</Label>
							<Input id="name" placeholder="John Doe" />
						</div>
						<div class="space-y-2">
							<Label for="email">Email</Label>
							<Input id="email" type="email" placeholder="john@example.com" />
						</div>
					</div>
					<div class="space-y-2">
						<Label for="subject">Subjek</Label>
						<Input id="subject" placeholder="Ingin bertanya tentang..." />
					</div>
					<div class="space-y-2">
						<Label for="message">Pesan</Label>
						<Textarea id="message" placeholder="Tuliskan pesan Anda di sini..." rows={6} />
					</div>
					<Button type="submit" class="w-full sm:w-auto px-8">Kirim Pesan</Button>
				</form>
			</div>
		</div>
	</div>
</div>
