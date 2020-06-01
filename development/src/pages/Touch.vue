<template>
    <Layout>
        <h1>
            Touch
            <small style="font-size: 12px;font-weight: 100;"
                >For touch device</small
            >
        </h1>
        <div ref="touchSwipe" class="touch-area">
            <span class="row">
                <span>{{ this.up }}</span>
            </span>
            <span class="row">
                <span>{{ this.left }}</span>
                <div class="tap"></div>
                <div ref="touchTap" class="ref" @click="click">
                    {{ this.tap }}
                </div>
                <span>{{ this.right }}</span>
            </span>
            <span class="row">
                <span>{{ this.down }}</span>
            </span>
        </div>
    </Layout>
</template>

<script>
// mixin
import TouchMixin from '@vue-mixin/touch'

export default {
    mixins: [TouchMixin],

    metaInfo: {
        title: 'Touch'
    },

    data() {
        return {
            timer: null,
            up: '↑',
            left: '←',
            tap: '',
            right: '→',
            down: '↓'
        }
    },

    methods: {
        reset() {
            clearTimeout(this.timer)
            this.timer = setTimeout(() => {
                this.up = '↑'
                this.left = '←'
                this.tap = ''
                this.right = '→'
                this.down = '↓'
            }, 1400)
        },
        click() {
            this.tap = 'Click'
            this.reset()
        },
        touchSwipeToUp() {
            this.up = 'Up'
            this.reset()
        },
        touchSwipeToLeft() {
            this.left = 'Left'
            this.reset()
        },
        touchTap() {
            this.tap = 'Tap'
            this.reset()
        },
        touchSwipeToRight() {
            this.right = 'Right'
            this.reset()
        },
        touchSwipeToDown() {
            this.down = 'Down'
            this.reset()
        }
    }
}
</script>

<style lang="scss">
.touch-area {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    border: #f8f8f8 solid 10px;
    padding: 10px;
    box-sizing: border-box;
    font-size: 12px;
    border-radius: 8px;

    .row {
        display: flex;
        flex: 1;
        align-self: stretch;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        span {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100px;
            height: 100px;
        }

        .tap {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100px;
            height: 100px;
        }

        .ref {
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            left: 50%;
            top: 50%;
            width: 100px;
            height: 100px;
            background: #383838;
            color: #fff;
            border-radius: 50%;
            margin: -50px 0 0 -50px;
        }
    }
}
</style>
