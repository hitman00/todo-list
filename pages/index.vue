<template>
  <div :class="$style.main">
    <div :class="$style.box">
      <div :class="$style.title">todos</div>
      <input
        v-model="addlist"
        :class="$style.main_text"
        type="text"
        placeholder="what needs to be done?"
        @keyup.enter="addtodo"
      />
      <ul>
        <li v-for="(todo, id) in test" :key="id">
          <div>
            <input
              v-model="list"
              :class="$style.check"
              type="checkbox"
              :value="id"
            />
            <label>
              {{ todo }}
            </label>
          </div>
          <div :class="$style.destroy" @click="removetodo">×</div>
        </li>
        <li :class="$style.remove_box">
          <div @click="removeAll">remove all</div>
          <div @click="removeCheck">Remove Check</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    addlist: '',
    list: [],
  }),
  computed: {
    test() {
      return this.$store.state.todo.todos
    },
  },

  methods: {
    addtodo() {
      if (this.addlist !== '') {
        this.$store.commit('todo/addtodos', this.addlist)
        this.addlist = ''
      }
    },
    removetodo(id) {
      this.$store.commit('todo/removetodos', id)
    },
    removeAll() {
      this.$store.commit('todo/removeall')
    },
    removeCheck() {
      this.list = this.list.sort()
      for (let i = this.list.length; i > 0; i--) {
        this.$store.commit('todo/removetodos', this.list[i - 1])
      }
      this.list = []
    },
  },
}
</script>

<style lang="scss" module>
.main {
  width: 100%;
}

.box {
  margin: 0 auto;
  max-width: 50%;
  ul {
    li {
      padding: 4%;
      font-size: 24px;
      box-shadow: 0px 1px 3px gray;
      background: #fff;
      width: 90%;
      margin: 0 auto;
      color: #4d4d4d;
      display: flex;
      justify-content: space-between;
      &:hover .destroy {
        display: block;
      }
      &.remove_box {
        padding: 2% 14%;
        font-size: 15px;
        cursor: pointer;
      }
    }
  }
}

.check {
  height: 25px;
  width: 25px;
  appearance: none;
  border-radius: 100%;
  cursor: pointer;
  border: 1px solid rgb(141, 141, 141);
  &:before {
    content: '\2713';
    display: block;
    color: #fff;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    transition: all 0.4s ease;
  }
  &[type='checkbox']:checked:before {
    color: #41b883;
    transition: all 0.4s ease;
  }
  &[type='checkbox']:checked + label {
    color: #6e6a6a;
    text-decoration: line-through;
  }
}

.main_text {
  padding: 2% 4%;
  background: #fff;
  box-shadow: 0px 1px 3px gray;
  border: 0;
  width: 90%;
  margin: 0 auto;
  display: block;
  font-size: 40px;
  color: #cec9c9;
  &:focus {
    outline: none;
  }
}

.title {
  color: #ebd6d5;
  font-size: 70px;
  font-weight: bold;
  text-align: center;
  margin: 4% 0;
}

.destroy {
  display: none;
  cursor: pointer;
  color: #af5b5e;
  font-size: 22px;
  font-weight: 900;
}
</style>
