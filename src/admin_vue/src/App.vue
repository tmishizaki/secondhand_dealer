<template>


  <div>
    <header class="navbar is-link">
      <div class="navbar-brand">
        <span class="navbar-item">
          <i class="fas fa-home"></i>
        </span>
        <span class="navbar-item">
          <span class="fa fa-language">加賀管理画面</span>
        </span>
      </div>
      <div class="navbar-end">
          <div class="navbar-item">
            <a href="/admin/logout" class="logout-icon">
              <ion-icon size="large" name="person-circle-outline"></ion-icon>
              <span class="fa fa-language">ログアウト</span>
            </a>
          </div>
      </div>
    </header>

    <router-view></router-view>

  </div>
</template>

<script>

import { provide } from 'vue';


import { itemStore } from './store/item-store.js';


export default {
  name: 'App',
  setup() {
    provide('itemStore', itemStore());
  }
}
</script>

<style>
.logout-icon {
  color: white;
  padding: 10px;
}
.logout-icon:hover {
  color: gainsboro;
}
</style>
