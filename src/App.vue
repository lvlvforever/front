<template>
<div id="app">
    <img src="./assets/logo.png">
    <div>
        <el-button @click="startHacking">Start</el-button>
    </div>
    <el-upload class="upload-demo" drag action="http://daipeng.site:9999/file/upload" multiple :on-success="onSuccess">
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    <div>
    <span v-html="url"></span>
    </div>
    <div>
      <img :src="url">
    </div>

</div>
</template>

<script>
export default {
    data() {
        return {
            url: '图片Url',
        }
    },
    methods: {
        startHacking() {
            this.$notify({
                title: 'It works!',
                type: 'success',
                message: 'We\'ve laid the ground work for you. It\'s time for you to build something epic!',
                duration: 5000
            })
        },
        onSuccess(response, file, fileList) {
            this.url= 'http://daipeng.site/image/'+response.fileId
        }
    }
}
</script>

<style>
#app {
    font-family: Helvetica, sans-serif;
    text-align: center;
}
</style>
