<template>
    <div class="type-nav">
        <div class="container">
            <div @mouseleave="leavaIndex">
                <h2 class="all" @mouseenter="enterShow" @mouseleave="leaveShow">全部商品分类</h2>
                <!-- 过渡动画 -->
                <transition name="sort" >
                    <div class="sort" v-show="show">
                        <div class="all-sort-list2" @click="goSearch">
                            <!-- <div class="item bo">
                            <h3>
                                <a href="">图书、音像、数字商品</a>
                            </h3>
                            <div class="item-list clearfix">
                                <div class="subitem">
                                    <dl class="fore">
                                        <dt>
                                            <a href="">电子书</a>
                                        </dt>
                                        <dd>
                                            <em>
                                                <a href="">婚恋/两性</a>
                                            </em>
                                            <em>
                                                <a href="">文学</a>
                                            </em>
                                            <em>
                                                <a href="">经管</a>
                                            </em>
                                            <em>
                                                <a href="">畅读VIP</a>
                                            </em>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div> -->
                            <div class="item" v-for="(c1, index) in categoryList" :key="c1.categoryId"
                                :class="{ cur: currentIndex == index }">
                                <h3 @mouseenter="changeIndex(index)">
                                    <a :data-categoryName="c1.categoryName" :data-category1Id="c1.categoryId"
                                        href="javascript:void(0);">{{
                                            c1.categoryName }}</a>
                                </h3>
                                <div class="item-list clearfix">
                                    <div class="subitem" v-for="(c2) in c1.categoryChild" :key="c2.categoryId">
                                        <dl class="fore">
                                            <dt>
                                                <a :data-categoryName="c2.categoryName" :data-category2Id="c2.categoryId"
                                                    href="javascript:void(0);">{{ c2.categoryName }}</a>
                                            </dt>
                                            <dd>
                                                <em v-for="(c3) in c2.categoryChild" :key="c3.categoryId">
                                                    <a :data-categoryName="c3.categoryName"
                                                        :data-category3Id="c3.categoryId" href="javascript:void(0);">{{
                                                            c3.categoryName }}</a>
                                                </em>

                                            </dd>
                                        </dl>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </transition>

            </div>
            <nav class="nav" @click="abc">
                <a href="###">服装城</a>
                <a href="###">美妆馆</a>
                <a href="###">尚品汇超市</a>
                <a href="###">全球购</a>
                <a href="###">闪购</a>
                <a href="###">团购</a>
                <a href="###">有趣</a>
                <a href="###">秒杀</a>
            </nav>
        </div>
    </div>
</template>

<script>
import router from '@/router';
import { mapState } from 'vuex';
// import throttle from "lodash/throttle"
// import { ConcatenationScope } from 'webpack';
var ragular=new RegExp("Search");
export default {
    name: "TypeNav",
    data() {
        return {
            show: true,
            currentIndex: -1,
            
        }
    },
    mounted() {
        //因为每次路由，导致每次的挂载，我们都会请求一次，重复请求造成运行速度变慢。解决方法是将挂载转换到vue主文件的挂载中，这样每次vue主文件挂载，因为只有一次，所以就减少了重复向服务器发请求。
        // this.$store.dispatch("categoryList");
        if (this.$route.path != "/Home") {
            this.show = false;
            //    console.log(this.$route.path!="/Home");
        }
    },
    computed: {
        ...mapState({
            categoryList: state => state.home.category
        })
    },
    methods: {
        //只是用来测试 的，没有实际用途。
        abc(event) {
            console.log(event);
            console.log(location);

        },
        leavaIndex(index) {
            this.currentIndex = -1;
            // console.log(this.$route.path.match(ragular)||[0]=="Search");
            // console.log(this.$route.path);
             if (this.$route.path.match(ragular)||[0]=="Search") {
               this.show=false;
            };
        },
        changeIndex(index) {
            this.currentIndex = index;
        },
        goSearch(event) {
            let location = { name: "search" };

            let element = event.target;
            // console.log(element.dataset);
            // console.log(element);
            let { categoryname, category1id, category2id, category3id } = element.dataset;
            let query = { categoryName: categoryname };
            if (categoryname) {

            }

            else if (category1id) {
                query.categoryName = category1id;
            }

            else if (category2id) {
                query.categoryName = category2id;
            }

            else {
                query.categoryName = category3id;
            }
            location.query = query;
            // console.log(location);
            this.$router.push(location);
        },
        enterShow() {
            this.show = true;
        },
        leaveShow() {
            //  this.currentIndex = -1;
           
            // this.show=false;
        }

    }


}
</script>

<style lang="less" scoped>
.type-nav {
    border-bottom: 2px solid #e1251b;

    .cur {
        background-color: skyblue;
    }

    .container {
        width: 1200px;
        margin: 0 auto;
        display: flex;
        position: relative;

        .all {
            width: 210px;
            height: 45px;
            background-color: #e1251b;
            line-height: 45px;
            text-align: center;
            color: #fff;
            font-size: 14px;
            font-weight: bold;
        }

        .nav {
            a {
                height: 45px;
                margin: 0 22px;
                line-height: 45px;
                font-size: 16px;
                color: #333;
            }
        }

        .sort {
            position: absolute;
            left: 0;
            top: 45px;
            width: 210px;
            height: 461px;
            position: absolute;
            background: #fafafa;
            z-index: 999;

            .all-sort-list2 {
                .item {
                    h3 {
                        line-height: 30px;
                        font-size: 14px;
                        font-weight: 400;
                        overflow: hidden;
                        padding: 0 20px;
                        margin: 0;

                        a {
                            color: #333;
                        }
                    }

                    .item-list {
                        display: none;
                        position: absolute;
                        width: 734px;
                        min-height: 460px;
                        background: #f7f7f7;
                        left: 210px;
                        border: 1px solid #ddd;
                        top: 0;
                        z-index: 9999 !important;

                        .subitem {
                            float: left;
                            width: 650px;
                            padding: 0 4px 0 8px;

                            dl {
                                border-top: 1px solid #eee;
                                padding: 6px 0;
                                overflow: hidden;
                                zoom: 1;

                                &.fore {
                                    border-top: 0;
                                }

                                dt {
                                    float: left;
                                    width: 54px;
                                    line-height: 22px;
                                    text-align: right;
                                    padding: 3px 6px 0 0;
                                    font-weight: 700;
                                }

                                dd {
                                    float: left;
                                    width: 415px;
                                    padding: 3px 0 0;
                                    overflow: hidden;

                                    em {
                                        float: left;
                                        height: 14px;
                                        line-height: 14px;
                                        padding: 0 8px;
                                        margin-top: 5px;
                                        border-left: 1px solid #ccc;
                                    }
                                }
                            }
                        }
                    }

                    &:hover {
                        .item-list {
                            display: block;
                        }
                    }
                }
            }
        }
    }
}</style>