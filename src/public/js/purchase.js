const useDataStore = () => {
    const input = Vue.reactive( {
        files: [], 
        item_price: 0,
        name: '',
        email: '',
        item_name: '',
        item_detail: '',
        item_type: '',
        prefecture: '',
        item_comment: ''
    } );

    return {
        input
    }
}

const InputPage = {
    setup() {
        const { input } = Vue.inject('useDataStore');
        const router = VueRouter.useRouter();

        const windowSizeCheck = () => {
            if (window.innerWidth >= 800 ){
                return true
            } else {
                return false;
            }
        };
       
        const imageDropRead = event => {
            createImgObject(event.dataTransfer.files);
        }

        const imageFileRead = event => {
            createImgObject(event.target.files);
        }

        const confirm = () => {
            router.push('/confirm');
        }

        const createImgObject = fileArray => {
            
            input.files = [];
            for ( const file of fileArray) {
                
                const reader = new FileReader();
                reader.addEventListener('load', event => {
                    
                    const imgObj = {
                        filename: file.name,
                        image_data: event.target.result
                    }
                    
                    input.files.push(imgObj);
                });

                reader.readAsDataURL(file);
            }
        }

        return {
            imageDropRead,
            imageFileRead,
            windowSizeCheck,
            confirm,
            input
        }
    },

    template: `
    <section>
        <h2>査定・買取の流れ</h2>
        <div class="card-box-l">
            <div class="card-item">
                <h3>ステップ1<br>査定依頼</h3>
                <img src="/images/kantei_otakara.png" alt="刀装具">
                <p>ホームページから査定したい品目の情報・写真をお送りください。</p>
            </div>
            <div class="card-item">
                <h3>ステップ2<br>概算見積もり</h3>
                <img src="/images/zei_etax.png" alt="刀装具">
                <p>
                    写真などから概算見積もりをメールにてお送りいたします。よろしければ、品目をご郵送いただきます。

                </p>
            </div>
            <div class="card-item">
                <h3>ステップ3<br>正式査定</h3>
                <img src="/images/yubin_ukewatashi.png" alt="刀装具">
                <p>ご郵送いただいた品目を査定し、正式な見積もりをさせていただきます。</p>
            </div>
        </div>
    </section>

    <section id="input-section">

        <h2>査定依頼</h2>
        <form action="" @submit.prevent="confirm">
            <table class="ta1 mb1em">
                <tr>
                    <th colspan="2" class="tamidashi">※マークは入力必須です</th>
                </tr>
                <tr>
                    <th>お名前※</th>
                <td><input type="text" v-model="input.name" size="30" class="ws" required></td>
                </tr>
                <tr>
                    <th>メールアドレス※</th>
                    <td><input type="email" v-model="input.email" size="30" class="ws" required></td>
                </tr>
                <tr>
                    <th>ご住所(都道府県)※</th>
                <td>
                <select v-model="input.prefecture" required>
                    <option value="" selected="selected">都道府県を選択してください</option>
                    <option value="北海道">北海道</option>
                    <option value="青森県">青森県</option>
                    <option value="岩手県">岩手県</option>
                    <option value="宮城県">宮城県</option>
                    <option value="秋田県">秋田県</option>
                    <option value="山形県">山形県</option>
                    <option value="福島県">福島県</option>
                    <option value="茨城県">茨城県</option>
                    <option value="栃木県">栃木県</option>
                    <option value="群馬県">群馬県</option>
                    <option value="埼玉県">埼玉県</option>
                    <option value="千葉県">千葉県</option>
                    <option value="東京都">東京都</option>
                    <option value="神奈川県">神奈川県</option>
                    <option value="新潟県">新潟県</option>
                    <option value="富山県">富山県</option>
                    <option value="石川県">石川県</option>
                    <option value="福井県">福井県</option>
                    <option value="山梨県">山梨県</option>
                    <option value="長野県">長野県</option>
                    <option value="岐阜県">岐阜県</option>
                    <option value="静岡県">静岡県</option>
                    <option value="愛知県">愛知県</option>
                    <option value="三重県">三重県</option>
                    <option value="滋賀県">滋賀県</option>
                    <option value="京都府">京都府</option>
                    <option value="大阪府">大阪府</option>
                    <option value="兵庫県">兵庫県</option>
                    <option value="奈良県">奈良県</option>
                    <option value="和歌山県">和歌山県</option>
                    <option value="鳥取県">鳥取県</option>
                    <option value="島根県">島根県</option>
                    <option value="岡山県">岡山県</option>
                    <option value="広島県">広島県</option>
                    <option value="山口県">山口県</option>
                    <option value="徳島県">徳島県</option>
                    <option value="香川県">香川県</option>
                    <option value="愛媛県">愛媛県</option>
                    <option value="高知県">高知県</option>
                    <option value="福岡県">福岡県</option>
                    <option value="佐賀県">佐賀県</option>
                    <option value="長崎県">長崎県</option>
                    <option value="熊本県">熊本県</option>
                    <option value="大分県">大分県</option>
                    <option value="宮崎県">宮崎県</option>
                    <option value="鹿児島県">鹿児島県</option>
                    <option value="沖縄県">沖縄県</option>
                </select></td>
                </tr>
                <tr>
                    <th>ご住所(市区町村以下)※</th>
                    <td>
                        <input type="text" v-model="input.addres" size="30" class="wl" required>
                    </td>
                </tr>
                <tr>
                <th>査定品目※</th>
                    <td>
                        <select v-model="input.item_type" required>
                            <option value="" selected="selected">品目種別を選択してください</option>
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
                    <th>品目名</th>
                    <td>
                        <div>わからない場合は未入力で構いません。</div>
                        <input type="text" v-model="input.item_name" size="30" class="wl">
                    </td>
                </tr>

                <tr>
                    <th>画像ファイル</th>
                    <td>
                        <div v-if="windowSizeCheck()">
                            <div>(ドラッグ&ドロップでも添付できます。)</div>
                            <div id="drop-image" dropzone="file" @dragover.prevent @dragenter.prevent @drop.prevent="imageDropRead">
                                <span>ファイルをここにドラッグ&ドロップします。</span>
                            </div>
                        </div>
                        <input type="file" @change="imageFileRead" class="wl" multiple>
                        <ul v-if="input.files">
                            <li v-for="(file, index) of input.files" :key="index">
                                <img v-bind:src="file.image_data" width="200">
                                <dl><dt>@{{file.filename}}</dt></dl>
                            </li>
                        </ul>
                    </td>
                </tr>

                <tr>
                    <th>希望買取価格※</th>
                    <td>
                        <div>特に希望価格がない場合は0円で構いません。</div>
                        <input type="number" v-model.number="input.item_price">円
                    </td>
                </tr>

                <tr>
                    <th>査定品目の詳細※</th>
                    <td><textarea v-model="input.item_detail" cols="30" rows="10" class="wl" required></textarea></td>
                </tr>

                <tr>
                    <th>そのほかご要望・コメント</th>
                    <td><textarea v-model="input.item_comment" cols="30" rows="10" class="wl"></textarea></td>
                </tr>
            </table>

            <p style="text-align: center;">
                <button type="submit">内容を確認する</button>
            </p>
        </form>
    </section>
    `
}



