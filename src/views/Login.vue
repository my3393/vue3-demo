<template>
  <div>
     <div class="form-wrap">
     <a-form
    :model="formState"
    name="basic"
    :label-col="{ span: 8 }"
    :wrapper-col="{ span: 16 }"
    autocomplete="off"
    @finish="onFinish"
  >
    <a-form-item
      label="用户名"
      name="username"
      :rules="[{ required: true, message: '请输入用户名!' }]"
    >
      <a-input v-model:value="formState.username" />
    </a-form-item>

    <a-form-item
      label="密码"
      name="password"
      :rules="[{ required: true, message: '请输入密码!' }]"
    >
      <a-input-password v-model:value="formState.password" />
    </a-form-item>



    <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
      <a-button type="primary" html-type="submit">登录</a-button>
    </a-form-item>
  </a-form>

    </div>
  </div>
</template>

<script lang="ts">
import { message } from "ant-design-vue";
import { defineComponent,reactive } from "vue";
import { Form } from 'ant-design-vue';
import { useRouter } from "vue-router";

const useForm = Form.useForm;
interface FormData {
  username: string;
  password: string;
}
export default defineComponent({
  name: "LoginView",
  setup () {
    const {push} = useRouter()
    const formState = reactive<FormData>({
         username: '',
         password: '',
    })
    const onFinish = (value:any) => {
        if(value.username !== 'jack' && value.password !== 'redballoon'){
          message.error('登录失败，用户名或密码错误')
          return
        }
        message.success('登录成功')
        push('/')
    }
    return {
       formState,
       onFinish,
    }
  },
});
</script>
<style scoped lang='scss'>
.account {
    width: 100vw;
    height: 100vh;
    background-color: #282828;
}
.form-wrap {
    width: 285px;
    margin: auto;
    padding-top: 100px;
    color: #fff;
    label {
        display: block;
        font-size: 14px;
        color: #fff;
    }
}
</style>
