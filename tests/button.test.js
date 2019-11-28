const { expect } = chai

import Vue from 'vue'
import Button from '../src/button'

describe('Test Button', () => {
    it('Button shoule exsit',() => {
        expect(Button).to.be.ok
    })
    it('icon can be set', () => {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData:{
                icon: 'settings'
            }
        }).$mount()

        const el = vm.$el.querySelector('use')
        const attr = el.getAttribute('xlink:href')
        expect(attr).to.be.eq('#i-settings')
    })
    it('set loading icon', () => {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData:{
                icon: 'settings',
                loading: true
            }
        }).$mount()
        const el = vm.$el.querySelector('use')
        const attr = el.getAttribute('xlink:href')
        expect(attr).to.be.eq('#i-loading')
    })
    it('icon should be on the right', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData:{
                icon: 'settings',
                direction: 'right'
            }
        }).$mount(div)
        const el = vm.$el.querySelector('.icon')
        const style = getComputedStyle(el).order
        expect(style).to.be.eq('2')
    })
    it('button can be clicked', () => {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData:{
                icon: 'settings'
            }
        }).$mount()
        const fn = sinon.fake()
        vm.$on('click', fn)
        vm.$el.click()
        expect(fn).to.have.been.called
    })
})