<template>
    <div>
        <div class="box">
            <h2>絞り込み条件</h2>
            
            <table class="table">
                <tr>
                    <th>名前検索</th>
                    <td><input class="" type="text" v-model="serch.name"></td>
                </tr>
                <tr>
                    <th>メールアドレス</th>
                    <td><input class="" type="email" v-model="serch.email"></td>
                </tr>
                <tr>
                    <th>ステータス</th>
                    <td>
                        <select v-model="serch.status">
                            <option value="">全て</option>
                            <option value="1">査定依頼中</option>
                            <option value="2">概算査定済み</option>
                            <option value="3">品物受け取り中</option>
                            <option value="4">正規査定中</option>
                            <option value="5">完了済み</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th>種別</th>
                    <td>
                        <select v-model="serch.item_type">
                            <option value="">全て</option>
                            <option value="不明">不明</option>
                            <option value="刀装具">刀装具</option>
                            <option value="文具">文具</option>
                            <option value="ミリタリー">ミリタリー</option>
                            <option value="ガラス">ガラス</option>
                            <option value="家具">家具</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th>並び順</th>
                    <td>
                        <select v-model="serch.order">
                            <option value="DESC">新しい順</option>
                            <option value="ASC">古い順</option>
                        </select>
                    </td>
                </tr>
            </table>
            <button @click="serchRun">検索</button>
        </div>

        <table class="table is-bordered is-fullwidth" v-if="items.length > 0">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>お客様名</th>
                    <th>メールアドレス</th>
                    <th>商品種別</th>
                    <th>商品名</th>
                    <th>希望価格</th>
                    <th>ステータス</th>
                </tr>
            </thead>
            <tfoot>
                <tr>
                    <th>ID</th>
                    <th>お客様名</th>
                    <th>メールアドレス</th>
                    <th>商品種別</th>
                    <th>商品名</th>
                    <th>希望価格</th>
                    <th>状況</th>
                </tr>
            </tfoot>
            <tbody>
                <tr class="link-list" v-for="(item, index) of items" :key="index">
                    
                    <th  @click="detailLink(item.id)">{{item.id}}</th>
                    <td @click="detailLink(item.id)">{{item.name}}</td>
                    <td @click="detailLink(item.id)">{{item.email}}</td>
                    <td @click="detailLink(item.id)">{{item.item_type}}</td>
                    <td @click="detailLink(item.id)">{{item.item_name}}</td>
                    <td @click="detailLink(item.id)">{{item.item_price}}</td>
                    <td>
                        <div class="select">
                            <select v-model="item.status" @change="changeStatus(item.item_id, item.status)">
                                <option value="1">査定依頼中</option>
                                <option value="2">概算査定済み</option>
                                <option value="3">品物受け取り中</option>
                                <option value="4">正規査定中</option>
                                <option value="5">完了済み</option>
                            </select>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <div v-else>
            該当データがありません。
        </div>

        <ul class="page">
            <li v-for="(link,index) of links" @click="getPage(link.label)" :key="index" :class="getClassName(link.active)">{{link.label}}</li>
        </ul>
    </div>
</template>

<script>

import {inject, reactive, toRef} from 'vue';
import {useRouter} from 'vue-router';

export default {
    name: 'AdminTop',
    setup() {
        const { state, getItems, updateStatus, page, serch } = inject('itemStore');

        const router = useRouter();

        const items = toRef(state, 'items');
        const links = toRef(state, 'links');

        const input = reactive({
            name: ''
        })

        const getPage = (pageLabel) => {
            page.value = pageLabel;
            getItems(pageLabel);
        }

        const getClassName = (active) => {
            if (active) {
                return 'on-active';
            } else {
                return 'non-active';
            }
        }

        const changeStatus = (itemId, itemStatus) => {
            if(confirm(`${itemId}の状態を更新しますか？`)) {
                updateStatus(itemId, itemStatus, page.value);

            }
        }

        const detailLink = (id) => {
            router.push(`/detail/${id}`);
        }

        const serchRun = () => {
            getItems(1);
        }

        return {
            items,
            links,
            page,
            serch,
            input,
            getClassName,
            getPage,
            changeStatus,
            detailLink,
            serchRun
        }
    },
}
</script>

<style>
.page li {
    padding: 20px;
    margin: 5px;
    display: inline;
    border: 1px solid gainsboro;
    cursor: pointer;
}
.page  li:hover {
    background-color: aqua;
}
.page  li.on-active {
    background-color: aqua;
}
.data-table {
    height: 600px;
}
.link-list {
    cursor: pointer;
}
.link-list:hover {
    background-color: aqua;
}
</style>