const ConfirmPage = {
    setup(props) {
        const { input } = Vue.inject('useDataStore');
        const isLoading = Vue.ref(false);

        const router = VueRouter.useRouter();


        Vue.onBeforeMount(() => {
            if (!input.name ) {
                router.push('/');
            }
        })
         
        const backInput = () => {
            router.push('/');
        }

        const sendPurchase = () => {
            input._token = document.querySelector('meta[name="csrf-token"]').content;
            
            isLoading.value = true;
            fetch('/purchase/customer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(input)
            }).then((res)=>{
                return res.json()
            }).then((data)=>{

                for (const file of input.files) {
                    const sendData = {
                        _token: document.querySelector('meta[name="csrf-token"]').content,
                        item_id: data.item_id,
                        image_data: file.image_data,
                        filename: file.filename
                    }

                    fetch('/purchase/item_image', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(sendData)
                    })
                } 

                isLoading.value = false;
                location = '/purchase/complete';

            });
        }

        return {
            backInput,
            sendPurchase,
            input,
            isLoading
        }
    },
    
    template: `

    <div class="loading-indicator" v-show="isLoading">Loading...</div>

    <section id="confirm-section" v-show="!isLoading">

        <h2>送信内容確認</h2>
        <p>
            以下の内容でお間違いがなければ、「内容を送信する」ボタンを押してください。<br>
            お間違いがある場合は「内容を編集する」で入力画面に戻れます。<br>
            <br>
            査定依頼を送信頂いてから、担当が概算見積もりをメールにてお送りいたします。<br>
        </p>
        <form @submit.prevent="sendPurchase">
            
            <table class="ta1 mb1em">
                <tr>
                    <th>お名前※</th>
                    <td>
                        {{input.name}}
                    </td>
                </tr>
                <tr>
                    <th>メールアドレス※</th>
                    <td>
                        {{input.email}}
                    </td>
                </tr>
                <tr>
                    <th>ご住所(都道府県)※</th>
                    <td>
                        {{input.prefecture}}
                    </td>
                </tr>
                <tr>
                    <th>ご住所(市区町村以下)※</th>
                    <td>
                        {{input.addres}}
                    </td>
                </tr>
                <tr>
                    <th>査定品目※</th>
                    <td>
                        {{input.item_type}}
                    </td>
                </tr>
                <tr>
                    <th>品目名</th>
                    <td>
                        {{input.item_name}}
                    </td>
                </tr>

                <tr>
                    <th>画像ファイル</th>
                    <td>
                        <ul v-if="input.files">
                            <li v-for="(file, index) of input.files" :key="index">
                                <img v-bind:src="file.image_data" width="200">
                                <dl><dt>@{{file.filename}}</dt></dl>
                            </li>
                        </ul>
                    </td>
                </tr>
                

                <tr>
                    <th>希望買取価格</th>
                    <td>
                        {{input.item_price}}円
                    </td>
                </tr>

                <tr>
                    <th>査定品目の詳細※</th>
                    <td>
                        {{input.item_detail}}
                    </td>
                </tr>

                <tr>
                    <th>そのほかご要望・コメント</th>
                    <td>
                        {{input.item_comment}}
                    </td>
                </tr>
            </table>

            <p style="text-align: center;">
                <button type="button" @click="backInput">内容を編集する</button>
                <button type="submit">内容を送信する</button>
            </p>
        </form>
    </section>
    `
}

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: [
        { path: '/', component: InputPage },
        { path: '/confirm', component: ConfirmPage },
    ]
})

const vm = Vue.createApp({
    setup() {
        Vue.provide('useDataStore', useDataStore());

    }
});
vm.use(router);
vm.mount('#app');