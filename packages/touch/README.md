# @vue-mixin/touch

Touch mixin for vue
[Demo](https://dalirnet.github.io/vue-mixin/touch/)

---

##### Install

```bash
npm install @vue-mixin/touch --save
```

##### Import

```javascript
import touchMixin from "@vue-mixin/touch"

export default {
    mixins: [touchMixin],
}
```

---

##### Swipe

-   template

```html
<div ref="touchSwipe"></div>
```

-   script

```javascript
export default {
    methods: {
        /* ↑ */
        touchSwipeToUp() {
            console.log("Up")
        },

        /* ← */
        touchSwipeToLeft() {
            console.log("Left")
        },

        /* → */
        touchSwipeToRight() {
            console.log("Right")
        },

        /* ↓ */
        touchSwipeToDown() {
            console.log("Down")
        },
    },
}
```

---

##### Tap

-   template

```html
<div ref="touchTap"></div>
```

-   script

```javascript
export default {
    methods: {
        /* doesn't fire on click */
        touchTap() {
            console.log("Tap")
        },
    },
}
```
