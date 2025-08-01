<script lang="ts">
	interface Props {
		value: any[];
	}

	let { value }: Props = $props();

	// Simple portable text renderer for now
	function renderPortableText(blocks: any[]): string {
		return blocks.map(block => {
			if (block._type === 'block') {
				const style = block.style || 'normal';
				const children = block.children?.map((child: any) => child.text).join('') || '';
				
				switch (style) {
					case 'h1':
						return `<h1 class="text-4xl font-bold mb-6 text-gray-900">${children}</h1>`;
					case 'h2':
						return `<h2 class="text-3xl font-semibold mb-5 text-gray-900">${children}</h2>`;
					case 'h3':
						return `<h3 class="text-2xl font-medium mb-4 text-gray-900">${children}</h3>`;
					case 'h4':
						return `<h4 class="text-xl font-medium mb-3 text-gray-900">${children}</h4>`;
					default:
						return `<p class="mb-4 text-gray-700 leading-relaxed">${children}</p>`;
				}
			}
			return '';
		}).join('');
	}
</script>

<div class="portable-text prose prose-lg max-w-none">
	{@html renderPortableText(value)}
</div>

<style>
	:global(.portable-text p:last-child) {
		margin-bottom: 0;
	}
	
	:global(.portable-text h1:first-child),
	:global(.portable-text h2:first-child),
	:global(.portable-text h3:first-child) {
		margin-top: 0;
	}
</style>