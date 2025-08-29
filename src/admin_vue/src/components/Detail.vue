<template>
    <div>
        <form @submit.prevent="sendInput">
        <h1>ID:{{input.customer.id}} 商品詳細</h1>
        <div class="box">
            <p>名前：</p>
            <input class="input is-large" type="text" v-model="input.customer.name">
        </div>
        <div class="box">
            <p>メールアドレス：</p>
            <input class="input is-large" type="text" v-model="input.customer.email">
        </div>
         <div class="box">
             <p>都道府県</p>
            <input class="input is-large" type="text" v-model="input.customer.prefecture">
        </div>
        <div class="box">
             <p>住所</p>
            <input class="input is-large" type="text" v-model="input.customer.addres">
        </div> 
        <div class="box">
             <p>品物名</p>
            <input class="input is-large" type="text" v-model="input.item.item_name">
        </div> 
        <div class="box">
             <p>品目種別</p>
            <select class="select is-medium" v-model="input.item.item_type" required>
                <option value="" selected="selected">品目種別を選択してください</option>
                <option value="不明">不明</option>
                <option value="刀装具">刀装具</option>
                <option value="文具">文具</option>
                <option value="ミリタリー">ミリタリー</option>
                <option value="ガラス">ガラス</option>
                <option value="家具">家具</option>
            </select>
        </div>
        <div class="box">
             <p>希望価格</p>
            <input class="input is-large" type="text" v-model="input.item.item_price">
        </div>
        <div class="box">
             <p>ステータス</p>
            <select class="select is-medium" v-model="input.item.status">
                <option value="1">査定依頼中</option>
                <option value="2">概算査定済み</option>
                <option value="3">品物受け取り中</option>
                <option value="4">正規査定中</option>
                <option value="5">完了済み</option>
            </select>
        </div>
        <div class="box">
             <p>詳細</p>
            <input class="input is-large" type="text" v-model="input.item.item_detail">
        </div>
        <div class="box">
             <p>ご要望・コメント</p>
            <input class="input is-large" type="text" v-model="input.item.item_comment">
        </div>

        <div class="box">
            <p>品物画像</p>
            <div class="card-box" >
                <div class="card-item" v-for="(img, index) of images.value" :key="index">
                    <img :src="img.image_data">
                    <p>{{img.filename}}</p>
                </div>
            </div>
        </div>

        <button type="button" class="button is-primary is-rounded" @click="backHistory">戻る</button>
        <button type="submit" class="button is-primary is-rounded">更新</button>
        </form>
    </div>

</template>

<script>
import {inject, /*toRef,*/ reactive,/*computed,*/onBeforeMount} from 'vue';
import {useRoute, useRouter} from 'vue-router';

export default {
    name: 'Detail',
    setup() {

        const { getItems, updateInput, getItem, page } = inject('itemStore');

        const input = reactive({
            customer: {
                id: '',
                name: '',
                email: '',
                prefecture: '',
                addres: '',
            },
            item: {
                id: '',
                item_name: '',
                item_type: '',
                item_price: '',
                item_detail: '',
                item_comment: '',
                status: '',
            },
        });

        const images = reactive([]);

        onBeforeMount(async ()=>{
            const route = useRoute();
            const id =  route.params.id;
            const resObj = await getItem(id)
            const {customer, item} = resObj;
            
            images.value = resObj.images;

            input.customer = {
                id: customer.id,
                name: customer.name,
                email: customer.email,
                prefecture: customer.prefecture,
                addres: customer.addres,
            };
            input.item =  {
                id: item.id,
                item_name: item.item_name,
                item_type: item.item_type,
                item_price: item.item_price,
                item_detail: item.item_detail,
                item_comment: item.item_comment,
                status: item.status,
            };
        });
        


        // const detail = computed( ()=>{
        //     const route = useRoute();
        //     const id =  route.params.id;
        //     return getItem(id);
        // });
        
        const router = useRouter();
        const backHistory = () => {
            getItems(page.value);
            router.push('/');
        };

        const sendInput = async () => {
            if(confirm('更新します。よろしいですか？')) {
                await updateInput(input);
                await getItems(page.value);
                router.push('/');
            }
        };


        return {
            images,
            input,
            backHistory,
            sendInput
        }
    },
}
</script>

<style>
.card-box{
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	text-align: center;
	justify-content: center;
}

.card-box .card-item {
	width: 300px;
	background-color:#f6f5f2;
	margin: 10px;
	padding: 10px;
}
</style>