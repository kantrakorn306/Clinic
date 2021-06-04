<template>
  <v-contrainer>
    <v-row>
      <v-col>
        <v-card class="overflow-hidden" color="#FFCC80">
          <v-toolbar flat color="#FFCC80">
            <v-spacer></v-spacer>
            <v-btn color="#FFCC80" fab small @click="isEditing = !isEditing">
              <v-icon v-if="isEditing"> mdi-close </v-icon>
              <v-icon v-else> mdi-pencil </v-icon>
            </v-btn>
          </v-toolbar>
          <v-card-text>
            <v-row>
              <v-col>
                <v-text-field
                  :disabled="!isEditing"
                  color="white"
                  label="ชื่อ"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-autocomplete
                  :disabled="!isEditing"
                  :items="states"
                  :filter="customFilter"
                  v-model="select"
                  color="white"
                  item-text="gender"
                  label="เพศ"
                >
                </v-autocomplete>
              </v-col>
              <v-col>
                <v-text-field
                  :disabled="!isEditing"
                  color="white"
                  label="พันธุ์"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  :disabled="!isEditing"
                  color="white"
                  label="ชื่อเจ้าของ"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  :disabled="!isEditing"
                  color="white"
                  label="เบอร์โทรติดต่อ"
                ></v-text-field>
              </v-col>
            </v-row>

            <v-text-field
              :disabled="!isEditing"
              color="white"
              label="ที่อยู่"
            ></v-text-field>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn :disabled="!isEditing" color="success" @click="save"> Save </v-btn>
          </v-card-actions>
          <v-snackbar v-model="hasSaved" :timeout="2000" absolute bottom left>
            Profile has been updated
          </v-snackbar>
        </v-card>
      </v-col>
      <v-col>
        <v-img
          lazy-src="../assets/logo.jpg"
          max-height="300"
          max-width="300"
          src="../assets/logo.jpg"
        ></v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-expansion-panels>
          <v-expansion-panel v-for="(item, i) in 5" :key="i">
            <v-expansion-panel-header> Date </v-expansion-panel-header>
            <v-expansion-panel-content>
              <p>CC</p>
              <p>HX</p>
              <p>PE</p>
              <p>Plan</p>
              <p>Treatment</p>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
      <v-col></v-col>
    </v-row>
  </v-contrainer>
</template>

<script>
export default {
  name: "history",
  data() {
    return {
      hasSaved: false,
      isEditing: null,
      model: null,
      select: { gender: "ผู้", id: 1 },
      states: [
        { gender: "ผู้", id: 1 },
        { gender: "เมีย", id: 2 },
      ],
    };
  },

  methods: {
    customFilter(item, queryText, itemText) {
      const textOne = item.name.toLowerCase();
      const textTwo = item.abbr.toLowerCase();
      const searchText = queryText.toLowerCase();

      return textOne.indexOf(searchText) > -1 || textTwo.indexOf(searchText) > -1;
    },
    save() {
      this.isEditing = !this.isEditing;
      this.hasSaved = true;
    },
  },
};
</script>

<style></style>
