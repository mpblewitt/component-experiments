<template>
  <button class="btn" :class="classes">
    <slot/>
  </button>
</template>

<script>
import { size, variant } from '../propValidator';

export default {
  props: {
    variant: {
      type: String,
      default: 'primary',
      validator: variant,
    },
    size: {
      type: String,
      default: 'md',
      validator: size,
    },
  },
  computed: {
    classes() {
      return `
        btn--${this.variant} 
        btn--${this.size}
    `;
    },
  },

};
</script>

<style lang="scss" scoped>
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
