<template>
  <v-container>
    <!-- CARD TOPIC -->
    <v-row>
      <v-col v-for="item in items" :key="item.title" link>
        <v-card class="topic" elevation="5">
          <h1 class="mr-5">{{ item.value }} {{ item.unit }}</h1>
          <p class="mr-5">{{ item.title }}</p>
        </v-card>
      </v-col>
    </v-row>
    <!-- CARD TOPIC -->

    <v-row>
      <!-- CARD CHART -->
      <v-col>
        <v-card>
          <v-row>
            <v-col cols="12" sm="4" class="ml-5">
              <v-select
                v-model="select"
                :items="dropbox"
                item-text="state"
                persistent-hint
                return-object
                outlined
              >
              </v-select>
            </v-col>
            <v-col> </v-col>
          </v-row>
          <v-row>
            <div class="ml-5">
              <apexchart
                width="700"
                type="bar"
                :options="options"
                :series="series"
              ></apexchart>
            </div>
          </v-row>
        </v-card>
      </v-col>
      <!-- CARD CHART -->

      <!-- CARD APPONITMENT -->
      <v-col>
        <v-card class="appoint">
          <h3>นัดรักษาวันนี้</h3>
          <v-list v-for="appoint in appoints" :key="appoint.time" link>
            <v-row>
              <v-col>
                <b>{{ appoint.time }}</b>
              </v-col>
              <v-col>
                <b>
                {{ appoint.hn }}
                </b>
              </v-col>
              <v-col>
                <b>
                {{ appoint.title }}
                </b>
              </v-col>
            </v-row>
          </v-list>
          <v-row>
            <v-col>
              <p style="color: #cc0000">
                <v-icon color="#CC0000">mdi-circle-slice-8</v-icon>ผ่าตัด
              </p>
            </v-col>
            <v-col>
              <p style="color: #edd400">
                <v-icon color="#EDD400">mdi-circle-slice-8</v-icon>ติดตามอาการ
              </p>
            </v-col>
            <v-col>
              <p style="color: #3ec986">
                <v-icon color="#3EC986">mdi-circle-slice-8</v-icon>ฉีดวัคซีน
              </p>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <!-- CARD APPONITMENT -->
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "dashboard",
  data() {
    return {
      items: [
        { title: "ยอดในวันนี้", value: "1000", unit: "บาท" },
        { title: "ยอดในเดือนนี้", value: "1000", unit: "บาท" },
        { title: "ยอดในปีนี้", value: "1000", unit: "บาท" },
        { title: "จำนวนสัตว์", value: "1000", unit: "ตัว" },
      ],
      appoints: [
        { time: "เวลา", hn: "HN", title: "รายการ" },
        { time: "10.00 น.", hn: "001/61", title: "ผ่าตัด" },
        { time: "13.00 น.", hn: "002/61", title: "ติดตามอาการ" },
        { time: "15.00 น.", hn: "003/61", title: "ฉีดวัคซีน" },
      ],
      select: { state: "ยอดขายแต่ในละเดือน" },
      dropbox: [{ state: "ยอดขายแต่ในละเดือน" }, { state: "ยอดขายในแต่ละปี" }],
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
      ],
    };
  },
};
</script>

<style scoped>
.topic {
  text-align: right;
  height: 100px;
}
.appoint {
  text-align: center;
}
</style>
