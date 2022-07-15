<template>
  <v-container>
    <div>
      <div>
        <v-table theme="dark">
          <thead>
            <tr>
              <th class="text-left">ID</th>
              <th class="text-left">NAME</th>
              <th class="text-left">ISLOH</th>
              <th class="text-left">ACTION</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in users" :key="i">
              <td>{{ item.id }}</td>
              <td v-if="this.isEdit == item.id">
                <input type="text" v-model="textEdited" />
              </td>
              <td v-else>{{ item.name }}</td>
              <td>{{ item.isLoh ? "หล่อ" : "ไม่หล่อ" }}</td>
              <v-btn
                class="d-inline mr-2"
                color="red"
                @click="deleteUser(item.id)"
                >DELETE</v-btn
              >
              <v-btn
                v-if="isEdit == item.id"
                class="d-inline"
                color="yellow"
                @click="save(item.id)"
                >SAVE</v-btn
              >
              <v-btn
                v-else
                class="d-inline"
                color="yellow"
                @click="updateUserById(item.id)"
                >UPDATE</v-btn
              >
            </tr>
          </tbody>
        </v-table>
        <v-text-field
          class="mt-6"
          v-model="name"
          label="USERNAME"
          variant="underlined"
          clearable
        ></v-text-field>
        <v-switch
          label="IS LOH"
          color="red"
          hide-details
          @click="switcher"
        ></v-switch>
        <v-btn color="primary" @click="addUser">ADD USERNAME</v-btn>
      </div>
    </div>
  </v-container>
</template>

<script>
import db from "../plugins/firebase.js";
export default {
  data: () => ({
    name: "",
    isLoh: false,
    isEdit: "",
    textEdited: "",
  }),
  firestore: {
    users: db.collection("users"),
  },
  methods: {
    getUser() {
      console.log(this.users);
    },
    getUserById(key) {
      this.users.doc(key).get();
    },
    updateUserById(key) {
      this.isEdit = key;
    },
    addUser() {
      db.collection("users").add({
        name: this.name,
        isLoh: this.isLoh,
      });
    },
    save(key) {
      this.isEdit = "";
      db.collection("users").doc(key).set({
        name: this.textEdited,
      });
      this.textEdited = "";
    },
    deleteUser(key) {
      db.collection("users").doc(key).delete();
    },
    switcher() {
      this.isLoh = !this.isLoh;
    },
  },
};
</script>
