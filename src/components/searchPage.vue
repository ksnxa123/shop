<template>
	<div class='titleDiv'>
		<van-row type="flex" justify="space-between">
			<van-col span="21">
				<van-field 
					class='searchDiv' 
					v-model="search_value" 
					@input="inputValFn"
					placeholder="搜索"
					@keyup.enter='submitFn'
					>
					
					<!-- 搜索框放大镜icon -->
					<template v-slot:left-icon>
						<van-icon name="search" class='searchIconLeft' />
					</template>

					<!-- 清空搜索框 -->
					<template #button>
						<van-icon 
							v-show="isCloseShow" 
							@click="clear_search_inputFn"
							name="close" 
							class='search_close_r' />
					</template>

				</van-field>
			</van-col>
			<van-col span="3">
				<van-button class='cancelBtn' type="primary" size="mini" to="/">取消</van-button>
			</van-col>
		</van-row>
	</div>
</template>

<script>
import axios from 'axios'

export default{
	name:'searchPage',
	data(){
		return {
			search_value:'',
			input_v:'',
			isCloseShow:false
		}
	},
	created(){
		// axios.get('http://localhost:3344/aa')
		// 	.then(_d=>{
		// 		console.log(_d.data)
		// 	})
	},
	watch:{
		input_v(){
			this.isCloseShow = true;
		}
	},
	methods:{
		// watch监听input有没有值
		inputValFn( v ){
			console.log( v )
			this.input_v = v;
		},
		// 清空搜索框按钮
		clear_search_inputFn(){
			this.search_value = '';
			this.isCloseShow = false;
		},
		//enter事件响应
		submitFn(){
			axios.get('http://localhost:3344/search',{
				params:{
					search_key:this.input_v
				}
			})
			.then(_d=>{
				console.log(_d.data)
			});
		}
	}
}
</script>

<style scoped lang="scss">
.titleDiv{
	padding: .2rem .4rem;
}
.cancelBtn{
    width: .98667rem;
    height: .53333rem;
    line-height: .53333rem;
    text-align: center;
    color: #333;
    border: 0.5px solid #333;
    margin-left: .21333rem;
    font-size: .37333rem;
    background: #fff;
    margin-top: .1rem;
}
.searchDiv{
	border: 0;
    background-color: #f4f4f4;
    height: .74667rem;
    line-height: .45rem;
    border-radius: 4px;
    font-size: .37333rem;
}
.searchIconLeft{
	font-size: .5rem;
	// margin-top: .1rem;
}
.search_close_r{
	// display: none;
	font-size: .5rem;
}
</style>