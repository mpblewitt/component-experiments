<template>
  <button :class="classes">
    <slot/>
  </button>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: 'primary',
      validator: (v) => ['primary', 'secondary'].includes(v),
    },
    size: {
      type: String,
      default: 'md',
      validator: (v) => ['sm', 'md', 'lg'].includes(v),
    },
  },
  computed: {
    classes() {
      const { $style } = this;
      return [$style.btn, $style[`btn--${this.variant}`], $style[`btn--${this.size}`]].join(' ');
    },
  },

};
</script>

<style lang="scss" module>
.btn {
    color: white;
    border: 0;
    border-radius: 3px;
}

.btn--sm {
    font-size: space(4);
    padding: space(2) space(4);
};

.btn--md {
    font-size: space(6);
    padding: space(3) space(5);
};

.btn--lg {
    font-size: space(8);
    padding: space(4) space(6);
};

.btn--primary {
    background: $color-primary;
}
.btn--secondary {
    background: $color-secondary;
}

</style>
