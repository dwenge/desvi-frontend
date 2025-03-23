import { test, expect, beforeAll } from 'vitest'
import {mount} from '@vue/test-utils'
import HelloWorld from './HelloWorld.vue'

const msgText = "Test message"
const msgSelector = '[data-test="msg"]'
const countSelector = '[data-test="counter"]'

const wrapper = mount(HelloWorld, {
    props: { msg: msgText }
})

test('Провека сообщения', () => {
    expect(wrapper.find(msgSelector).text()).toContain(msgText)
})

test('Счетчик', async () => {
    const btn = wrapper.find(countSelector)
    expect(btn.text()).toContain('0')
    await btn.trigger('click')
    expect(btn.text()).toContain('1')
})