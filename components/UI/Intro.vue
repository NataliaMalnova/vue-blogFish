<template>
    <section class="intro">
        <div class="container">
            <h2>{{ title }}</h2>
            <slot />
        </div>
    </section>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss">
    .intro{
        width: 100%;
        margin: 30px 0;
        text-align: center;
        color: #fff;
        background: #4b40e3;
        h2{
            font-size: 26px;
            @media screen and (max-width: 991px) {
               font-size: 23px;
            }
            @media screen and (max-width: 575px) {
                font-size: 18px;
            }
        }
    }
</style>