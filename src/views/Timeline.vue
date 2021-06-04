<template>
  <v-app>
    <!-- appbar -->
    <v-app-bar app fixed color="#F78D21" dark>
      <!-- USERNAME -->
      <div class="d-flex align-center">
        <h1>USER</h1>
      </div>
      <!-- USERNAME -->

      <v-spacer></v-spacer>

      <!-- LOGOUT BTN -->
      <router-link to="/" tag="v-btn">
        <v-btn text>
          <v-icon>mdi-logout</v-icon>
        </v-btn>
      </router-link>
      <!-- LOGOUT BTN -->
    </v-app-bar>
    <!-- appbar -->

    <!-- NAVIGATION DRAWER -->
      <v-navigation-drawer absolute color="#FFCC80">
        <v-list>
          <v-list-item v-for="item in items" :key="item.title" link>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content> 
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <!-- NAVIGATION DRAWER -->

    <v-main>
      <history />
    </v-main>
  </v-app>
</template>

<script>
import history from "../components/history";

export default {
  name: "Timeline",

  components: {
    history,
  },
  data() {
    return {
      items: [
        { title: "หน้าหลัก", icon: "mdi-view-dashboard" },
        { title: "เวชระเบียน", icon: "mdi-account-box" },
        { title: "ตารางนัด", icon: "mdi-calendar-clock" },
        { title: "สต็อก", icon: "mdi-archive" },
        { title: "ร้านค้า", icon: "mdi-store-outline" },
        { title: "รายรับ-รายจ่าย", icon: "mdi-cash-multiple" },
      ],
    };
  },
};
</script>

<style scoped>
.v-list-item {
  background-color: #F78D21;
  border: 0.5px solid;
  border-block-color: #000;
}
.v-navigation-drawer{
  margin-top: 56px;
}
.v-main{
  margin-left: 300px;
}
</style>