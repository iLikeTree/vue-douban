<template>
    <div>
    </div>
</template>
<script>
import weibo from '../../assets/json/weibo.json'
import statusData from '../../assets/json/status/home_timeline.json'
export default {
    name: 'test',
    components: {

    },
    data() {
        return {}
    },
    created() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            let arr = [];
            let initData = function (wb) {
                let pubtime = wb.created_at.slice(0, 1) === '2' ? wb.created_at : '2017-' + wb.created_at;
                let text = wb.text.replace(/\s\s+/g, ' ');
                let status = {
                    "reshares_count": wb.reposts_count,
                    "liked": false,
                    "author": {
                        "name": wb.user.screen_name,
                        "url": null,
                        "avatar": wb.user.profile_image_url,
                        "id": wb.user.id,
                    },
                    "text": wb.text,
                    "raw_text": wb.raw_text,
                    "like_count": wb.attitudes_count,
                    "create_time": pubtime,
                    "activity": wb.source,
                    "images": [],
                    "comments_count": wb.comments_count,
                    "id": wb.id,
                    "card": null,
                    "page_info": wb.page_info
                };
                if (wb.pics) {
                    let imgs = [];
                    wb.pics.forEach(function (item, index) {
                        let img = {
                            "large": {
                                "url": item.large.url,
                                "width": item.large.geo.width,
                                "height": item.large.geo.height
                            },
                            "normal": {
                                "url": item.url,
                                "width": item.geo.width,
                                "height": item.geo.height,
                            }
                        };
                        imgs.push(img);
                    });
                    status.images = imgs;
                }
                return status;
            };
            for (let i = 0; i < weibo.length; i++) {
                let wb = weibo[i].mblog;
                let status = initData(wb);
                if (wb.retweeted_status) {
                    let wbre = wb.retweeted_status;
                    status.reshared_status = initData(wbre);
                };
                arr.push(status);
            }
            // statusData.items.forEach(function(item, index){
            //     arr.push(item.status)
            // });
            let www = arr.sort(function (x, y) {
                return new Date(y.create_time).getTime() - new Date(x.create_time).getTime();
            });
            console.log(JSON.stringify(www));
        }
    }
}
</script>
<style lang="less">

</style>