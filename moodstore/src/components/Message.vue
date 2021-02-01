<template>
	<div class="card p-1">
		<div class="message-box flex flex-column-center">
			<div class="message flex flex-row-start p-1">
				<div class="left flex align-items-center flex-row-center">
					<img src="../../public/icons/1.jpg" />
				</div>
				<div class="right flex flex-column-start">
					<div class="status flex flex-row-between">
						<div class="user-name text-large text-dark">房东的猫</div>
						<div class="time text-grave"><p>01:53</p></div>
					</div>
					<div class="info flex flex-row-between">
						<div class="user-introc text-grave">视频:&nbsp;&nbsp;[EP04]</div>
						<div class="num rounded text-center">60</div>
					</div>
				</div>
			</div>
			
			<div class="message flex flex-row-start p-1">
				<div class="left flex align-items-center flex-row-center">
					<img src="../../public/icons/1.jpg" />
				</div>
				<div class="right flex flex-column-start">
					<div class="status flex flex-row-between">
						<div class="user-name text-large text-dark">Faouzia</div>
						<div class="time text-grave"><p>1月29日</p></div>
					</div>
					<div class="info flex flex-row-between">
						<div class="user-introc text-grave">视频:&nbsp;&nbsp;[Minefields]</div>
						<div class="num rounded text-center">13</div>
					</div>
				</div>
			</div>	
			
			<div class="message flex flex-row-start p-1">
				<div class="left flex align-items-center flex-row-center">
					<img src="../../public/icons/1.jpg" />
				</div>
				<div class="right flex flex-column-start">
					<div class="status flex flex-row-between">
						<div class="user-name text-large text-dark">解忧小秘书</div>
						<div class="time text-grave"><p>1月27日</p></div>
					</div>
					<div class="info flex flex-row-between">
						<div class="user-introc text-grave">视频:&nbsp;&nbsp;[Celebrity]</div>
						<div class="num rounded text-center">7</div>
					</div>
				</div>
			</div>	
			
		</div>
	</div>
</template>

<script>
</script>

<style scoped="scoped" src="./../static/styles/milk.css"></style>
<style scoped="scoped">
	.card {
		background: #fff;
		border-radius: 0.8rem;
		box-shadow: 0 0 10px #eee;
		width: 90%;
		margin: 25px auto;
	}

	.message {
		height: 60px;
	}

	.left {
		width: 20%;
	}

	.left>img {
		width: 50px;
		height: 50px;
		border-radius: 50%;
	}

	.right {
		width: 80%;
		border-bottom: 1px solid #f2f2f2;
		;
	}
	
	.status {
		padding-top: 10px;
		padding-bottom: 5px;
	}
	
	.info {
		padding-bottom: 10px;
	}
	
	.num {
		width: 25px;
		background-color: #ff7979;
		color: white;
	}
</style>
