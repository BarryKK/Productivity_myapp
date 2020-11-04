<template>
  <v-container>
    <v-row>
      <v-col sm="6" offset-sm="3">
        <h1>Tasks</h1>
        <v-text-field
          v-model="newTask"
          label="Enter Task (press enter)"
          @keypress.enter="addTask"
        />

        <v-list dense>
          <v-list-item-group color="primary">
            <v-list-item v-for="(todo, i) in list" :key="i">
              <template v-slot:default="{ active }">
                <v-list-item-action>
                  <v-checkbox :input-value="active"></v-checkbox>
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-subtitle class="d-flex justify-space-between">
                    {{ todo.text }}
                    <v-icon>mdi-delete-outline</v-icon>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </template>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      newTask: "",
    };
  },
  computed: {
    ...mapState("tasks", ["list"]),
  },
  methods: {
    ...mapMutations("tasks", ["add", "remove", "toggle"]),

    addTask() {
      this.add(this.newTask);
      this.newTask = "";
    },
  },
};
</script>
