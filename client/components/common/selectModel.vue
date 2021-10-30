<template>
    <vh-select
        v-if="source && source.length > 0"
        v-model="dataValue"
        v-model:modelItem="dataItem"
        :source="source"
        :fieldValue="fieldValue"
        :fieldDisplay="fieldDisplay"
        :textAll="textAll"
        :valueAll="valueAll"
        :isAll="isAll"
    />
</template>
<script>
import api from "@/api";
export default {
    props: {
        modelValue: null,
        modelItem: {
            default: null,
        },
        modelData: {
            type: String,
            default: "",
        },
        fieldValue: {
            type: String,
            default: "id",
        },
        fieldDisplay: {
            type: String,
            default: "name",
        },
        textAll: {
            type: String,
            default: "All",
        },
        valueAll: {
            default: null,
        },
        isAll: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            source: [],
            dataValue: "",
            dataItem: "",
        };
    },
    methods: {
        loadData() {
            api.get(`${this.modelData}`, { is_all: true }).then((rs) => {
                if (rs.data.OK == true) {
                    this.source = rs.data.data;
                } else {
                    this.source = [];
                }
            });
        },
    },
    mounted() {
        this.dataValue = this.modelValue;
        this.loadData();
    },
    watch: {
        dataValue(_newValue) {
            this.$emit("update:modelValue", _newValue);
        },
        dataItem(_newValue) {
            this.$emit("update:modelItem", _newValue);
        },
    },
};
</script>
