import {reactive, ref} from 'vue';

export function itemStore() {

    const getUrl = path => `https://art-kaga.com/admin/api${path}`;
    //const getUrl = path => `http://localhost/admin/api${path}`;

    const state = reactive({
        items: [],
        links: [],
    });

    const serch = reactive({
        name: '',
        email: '',
        status: '',
        item_type: '',
        order: 'DESC'
    })

    const page = ref(1)


    const getItems = async function(page) {
        try {
            let url = getUrl(`/item/list?page=${page}`);
            if (serch.name) {
                url += `&name=${serch.name}`
            }
            if (serch.email) {
                url += `&email=${serch.email}`
            }
            if (serch.status) {
                url += `&status=${serch.status}`
            }
            if (serch.item_type) {
                url += `&item_type=${serch.item_type}`
            }
            if (serch.order) {
                url += `&order=${serch.order}`
            }

            const res = await fetch(url);
            if(!res.ok) {
                throw new Error('通信エラー');
            }
            const jsonData = await res.json();
            state.items = jsonData.data;
            state.links = jsonData.links;

        } catch (error) {
            alert("通信エラー\n再度ページを読み込み直してください。");
        }
    }

    const getItem = async function(itemId) {
        const resData = {};
        
        try {
            
            const res = await fetch(getUrl(`/item/${itemId}`));
            if(!res.ok) {
                throw new Error('通信エラー');
            }
            const jsonData = await res.json();
            resData.customer = jsonData.customer;
            resData.item = jsonData.item;
            resData.images = jsonData.images;

        } catch (error) {
            alert("通信エラー\n再度ページを読み込み直してください。");
        }
        return resData;
    }

    const updateStatus = async function(itemId, itemStatus) {
        try {

            const sendObject = { status: itemStatus};
            const res = await fetch(getUrl(`/item/status/${itemId}`), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(sendObject)
            })
            if(!res.ok) {
                throw new Error('通信エラー');
            }
            //getItems(page);
        } catch (error) {
            alert("通信エラー\n再度ページを読み込み直してください。");
        }
    }

    const updateInput = async function(input) {
        
        try {
            const res = await fetch(getUrl(`/item/${input.customer.id}`), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(input)
            })
            if(!res.ok) {
                throw new Error('通信エラー');
            }
        } catch (error) {
            alert("通信エラー\n再度ページを読み込み直してください。");
        }
    }

    getItems(1);

    return {
        state,
        page,
        serch,
        getItems,
        updateStatus,
        getItem,
        updateInput
    }
}