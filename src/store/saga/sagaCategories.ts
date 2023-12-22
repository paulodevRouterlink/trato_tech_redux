import { takeEvery } from 'redux-saga/effects'

function* observableCategories() {
  yield console.log('ObservableCategories')
}

function* categoriesSaga() {
  yield takeEvery('categories/get', observableCategories)
}

export default categoriesSaga
