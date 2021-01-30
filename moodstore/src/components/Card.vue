<template>
	<div class="view flex flex-row-center text-grave">
		<div class="card bg-white flex flex-column-start rounded">
			<div class="card-header flex flex-row-between align-items-center p-1">
				<p class="time text-normal">2021/1/28 20:54</p>
				<div class="operate">
					<img src="../../public/icons/operate.png" class="icon"/>
				</div>
			</div>
			<div class="card-body flex flex-row-between align-items-center px-1">
				<h1 class="title text-dark text-normal">不打伞的苏轼</h1>
				<div class="pic">
					<img src="../../public/icons/index-selected.png" class="cover"/>
				</div>
			</div>
			<div class="card-footer flex flex-row-start align-items-center p-1">
				<div class="flex flex-row-start align-items-center">
					<img src="../../public/icons/views.png" class="icon" />
					<span>28</span>
				</div>
				<div class="flex flex-row-start align-items-center px-1">
					<img src="../../public/icons/like.png" class="icon"/>
					<span>2</span>
				</div>
				<div class="flex flex-row-start align-items-center">
					<img src="../../public/icons/zaikan.png" class="icon"/>
					<span>0</span>
				</div>
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

<style scoped="scoped" src="./../static/styles/milk.css"></style>
<style lang="scss" scoped>
	.view{
		width: 100%;
		.card{
			width: 94%;
			height: 120px;
			.card-header{
				height: 20%;
			}
			.card-body{
				height: 60%;
			}
			.card-footer{
				height: 20%;
			}
		}
	}
</style>
