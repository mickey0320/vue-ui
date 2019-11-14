const { expect } = chai

import Vue from 'vue'
import Input from '../src/input'

describe('Input', () => {
    it('Input exsits', () => {
        expect(Input).to.be.ok
    })

    const Constrcutor = Vue.extend(Input)
    let vm = null
    afterEach(() => {
        vm.$destroy()
    })
    describe('Test Props', () => {
        it('pass value', () => {
            vm = new Constrcutor({
                propsData:{
                    value: 'yanjian'
                }
            }).$mount()
            const el = vm.$el.querySelector('input')
            expect(el.value).to.be.equal('yanjian')
        })
        it('pass disabled', () => {
            vm = new Constrcutor({
                propsData:{
                    value: 'yanjian',
                    disabled: true,
                }
            }).$mount()
            const el = vm.$el.querySelector('input')
            expect(el.disabled).to.be.equal(true)
        })
        it('pass readonly', () => {
            vm = new Constrcutor({
                propsData:{
                    value: 'yanjian',
                    readonly: true,
                }
            }).$mount()
            const el = vm.$el.querySelector('input')
            expect(el.readOnly).to.be.equal(true)
        })
        it('pass error', () => {
            vm = new Constrcutor({
                propsData:{
                    value: 'yanjian',
                    error: 'has error'
                }
            }).$mount()
            const errorMsg = vm.$el.querySelector('error-msg')
            const use = vm.$el.querySelector('use')
            expect(use.getAttribute('xlink:href')).to.be.equal('#i-error')
            expect(errorMsg.innerHTML).to.be.equal('has error')
        })
    })

    describe('Test Events',() => {
        ['change','input','focus','blur'].forEach(eventName => {
            it('emit change event',() => {
                vm = new Constrcutor({
                    propsData:{
                        value: 'yanjian',
                    }
                }).$mount()
                const fn = sinon.fake()
                vm.$on(eventName,fn)
                expect(fn).to.have.been.called
            })
        })

    })
})
