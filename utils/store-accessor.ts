import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Movies from '~/store/movies'

let moviesStore: Movies

function initialiseStores (store: Store<any>): void {
  moviesStore = getModule(Movies, store)
}

export { initialiseStores, moviesStore }
