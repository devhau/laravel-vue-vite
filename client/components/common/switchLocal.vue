<template>
    <div class="vh-switch-local">
        <div
            class="vh-local-item"
            :class="lang == $i18n.locale ? 'active' : ''"
            v-for="lang in langs"
            :key="lang"
            @click="switchLocal(lang)"
        >
            <i :class="$t(`common.local.${lang}.icon`)" />
            {{ $t(`common.local.${lang}.text`) }}
        </div>
    </div>
</template>
<script>
import { KEY_LOLCAL_LANG } from "@/common/constant";
export default {
    methods: {
        switchLocal(local) {
            this.$i18n.locale = local;
            localStorage.setItem(KEY_LOLCAL_LANG, local);
        },
    },
    data() {
        return { langs: ["vi", "en", "jp"] };
    },
};
</script>
