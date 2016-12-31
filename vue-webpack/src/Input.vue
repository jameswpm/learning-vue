<template>
	<div>
		<input type="text" name="" :value="msg" @input="changeMessage">
		<p>{{ message }}</p>
	</div>
</template>

<script type="text/javascript">
	export default{
		props: ['msg'],
		data () {
			return {
				message: "default"
			}
		},
		methods: {
			changeMessage (event) {
				this.message = event.target.value;
				this.$emit('messageChanged', this.message);
			}
		}
	}
</script>