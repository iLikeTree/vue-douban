<template>
    <div>
        <m-header title="Demo"
                  fixed>
            <a class="btn-back"
               href="javascript:void(0);"
               slot="left"
               @click="$router.go(-1)">
                <img class="icon-img"
                     src="../../assets/images/ic_bar_back_green.png">
            </a>
        </m-header>
        <div class="page-content page-no-footer">
            <swipe :imgs="imgs"
                   :swipeHeight="'46.667%'"></swipe>
        </div>
    </div>
</template>
<script>
import mHeader from '../../components/header'
import swipe from '../../components/swipe'
export default {
    name: 'test',
    components: {
        mHeader,
        swipe
    },
    data() {
        return {
            // imgs: [{
            //     src: "https://img3.doubanio.com/img/files/file-1484564483.jpg",
            //     href: "/"
            // }, {
            //     src: "https://img3.doubanio.com/img/files/file-1490094734.jpg",
            //     href: "/"
            // }, {
            //     src: "https://img3.doubanio.com/img/files/file-1490351662.jpg",
            //     href: "/"
            // }, {
            //     src: "https://img3.doubanio.com/img/files/file-1489029352.jpg",
            //     href: '/'
            // }, {
            //     src: "https://img1.doubanio.com/view/status/median/public/1eEzgk.jpg",
            //     href: "/"
            // }, {
            //     src: "https://img3.doubanio.com/view/freyr_page_photo/raw/public/1392.jpg",
            //     href: "/"
            // }]
            imgs: [{
                src: "http://ww4.sinaimg.cn/mw1024/a28a8bbdjw1esy10b9zrnj21hc0xc44l.jpg",
                href: "/"
            }, {
                src: "http://ww2.sinaimg.cn/mw1024/a28a8bbdjw1esy10a6epoj21hc0xc7a9.jpg",
                href: "/"
            }, {
                src: "http://ww2.sinaimg.cn/mw1024/a28a8bbdjw1esy10ahqllj21hc0xcwlr.jpg",
                href: "/"
            }, {
                src: "http://ww2.sinaimg.cn/mw1024/a28a8bbdjw1esy109wt5jj21hc0xcjxu.jpg",
                href: '/'
            }, {
                src: 'http://wx2.sinaimg.cn/large/a833b71dgy1febu9ct13oj21hc0zk0zr.jpg',
                href: '/'
            }, {
                src: 'http://wx2.sinaimg.cn/mw1024/a833b71dgy1fe3jzwx4isj23zx2hyx6r.jpg',
                href: '/'
            }]
        }
    },
    created() {
        // this.fetchData();
    },
    methods: {

    }
}
</script>
<style lang="less">

</style>