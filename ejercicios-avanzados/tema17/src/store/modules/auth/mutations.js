export default {
    setUser(state, payload){
        state.tokenId= payload.idToken;
        state.userId= payload.userId;
        state.expiresIn= payload.expiresIn;
    }
};