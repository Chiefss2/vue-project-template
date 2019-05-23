import { mount } from "@vue/test-utils";
import sinon from 'sinon';
import Counter from "@/components/Counter.vue";

describe("Counter.vue", () => {
  let isCalled = false;
  const change = sinon.spy();
  const wrapper = mount(Counter, {
    listeners: {
      // change() {
      //   isCalled = true;
      // }
      change
    }
  });
  it("renders counter html", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
  it("count++ and change isCalled", () => {
    const button = wrapper.find('button');
    button.trigger('click');
    expect(wrapper.vm.count).toBe(1);
    // expect(isCalled).toBe(true);
    // expect(change.called).toBe(true);
    expect(change.callCount).toBe(1);
    button.trigger('click');
    expect(change.callCount).toBe(2);
  });
});
