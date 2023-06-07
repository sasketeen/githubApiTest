import { Octokit } from "@octokit/core"
const octokit = new Octokit({});

export const usersModule = {
  state: () => ({
    users: null,
    totalCount: null,
    searchParams: {
      value: '',
      order: 'desc',
    },
    results: null,
    isRequestFall: false,
    isLoading: false,
    page: null,
  }),
  mutations: {
    setUsers(state, users) {
      state.users = users
    },
    setTotalCount(state, totalCount) {
      state.totalCount = totalCount
    },
    setSearchParams(state, searchParams) {
      state.searchParams = searchParams
    },
    setIsRequestFall(state, isRequestFall) {
      state.isRequestFall = isRequestFall
    },
    setPage(state, page) {
      state.page = page
    },
    setIsLoading(state, isLoading) {
      state.isLoading = isLoading
    }
  },

  getters: {
    getRequestParams(state) {
      const params = {
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
          accept: 'application/vnd.github+json'
        },
        per_page: 10,
        page: state.page,
        q: state.searchParams.value
      }

      if (state.searchParams.sort && state.searchParams.order) {
        params['sort'] = state.searchParams.sort
        params['order'] = state.searchParams.order
      }
      return params
    }
  },


  actions: {
    async searchUsers({ state, commit, getters }) {
      if (state.searchParams.value) {
        commit('setIsRequestFall', false)
        commit('setIsLoading', true)
        commit('setPage', 1)
        try {
          const res = await octokit.request('GET /search/users', getters.getRequestParams)
          commit('setUsers', res.data.items)
          commit('setTotalCount', res.data.total_count)
        } catch (error) {
          commit('setIsRequestFall', true)
          console.error(error);
        } finally {
          commit('setIsLoading', false)
        }
      }
    },

    async loadMoreResults({ state, commit, getters }) {
      commit('setIsRequestFall', false)
      commit('setIsLoading', true)
      commit('setPage', state.page + 1)

      try {
        const res = await octokit.request('GET /search/users', getters.getRequestParams)
        commit('setUsers', state.users.concat(res.data.items))
        commit('setTotalCount', res.data.total_count)
      } catch (error) {
        commit('setIsRequestFall', true)
        console.error(error);
      } finally {
        commit('setIsLoading', false)
      }
    },
  }
}
