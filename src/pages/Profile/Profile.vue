<template>
    <div>
        <m-header title="我的" fixed>
            <a class="btn-chat" href="javascript:void(0);" slot="right">
                <img class="icon-img" src="../../assets/images/ic_settings.png">
            </a>
        </m-header>
        <div class="page-content" :class="{'no-user': !isLogin}">
            <div class="profile-cover">
                <div class="profile-wrapper flex">
                    <div class="profile-avatar">
                        <img src="../../assets/images/avatar_female_100.png">
                    </div>
                    <div class="profile-info flex-fit">
                        <div v-if="isLogin">
                            <h1>{{uname}}</h1>
                            <p class="profile-desc">{{ user.slogan }}</p>
                            <p class="profile-fans"><span>关注 35</span><span>被关注 8 </span></p>
                        </div>
                        <router-link v-else to="login" class="login-btn">登录/注册</router-link>
                    </div>
                </div>
            </div>
            <div class="profile-notice">
                <div class="profile-notice-tab flex">
                    <img class="icon-img" src="../../assets/images/ic_mine_notification.png">
                    <p class="flex-fit">提醒</p>
                    <img class="icon-img icon-right-arrow" src="../../assets/images/ic_seti_arrow_right_gray.png">
                </div>
                <p class="profile-notice-tip">暂无新提醒</p>
            </div>
            <div class="profile-tab">
                <ul class="profile-tab-list flex" @click="myJumping">
                    <li to="likes">
                        <img class="icon-img" src="../../assets/images/ic_my_likes.png"> 喜欢
                    </li>
                    <li to="note">
                        <img class="icon-img" src="../../assets/images/ic_my_note.png"> 日记
                    </li>
                    <li to="album">
                        <img class="icon-img" src="../../assets/images/ic_my_album.png"> 相册
                    </li>
                    <li to="status">
                        <img class="icon-img" src="../../assets/images/ic_my_status.png"> 我的广播
                    </li>
                    <li to="tvs">
                        <img class="icon-img" src="../../assets/images/ic_my_movies_tvs.png"> 电影·电视
                    </li>
                    <li to="books">
                        <img class="icon-img" src="../../assets/images/ic_my_books.png"> 读书
                    </li>
                    <li to="music">
                        <img class="icon-img" src="../../assets/images/ic_my_music.png"> 音乐
                    </li>
                    <li to="events">
                        <img class="icon-img" src="../../assets/images/ic_my_events.png"> 同城活动
                    </li>
                    <li to="doulist">
                        <img class="icon-img" src="../../assets/images/ic_my_doulist.png"> 豆列
                    </li>
                    <li to="orders">
                        <img class="icon-img" src="../../assets/images/ic_my_orders.png"> 订单
                    </li>
                    <li>
                        <img class="icon-img" src="../../assets/images/ic_my_wallet.png"> 钱包
                    </li>
                </ul>
            </div>
        </div>
        <tabbar v-model="select"></tabbar>
    </div>
</template>
<script>
import mHeader from '../../components/header'
import tabbar from '../../components/tabbar'
import { mapState, mapMutations } from 'vuex'

export default {
    name: 'profile',
    components: {
        mHeader,
        tabbar,
    },
    data() {
        return {
            select: 'profile',
            isLogin: false,
            uname: '',
        }
    },
    computed: {
        ...mapState([
            'user'
        ]),
    },
    created() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            let uid = this.user.id;
            let uname = this.user.name;
            if (uid) {
                this.isLogin = !0;
                this.login = this.isLogin;
            }
            if (uname) {
                this.uname = decodeURIComponent(uname);
            }
        },
        myJumping(event) {
            let target = event.target;
            if (target.tagName.toLowerCase() !== 'li') {
                target = target.parentNode;
            }
            if (target) {
                if (this.isLogin) {
                    let toUrl = target.getAttribute('to');
                    if (toUrl) {
                        this.$router.push('/my/' + toUrl);
                    }
                } else {
                    this.$router.push('/login/');
                }
            }

        }
    }
}
</script>