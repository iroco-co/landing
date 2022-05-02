<script>
	import '../app.scss';
	import '../i18n';
	import { isLoading } from 'svelte-i18n';
</script>

{#if !$isLoading}
	<slot />
{/if}