<template>
	<div>
		<h1>Users Overview</h1>
		<p>TeamID: {{ $route.params.teamId }}</p>
		<button @click="goHome">Go home</button>
	</div>
</template>

<script type="text/javascript">
	export default {
		watch: {
			'$route' (to, from) {
				alert(to.params.teamId);
			}
		},
		methods: {
			goHome() {
				this.$router.push('/');
			}
		}
	}
</script>