<!--
 * @Author: wp
 * @Description: home 页面的主页
-->
<template>
	<div>
		这里是默认首页
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
