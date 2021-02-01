<template>
	<div class="card-box">
		<div class="card flex flex-column-start">
			<div class="header flex align-items-center text-dark">
				<img class="n-img" src="../../public/icons/like.png" />
				<span>&nbsp;解忧杂货店</span>
				<span>&nbsp;刚刚</span>
			</div>
			<div class="footer flex flex-row-between">
				<div class="left flex flex-column-start">
					<div class="greeting"><span class="text-large text-dark">晚上好</span></div>
					<div class="notice"><span class="text-normal">@Zwt&nbsp;刚刚给你写了一封信</span></div>
				</div>
				<div class="right flex align-items-center">
					<img class="u-img" src="../../public/icons/news.png" />
				</div>
			</div>
		</div>
		
		<div class="card flex flex-column-start">
			<div class="header flex align-items-center text-dark">
				<img class="n-img" src="../../public/icons/like.png" />
				<span>&nbsp;解忧杂货店</span>
				<span>&nbsp;刚刚</span>
			</div>
			<div class="footer flex flex-row-between">
				<div class="left flex flex-column-start">
					<div class="greeting"><span class="text-large text-dark">早上好</span></div>
					<div class="notice"><span class="text-normal">@Lhq&nbsp;刚刚给你写了一封信</span></div>
				</div>
				<div class="right flex align-items-center">
					<img class="u-img" src="../../public/icons/news.png" />
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

	.header {
		padding: 15px 20px 4px 20px;
	}

	.footer {
		padding: 4px 20px 10px 20px;
	}

	.n-img {
		width: 30px;
		height: 30px;
	}

	.greeting {
		padding: 0px 0px 5px 0px;
	}

	.notice>span {
		color: #bdc3c7;
		font-size: 10px;
	}

	.u-img {
		width: 30px;
		height: 30px;
	}
</style>
