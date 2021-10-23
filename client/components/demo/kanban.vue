<template>
  <div>
    <vh-command
      keyCommand="shift+space"
      @doCommand="AddColumnNew"
    />
    <vh-command
      keyCommand="ctrl+space"
      @doCommand="AddTaskNew"
    />
    <vh-kanban
      v-model="kanban"
      itemKey="id"
      itemSubKey="id"
      itemTitle="name"
      itemSubTitle="name"
    >
      <template #footerColumn="{data,update}">
        <div class="vh-kanban-action">
          <vh-label-input
            ref="elAddColumn"
            modelValue="Add New"
            :emptyWhenEdit="true"
            class="vh-kanban-card-title"
            classEdit="draggable-disabled"
            @update="(e)=>addColumn(e,data,update)"
          />
        </div>
      </template>
      <template #footerItem="{column,update,index}">
        <div class="vh-kanban-action">
          <vh-label-input
            :keyCommand="index<10?`ctrl+alt+${index}`:''"
            :modelValue="index<10?`Add New (ctrl+alt+${index})`:'Add New'"
            :emptyWhenEdit="true"
            :enterWhenMutil="true"
            :mutil="true"
            class="vh-kanban-card-title"
            classEdit="draggable-disabled"
            @update="(e)=>addItem(e,column,update)"
            @openEdit="(e)=>editLast=e"
          />
        </div>

      </template>
      <template #contentItem="{element}">
        <div>
          <vh-label-input
            v-model="element.name"
            :enterWhenMutil="true"
            :mutil="true"
            classEdit="draggable-disabled"
          />
        </div>
      </template>
    </vh-kanban>
  </div>
</template>
<script lang="ts">
import { defineComponent,  ref } from "vue";

export default defineComponent({
  data() {
    return {
      showModal: false,
      editLast: {},
      kanban: [
        {
          id: 1,
          name: "Task",
          sub: [
            { id: 5, name: "Task 1" },
            { id: 6, name: "Task 2" },
            { id: 7, name: "Task 3" },
            { id: 8, name: "Task 4" },
            { id: 9, name: "Task 5" },
          ],
        },
      ],
    };
  },
  methods: {
    AddTaskNew() {
      if (this.editLast && (this.editLast as any).openEdit) {
        (this.editLast as any).openEdit();
      } else if (this.elAddTask != null) {
        (this.elAddTask as any).openEdit();
      }
    },
    AddColumnNew() {
      if (this.elAddColumn != null) {
        (this.elAddColumn as any).openEdit();
      }
    },
    addItem(value: any, column: any, update: any) {
      if (column.sub === undefined) {
        column.sub = [];
      }
      column.sub.push({ id: new Date().getTime(), name: value });
      if (update) {
        update(column);
      }
    },
    addColumn(value: any, data: any, update: any) {
      if (data == null) {
        data = [
          {
            id: new Date().getTime(),
            name: value,
            sub: [],
          },
        ];
      } else {
        let dataItem: any = {
          id: new Date().getTime(),
          name: value,
          sub: [],
        };
        data = [...data, dataItem];
      }
      if (update) {
        update(data);
      }
    },
  },
  setup() {
    const elAddColumn = ref(null);
    const elAddTask = ref(null);
    return {
      elAddColumn,
      elAddTask,
    };
  },
});
</script>
