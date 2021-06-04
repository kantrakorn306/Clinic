<template>
  <v-container>
    <h1>This is a login page</h1>
    <!-- LOGO -->
    <v-row align="center" justify="center">
      <v-avatar color="#F78D21" size="250"
        ><img src="../assets/logo.jpg" alt="LOGO" /></v-avatar
    ></v-row>
    <!-- LOGO -->

    <!-- USER -->
    <v-row>
      <v-col class="mx-auto" cols="auto">
        <v-text-field
          label="USERNAME"
          solo
          rounded
          prepend-inner-icon="mdi-account"
        ></v-text-field
      ></v-col>
    </v-row>
    <!-- USER -->

    <!-- PASSWORD -->
    <v-row>
      <v-col class="mx-auto" cols="auto">
        <v-text-field
          label="PASSWORD"
          solo
          rounded
          prepend-inner-icon="mdi-lock"
        ></v-text-field
      ></v-col>
    </v-row>
    <!-- PASSWORD -->

    <!-- LOGIN -->
    <v-row class="align-center">
      <v-col cols="12" sm="10" class="text-right">
        <v-btn dark rounded color="#F78D21">LOGIN</v-btn>
      </v-col>
    </v-row>
    <!-- LOGIN -->
  
  </v-container>
</template>

<style scoped>
.v-text-field {
  width: 500px;
}
*{
  background-color : red;
}
</style>
