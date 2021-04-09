<template>
    <nuxt-link :to="getLink" class="post-preview">
      <div class="post-header_image">
          <img :src="post.img" :alt="post.title">
        </div>
       
        <div class="post-content">
            <h3 class="title">{{ post.title }}</h3>
            <p> {{ post.descr }} </p>
        </div>
    </nuxt-link>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    },
    admin: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    getLink () {
      return this.admin ? `/admin/${this.post.id}` : `/blog/${this.post.id}`
    }
  }
}
</script>

<style lang="scss">
  .post-header_image{
      width: 100%;
      height: 250px;  
      overflow: hidden;
      img{
        width: 100%;
        height: 100%;
      }
    }
  .post-preview {
    width: 33%;
    padding: 16px;
    margin-bottom: 20px;
    text-align: center;
    @media screen and (max-width: 991px) {
      width: 50%;
    }
    @media screen and (max-width: 575px) {
      width: 100%;
    }
    img {
      margin-bottom: 16px;
    }
    .post-content {
      p {
        color: #999999;
      }
      h3{
        margin-top: 24px;
      }
    }
  }
</style>