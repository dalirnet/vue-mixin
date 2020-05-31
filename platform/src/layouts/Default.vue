<template>
    <div class="layout">
        <header class="header">
            <strong>
                <g-link to="/">Vue-mixin</g-link>
            </strong>
            <small>
                <g-link to="https://github.com/dalirnet/vue-mixin"
                    >Gihtub</g-link
                >
            </small>
        </header>
        <slot />
    </div>
</template>

<script>
import('destyle.css')
export default {}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Jaldi');
body {
    font-family: 'DoJaldisis', sans-serif;
}

.layout {
    max-width: 760px;
    margin: 0 auto;
    padding-left: 10px;
    padding-right: 10px;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    height: 80px;
}
</style>
