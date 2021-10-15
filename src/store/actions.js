export default { //action update state
    updateProfile(context) { //value at current time
      // in js detructuring, (context) => ( {commit} )
      // context.commit => commit
      context.commit('setName', 'some name to set'); //variable payload from mutation

    }
  }

  // can use to call API, write logic