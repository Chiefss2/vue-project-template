<template>
  <div class="receiver-account">
    <a-input-group compact>
      <a-select v-model="type" style="width:90px" @change="handleTypeChange">
        <a-select-option value="alipay">支付宝</a-select-option>
        <a-select-option value="bank">银行账户</a-select-option>
      </a-select>
      <a-input
        v-model="number"
        style="width:calc(100% - 90px)"
        @change="handleNumberChange"
      />
    </a-input-group>
  </div>
</template>

<script>
export default {
  name: "ReceiverAccount",
  props: {
    value: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    const { type, number } = this.value || {};
    return {
      type: type || "alipay",
      number: number || ""
    };
  },
  watch: {
    value(val) {
      Object.assign(this, val);
    }
  },
  methods: {
    handleTypeChange(val) {
      this.$emit("change", { ...this.value, type: val });
    },
    handleNumberChange(e) {
      this.$emit("change", { ...this.value, number: e.target.value });
    }
  }
};
</script>

<style></style>
