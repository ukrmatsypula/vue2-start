Vue.component("task", {
  props: {
    data: {
      type: Object,
      default: {},
    },
  },

  template: `
    <div class="task" :class="{ active : data.isCompleted}">
      <div>
        <h3 class="task__title">{{ data.title }}</h3>
        <p class="task__desc">{{ data.desc }}</p>
      </div>
      <button @click="isCompleted" class="task__done">✅</button>
      <button @click="done" class="task__done">X</button>
  </div>
      `,
  methods: {
    done() {
      this.$emit("done");
    },
    isCompleted() {
      this.$emit("completed");
    },
  },
});

const vue = new Vue({
  el: "#app",
  computed: {
    countTasks() {
      return "Текущие задачи: " + this.tasks.length;
    },
  },
  data: {
    new_task: {
      title: "",
      desc: "",
    },
    tasks: [
      {
        title: "Изучить Vue 2",
        desc: 'Прочитать книгу "Величие Vue.js 2"',
      },
      {
        title: "Россказать про Vuex и router",
        desc: "Розяснить для чего они нужны!",
      },
    ],
  },
  methods: {
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
    createTask() {
      if (this.new_task.title) {
        this.tasks.push({
          title: this.new_task.title,
          desc: this.new_task.desc,
        });
      }
    },
    completedTask(index) {
      if (!this.tasks[index].isCompleted) {
        this.$set(this.tasks[index], "isCompleted", 1);
      } else {
        this.$set(this.tasks[index], "isCompleted", 0);
      }

      console.log(this.tasks);
    },
  },
});
