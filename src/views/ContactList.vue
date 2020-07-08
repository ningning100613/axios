<template>
  <div>
    <!-- 联系人列表 -->
    <van-contact-list
      :list="list"
      @add="onAdd"
      @edit="onEdit"
    />

<!-- 联系人编辑 -->
<van-popup v-model="showEdit" position="bottom">
  <van-contact-edit
    :contact-info="editingContact"
    :is-edit="isEdit"
    @save="onSave"
    @delete="onDelete"
  />
</van-popup>

  </div>
</template>

<script>
import axios from "axios";
import { Button, ContactList,Toast,ContactEdit ,Popup} from "vant";
export default {
  name: "contactList",
  components: {
    [Button.name]: Button,
    [ContactList.name]: ContactList,
    [ContactEdit.name]: ContactEdit,
    [Popup.name]: Popup,
  },
  data() {
    return {
      showEdit: false,//编辑层的显隐
      editingContact:{},//正在编辑的联系人数据,
      isEdit:false,//新建或者编辑
      list: [],
      instance:null,//axios实例
    };
  },
  created() {
    this.instance = axios.create({
      baseURL:'http://localhost:9000/api',
      timeout:1000
    })
    this.getList()
  },
  methods:{
    //获取联系人列表
    async getList(){

      let res = await this.$Http.getContactList()
      this.list = res.data


      // this.instance.get("/contactList").then(res => {
      //   console.log(res);
      //   this.list = res.data.data
      // }).catch(error => {
      //   console.log(error)
      //   Toast('请求失败，请稍后重试');
      // });
    },

    //添加联系人
    onAdd(){
      this.showEdit = true;
      this.isEdit = false;
    },
    //编辑联系人
    onEdit(info){
      this.showEdit = true;
      this.isEdit = true;
      this.editingContact = info
    },//
    //保存联系人
    async onSave(info){
      if(this.isEdit){
        //编辑保存
        let res = await this.$Http.editContact(info);
          if(res.code === 200){
          Toast('编辑成功')
          this.showEdit = false;
          this.getList()
        }
        // this.instance.put('/contact/edit',info).then(res=>{
        //   if(res.data.code === 200){
        //     Toast('编辑成功')
        //     this.showEdit = false;
        //     this.getList()
        //   }
        // }).catch(error => {
        //   console.log(error)
        //   Toast('编辑失败')
        // })

      }else{
        //新建保存

        //application/json
        // let res = await this.$Http.newContactJson(info)
        // if(res.code === 200){
        //   Toast('新建成功')
        //   this.showEdit = false;
        //   this.getList()
        // }

        //from-data
        let res = await this.$Http.newContactFrom(info,true)
        if(res.code === 200){
          Toast('新建成功')
          this.showEdit = false;
          this.getList()

        }

        // this.instance.post('/contact/new/json',info).then(res=>{
        //   // console.log(res)
        //   if(res.data.code === 200){
        //     Toast('新建成功')
        //     this.showEdit = false;
        //     this.getList()

        //   }
        // }).catch(error => {
        //   console.log(error)
        //   Toast('新建失败')
        // })
      }
    },
    //删除联系人
     async onDelete(info){
       console.log('info:',info)
      let res = await this.$Http.deleteContact(
        {
          id:info.id
        }
      )
      console.log(res)
      if(res.code === 200){
        Toast('删除成功')
        this.showEdit = false;
        this.getList()
      }
      // this.instance.delete('/contact',{
      //   params:{
      //     id:info.id
      //   }
      // }).then(res=>{
      //     if(res.data.code === 200){
      //       Toast('删除成功')
      //       this.showEdit = false;
      //       this.getList()
      //     }
      // }).catch(error => {
      //     console.log(error)
      //     Toast('删除失败')
      //   })
    },
  }
};
</script>
<style  scoped>
.van-popup{
  height: 100%
}
.van-contact-list_add{
  z-index: 0
}
</style>
