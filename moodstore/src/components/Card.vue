<template>
	<div class="view">
		<div class="card">
			<div class="card-header">
				<div class="time">2021/1/28 20:54</div>
				<div class="cmd">图标</div>
			</div>
			<div class="card-body">
				<div class="name">不打伞的苏轼</div>
				<div class="pic"><img src="../../public/icons/index-selected.png"></div>
			</div>
			<div class="card-footer">
				<div>图标<span>28</span></div>
				<div>图标<span>2</span></div>
				<div>图标<span>0</span></div>
			</div>
		</div>
	</div>
</template>


<script>
	export default {
		name: 'Card',
		data() {
			return {
			}
		}
	}
</script>

<style lang="scss" scoped>
	.view {
		background: rgb(255, 254, 254);
		display: flex;
		justify-content: center;
	}

	.card {
		width: 300px;
		padding: 1rem 1.5rem;
		background: rgb(255, 255, 255);
		border-radius: 5px;
		box-shadow: 0 0 3px #eee;
	}

	.card>div {
		display: flex;
		align-items: center;
		padding: 0.2rem 0;
	}

	.card-header,
	.card-body {
		justify-content: space-between;
		font-size: 0.8rem;
	}

	.card-body>.pic {
		width: 2.5rem;
		height: 2.5rem;
	}

	.card-body>.pic img {
		height: 100%;
		width: 100%;
	}

	.card-footer>div {
		margin-right: 0.8rem;
		color: #aaa;
		font-size: 0.8rem;
	}

	.card-footer>div>span {
		font-size: 0.5rem;
	}
</style>
