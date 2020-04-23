<template>
  <div class="main-container">
    <!--    <v-navigation-drawer v-model="drawer" :right="right" clipped app>-->
    <!--      <v-list>-->
    <!--        <v-list-item v-for="item in items" :key="item.title" link>-->
    <!--          <v-list-item-icon>-->
    <!--            <v-icon>{{ item.icon }}</v-icon>-->
    <!--            <v-card-actions>-->
    <!--              <v-btn>{{ item.text }}</v-btn>-->
    <!--            </v-card-actions>-->
    <!--          </v-list-item-icon>-->
    <!--        </v-list-item>-->
    <!--      </v-list>-->
    <!--    </v-navigation-drawer>-->
    <v-navigation-drawer v-model="drawer" clipped app>
      <v-list dense>
        <v-container
          @click="moveHome"
          style="cursor: pointer; display: flex;
                justify-content: center; align-items: center"
        >
          <img src="@/assets/images/vue_logo.png" alt="vue" style="width: 100px" />
          <img src="@/assets/images/d3_logo.png" alt="d3" style="width: 100px" />
        </v-container>

        <template v-for="item in items">
          <v-list-group
            v-if="item.children"
            :key="item.text"
            v-model="item.model"
            prepend-icon=""
            :append-icon="item.icon"
          >
            <!-- More 버튼 생성 -->
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>
                  {{ item.text }}
                </v-list-item-title>
              </v-list-item-content>
            </template>

            <!-- 아래 목록 버튼 생성 -->
            <v-list-item
              @click="detailPage(item.text, i)"
              v-for="(child, i) in item.children"
              :key="i"
              link
            >
              <v-list-item-title>
                {{ child.text }}
              </v-list-item-title>
            </v-list-item>
          </v-list-group>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left dense>
      <v-app-bar-nav-icon @click="changeDrawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Vue & D3</v-toolbar-title>
    </v-app-bar>
    <div :class="mainPageLayout">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$vuetify.theme.dark = true;
  },
  data() {
    return {
      drawer: true,
      items: [
        {
          icon: 'mdi-chevron-up',
          iconAlt: 'mdi-chevron-down',
          text: 'Bars',
          model: false,
          children: [
            { text: 'Bar chart' },
            { text: 'Horizontal bar chart' },
            { text: 'Diverging bar chart' },
            { text: 'Stacked bar chart' },
            { text: 'Stacked horizontal bar chart' },
            { text: 'Stacked normalized horizontal bar chart' },
            { text: 'Grouped bar chart' },
            { text: 'Diverging stacked bar chart' },
          ],
        },
        {
          icon: 'mdi-chevron-up',
          'icon-alt': 'mdi-chevron-down',
          text: 'Lines',
          model: false,
          children: [
            { text: 'Line chart' },
            { text: 'Line with missing data' },
            { text: 'Multi-line chart' },
            { text: 'change line chart' },
            { text: "Marey's trains" },
            { text: 'Candlestick chart' },
            { text: 'Variable-color line' },
            { text: 'Gradient encoding' },
          ],
        },
      ],
      right: false,
      miniVariant: false,
    };
  },
  computed: {
    mainPageLayout() {
      return this.drawer ? 'about' : 'non';
    },
  },
  methods: {
    changeDrawer() {
      this.drawer = !this.drawer;
    },
    moveHome() {
      this.$router.push('/');
    },
    detailPage(name, id) {
      this.$router.push(`/main/${name}/${id}`);
    },
  },
};
</script>

<style lang="scss" src="@/assets/styles/components/layout.scss" scoped></style>
