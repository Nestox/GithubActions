import App from '@/App.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import WelcomeItem from '@/components/WelcomeItem.vue'
import { mount } from '@vue/test-utils'
import { expect } from 'vitest'
//import { mount } from '../../node_modules/test-utils/src/index.js'
//import App from './App.vue'

/*test('renderiza el nombre', () => {
  const wrapper = mount(Hello, {
    props: { name: 'Vitest' }
  })

  expect(wrapper.text()).toContain('Hello Vitest')
})*/

test('la imagen existe', () => {
  const wrapper = mount(App, {})

  const img = wrapper.find('img')

  // Comprueba que el <img> está en el DOM
  expect(img.exists()).toBe(true)

  // También puedes verificar atributos
  expect(img.attributes('src')).toBe('/src/assets/logo.svg');
})

test('Existe H1 y la pagina contenga un mensage', () =>
{
  const wrapper = mount(HelloWorld, {})
  const h1 = wrapper.find('h1')

  expect(h1.exists()).toBe(true)

  expect(wrapper.html()).toContain('You’ve successfully created a project with')
})

/*test('En WelcomeItem existe un slot con name=heading', () =>{
  const wrapper = mount(WelcomeItem, {})

  const slot = wrapper.find('slot')

  expect(slot.exists()).toBe(true)
})*/