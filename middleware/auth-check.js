export default function (contex) {
  // if(process.client) {
  //   contex.store.dispatch('initAuth', null)
  // } else {
    contex.store.dispatch('initAuth', contex.req)
  //}

}