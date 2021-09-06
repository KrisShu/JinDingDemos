<!--
 * @Author: wp
 * @Description: home 页面的主页
-->
<template>
	<div>
		this is home index --- {{random}}
	</div>
</template>

<script>
export default {
	data() {
		return {
			random: ""
		};
	},
	mounted() {
		this.random = Math.random();
	},
	methods: {}
};
</script>
<style lang='scss' scoped>
</style>
