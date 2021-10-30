<template>
    <div class="vh-dashboard">
        <div class="vh-dashboard__header">
            <headerItem />
            <headerItem />
            <headerItem />
            <headerItem />
        </div>
        <div class="vh-dashboard__body"></div>
    </div>
</template>
<script>
import selectModel from "@/components/common/selectModel.vue";
import headerItem from "./headerItem.vue";
export default {
    components: { headerItem },
    data() {
        return {};
    },
    setup() {},
};
</script>
