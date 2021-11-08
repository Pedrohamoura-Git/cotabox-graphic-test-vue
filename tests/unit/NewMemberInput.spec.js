import { mount } from '@vue/test-utils'
import NewMemberForm from '../../src/components/NewMemberForm/NewMemberForm'
import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      membersList: [],
      availableParticipation: 0,
    }
  },
  mutations: {
    SET_NEW_MEMBER(state, payload) {
      state.membersList.push(payload)
    },
    SET_ALL_MEMBERS(state, payload) {
      state.membersList = payload
    },
    SET_AVAILABLE_PARTICIPATION(state, payload) {
      state.availableParticipation = payload
    },
  },
})

function factory() {
  return mount(NewMemberForm, {
    global: {
      plugins: [store],
    },
  })
}

test('Should add a member', () => {
  // const wrapper = mount(NewMemberForm)
  // const spy = jest.fn()

  const wrapper = factory()

  wrapper.find('[data-test="first-name-input"]').setValue('Pedro')
  wrapper.find('[data-test="last-name-input"]').setValue('Henrique')
  wrapper.find('[data-test="participation-input"]').setValue('30')
  wrapper.find('[data-test="submit-btn"]').trigger('click')

  expect(wrapper.store.mutations.SET_NEW_MEMBER).toBeCalledTimes(1)
  // expect(spy).toBeCalledTimes(1)
})
