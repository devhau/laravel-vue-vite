<template>
    <vh-page>
        <h3>{{ $t("module.user.title") }}</h3>
        <manager :option="option">
            <template #action_after="{ row }">
                <vh-button
                    v-if="
                        $can(option.can.permission) &&
                        row['name'] != 'supper-admin'
                    "
                    beforeIcon="bi bi-shield"
                    color="warning"
                    size="sm"
                    @click="SetPermission(row)"
                    >{{ $t("module.user.button.permission") }}</vh-button>
            </template>
            <template #form_update="{ data, isNew }">
                <div class="mb-3">
                    <label for="idName" class="form-label">
                        {{ $t("module.user.field.name") }}
                    </label>
                    <vh-input id="idName" v-model="data.name" />
                </div>
                <div class="mb-3">
                    <label for="idEmail" class="form-label">
                        {{ $t("module.user.field.email") }}
                    </label>
                    <vh-input id="idEmail" v-model="data.email" />
                </div>
                <div class="mb-3" v-if="isNew">
                    <label for="idPassword" class="form-label">
                        {{ $t("module.user.field.password") }}
                    </label>
                    <vh-input
                        id="idPassword"
                        type="password"
                        v-model="data.password"
                    />
                </div>
            </template>
        </manager>

        <Permission
            v-if="showModalPermission"
            v-model:show="showModalPermission"
            v-model="DataRow"
        />
    </vh-page>
</template>
<script>
import Manager from "@/components/manager/index.vue";
import api from "@/api/user";
import Permission from "./permission.vue";
import per from "@/common/permission";
export default {
    components: { Manager, Permission },
    methods: {
        SetPermission(data) {
            this.DataRow = data;
            this.showModalPermission = true;
        },
    },
    data() {
        return {
            showModalPermission: false,
            DataRow: {},
            option: {
                api: {
                    ...api,
                },
                can: {
                    new: per.USER.NEW,
                    edit: per.USER.EDIT,
                    remove: per.USER.REMOVE,
                    permission: per.USER.PERMISSION,
                },
                columns: [
                    {
                        title: "#",
                        isSort: false,
                        isFilter: false,
                        dataCell: (item, index, start) => index + start,
                    },
                    {
                        title: () => this.$t("module.user.field.name"),
                        field: "name",
                    },
                    {
                        title: () => this.$t("module.user.field.email"),
                        field: "email",
                    },
                ],
            },
        };
    },
    setup() {},
};
</script>
