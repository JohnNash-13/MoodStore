<template>
	<div class="container">
		<div class="top">
		</div>

		<div id="user-box" class="card">
			<div class="u-pic"><img src="../../public/icons/1.jpg" alt=""></div>
			<div>
				<div class="u-name">DXXKT</div>
				<div class="u-msg">
					<div class="attention">
						<span>11</span>&nbsp;关注
					</div>
					<div class="fans">
						<span>3</span>&nbsp;粉丝
					</div>
					<div class="grade">
						<span>Lv.</span><span>&nbsp;8</span>
					</div>
				</div>
				<div class="u-modify text-center flex flex-row-center text-grave">
					<img src="../../public/icons/add.png" />
					<span>&nbsp;点击添加个人简介</span>
				</div>
			</div>
		</div>

		<div class="tab">
			<div class="tab-nav tab-active" @click="toggleTab('Index')">
				<div>主页</div><span></span>
			</div>
			<div class="tab-nav" @click="toggleTab('Letter')">
				<div>信箱</div><span></span>
			</div>
			<div class="tab-nav" @click="toggleTab('Message')">
				<div>消息</div><span></span>
			</div>
		</div>

		<keep-alive>
			<component :is="currentTab"></component>
		</keep-alive>


	</div>
</template>

<script>
	import Index from '../components/Index.vue';
	import Letter from '../components/Letter.vue';
	import Message from '../components/Message.vue';

	export default {
		name: 'Home',
		data() {
			return {
				//currentTab 用于标识当前触发的组件
				currentTab: 'Index'
			};
		},
		components: {
			Index,
			Letter,
			Message
		},
		methods: {
			toggleTab: function(tab) {
				this.currentTab = tab;
			}
		}
	}
</script>

<style scoped="scoped" src="./../static/styles/milk.css"></style>
<style scoped="scoped">
	.container {
		width: 100%;
		background: #fafafa;
		min-height: 100vh;
		padding-bottom: 58px;
	}

	.top {
		width: 100%;
		height: 36vh;
		background-image: linear-gradient(to bottom right, #778beb, #e2e0ed);
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		z-index: -999;
		margin-bottom: -50px;
	}

	.card {
		background: #fff;
		border-radius: 0.8rem;
		box-shadow: 0 0 10px #eee;
		width: 90%;
		margin: 25px auto;
	}

	#user-box {
		position: relative;
		border-radius: 1rem !important;
		box-shadow: 0 0 10px #ddd !important;
	}

	.u-pic {
		width: 5rem;
		height: 5rem;
		border-radius: 50%;
		box-sizing: border-box;
		border: 2px solid #fff;
		overflow: hidden;
		position: absolute;
		left: 50%;
		margin-left: -2.5rem;
		margin-top: -2.5rem;
	}

	.u-pic img {
		width: 100%;
		height: 100%;
	}

	#user-box>div:nth-child(2) {
		padding: 50px 0 30px 0;
	}

	.u-name {
		font-size: 1.1rem;
		font-weight: bold;
		text-align: center;
		margin-bottom: 0.5rem;
		color: #555;
	}

	.u-msg {
		display: flex;
		justify-content: center;
		margin-bottom: 8px;
	}

	.u-msg div {
		font-size: 0.6rem;
		color: #888;
		margin: 0 0.8rem;
	}

	.u-msg div span {
		font-weight: bold;
		color: #555;
	}

	.u-modify>img {
		width: 16px;
		height: 16px;
	}

	.tab {
		width: 90%;
		margin: 0 auto;
		display: flex;
		justify-content: space-around;
	}

	.tab-nav>div {
		padding: 0 3px;
		color: #888;
		font-size: 0.8rem;
	}

	.tab-nav>span {
		display: block;
		height: 6px;
		width: 100%;
		margin: 0 auto;
		z-index: -999;
		margin-top: -5px;
		background: rgba(255, 68, 68, 0.795);
		border-radius: 3px;
		visibility: hidden;
	}

	.tab-active>div {
		color: #333;
		font-weight: bolder;
	}

	.tab-active>span {
		visibility: visible;
	}
</style>
