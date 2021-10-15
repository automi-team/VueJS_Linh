<template>
  <div>
    <div class="list">
        <!-- class select will change when language.selected is Trues -->
      <div dfdf
        v-for="(language, index) in languages" 
        :key="index"
        @click="language.selected = !language.selected"
        :class="{select: language.selected}" 
        >
        <span> {{ language.name }} </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      languages: [
        { name: "vuejs", selected: false },
        { name: "html", selected: false },
        { name: "css", selected: false },
      ],
    };
  },
};
</script>

<style scoped>
.list div {
  display: inline-block;
  border: solid 1px lightblue;
  padding: 4px 10px;
  margin-right: 8px;
  border-radius: 30px;
}

.list div.select{ 
    background-color: lightblue;
}
</style>
