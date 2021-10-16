<template>
  <vh-gantt
    :source="data"
    :coloumns="dataColumns"
    :startDate="startDate"
    :endDate="endDate"
  ></vh-gantt>
</template>
<script>
import { formatDate, addDays } from "@devhau/utils";
export default {
  data() {
    return {
      startDate: new Date(),
      endDate: addDays(new Date(), 8),
      dataColumns: [
        {
          field: 'name',
          title: 'Task',
          width: 200
        },
        {
          field: 'status',
          title: 'Status',
          width: 90
        },
        {
          field: 'date',
          title: 'Date',
          width: 120,
          format: (item) => item ? formatDate(item) : ''
        },
        {
          field: 'due',
          title: 'Due',
          width: 90
        }
      ],
      data: [
        {
          name: 'Task 1',
          date: addDays(new Date(), 3),
          status: 'done',
          due: '5'
        },
        {
          name: 'Task 2',
          date: addDays(new Date(), 1),
          status: 'Test',
          due: 50
        },
        {
          name: 'Task 3',
          date: addDays(new Date(), 1),
          status: 'done',
          due: 15
        },
        {
          name: 'Task 4',
          date: addDays(new Date(), 4),
          status: 'done',
          due: 53
        },
        {
          name: 'Task 6',
          date: addDays(new Date(), 3),
          status: 'done',
          due: 59
        },
        {
          name: 'Task 1',
          date: '',
          status: 'done',
          due: ''
        },
        {
          name: 'Task 1',
          date: '',
          status: 'done',
          due: ''
        },
        {
          name: 'Task 1',
          date: '',
          status: 'done',
          due: ''
        },
        {
          name: 'Task 1',
          date: '',
          status: 'done',
          due: ''
        },
        {
          name: 'Task 1',
          date: '',
          status: 'done',
          due: ''
        },
        {
          name: 'TTask 1',
          date: addDays(new Date(), 2),
          status: 'done',
          due: '5'
        },
        {
          name: 'Tassddf',
          date: addDays(new Date(), 4),
          status: 'Test',
          due: ''
        },
        {
          name: 'Task 1',
          date: '',
          status: 'done',
          due: ''
        },
        {
          name: 'Task 1',
          date: '',
          status: 'done',
          due: ''
        },
        {
          name: 'Task 1',
          date: '',
          status: 'done',
          due: ''
        },
        {
          name: 'Task 1',
          date: '',
          status: 'done',
          due: ''
        },
        {
          name: 'Task 1',
          date: '',
          status: 'done',
          due: ''
        },
        {
          name: 'Task 1',
          date: '',
          status: 'done',
          due: ''
        },
        {
          name: 'Task 1',
          date: '',
          status: 'done',
          due: ''
        },
        {
          name: 'Task 1',
          date: '',
          status: 'done',
          due: ''
        },
        {
          name: 'TTask 1',
          date: addDays(new Date(), 4),
          status: 'done',
          due: '5'
        },
        {
          name: 'Task1234',
          date: '',
          status: 'Test',
          due: ''
        },
        {
          name: 'Task 1',
          date: '',
          status: 'done',
          due: ''
        },
        {
          name: 'Task 1',
          date: '',
          status: 'done',
          due: ''
        },
        {
          name: 'Task 1',
          date: '',
          status: 'done',
          due: ''
        },
        {
          name: 'Task 1',
          date: '',
          status: 'done',
          due: ''
        },
        {
          name: 'Task 1',
          date: '',
          status: 'done',
          due: ''
        },
        {
          name: 'Task 1',
          date: '',
          status: 'done',
          due: ''
        },
        {
          name: 'Task 1',
          date: '',
          status: 'done',
          due: ''
        },
        {
          name: 'Heets',
          date: '',
          status: 'done',
          due: ''
        }
      ]
    }
  },
  setup() {

  },
}
</script>
