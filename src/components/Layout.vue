<template>
  <div class="main-container">
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
  import { items } from '@/config/chartItemConfig.js'
export default {
  created() {
    this.$vuetify.theme.dark = true;
  },
  data() {
    return {
      drawer: true,
      items: items,
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
