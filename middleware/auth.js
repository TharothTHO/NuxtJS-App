export default function ({app, route, redirect}){
    if (route.path !== '/auth/signin') {

      if(!app.$fire.auth.currentUser) {

        return redirect('/')
      }
    } else if (route.path === '/auth/signin') {
      if(!app.$fire.auth.currentUser) {

      } else {
        return redirect('/')
      }
    }

}
  