<template>
  <div>
    <!-- Restaurant Profile Photo -->
    <div class="m-t-24 align-center">
      <div class="w-16 h-16 rounded-full bg-form is-inline-block">
        <img :src="profileImage" class="w-16 h-16 rounded-full cover" />
      </div>
    </div>

    <!-- Restaurant Name -->
    <div class="m-t-8 align-center t-h6 c-text-black-high">
      {{ shopInfo.restaurantName }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shopInfo: {
      type: Object,
      required: true
    }
  },
  computed: {
    profileImage() {
      return this.resizedProfileImage(this.shopInfo, "600");
    }
  }
};
</script>
