<template>
  <div class="login-cont bg-lime-900 p-10 rounded-lg">
    <div class="flex flex-col gap-3">
      <div class="flex-1">
        <h1>Login</h1>
      </div>
      <div class="flex-1">
        <FloatLabel variant="on">
          <InputText id="userId" v-model="login.id" variant="filled" class="w-full" defaultValue="KBU0003" />
          <label for="userId">User Id</label>
        </FloatLabel>
      </div>
      <div class="flex-1">
        <FloatLabel variant="on">
          <Password id="userPswd" v-model="login.pswd" variant="filled" inputClass="w-full" class="w-full"
            defaultValue="inirahsia" />
          <label for="userPswd">Password</label>
        </FloatLabel>
      </div>
      <div class="flex-1 flex con">
        <Button label="Login" icon="pi pi-caret-right" iconPos="right" @click="HandleLogin" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import FloatLabel from 'primevue/floatlabel';
import Button from 'primevue/button';
import { ref, type Ref } from 'vue';
import type { loginObj } from '@/types/dataType';
import { useUsersStore } from '@/stores/usersStore';

const login: Ref<loginObj> = ref({ id: 'KBU0003', pswd: 'inirahsia' });

const usersStore = useUsersStore();

function HandleLogin() {
  const userlogin = usersStore.loginCheck(login.value);
  if (userlogin?.role) {
    console.log('LOGIN')
  }
}
</script>

<style></style>
