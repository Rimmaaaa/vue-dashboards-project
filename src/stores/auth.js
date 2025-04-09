import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

const apiKey = 'AIzaSyBTnyvQNMlASAFOgPH50ycffbU30ZpYWjs';

export const useAuthStore = defineStore('auth', () => {
    const userInfo = ref({
        token: '',
        email: '',
        userId: '',
        refreshToken: '',
        expiresIn: ''
      });
      const errorMsg = ref();
    
    const auth = async (payload, type) => {
        const stringUrl = type === 'signup' ? 'signUp' : 'signInWithPassword'
        errorMsg.value = '';
        try {
            const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:${stringUrl}?key=${apiKey}`,
                {...payload,
                returnSecureToken: true
            }
            );
            userInfo.value = {
                token: response.data.idToken,
                email: response.data.email,
                userId: response.data.localId,
                refreshToken: response.data.refreshToken,
                expiresIn: response.data.expiresIn
            }
            console.log(response.data);
            localStorage.setItem('userTokens', JSON.stringify({
                token: userInfo.value.token,
                refreshToken: userInfo.value.refreshToken,
                email: userInfo.value.email
            }))
        } catch (error) {
            console.error(error.response.data.error.message);
            errorMsg.value = `Invalid input: ${error.response.data.error.message}`
            throw errorMsg.value
          }
        // catch (err) {
        //     switch (response.data.error.message) {
        //         case 'EMAIL_EXISTS':
        //           error.value = 'Email exists'
        //           break;
        //         case 'OPERATION_NOT_ALLOWED':
        //           error.value = 'Operation not allowed'
        //           break;
        //         case 'EMAIL_NOT_FOUND':
        //           error.value = 'Email not found'
        //           break;
        //         case 'INVALID_PASSWORD':
        //           error.value = 'Invalid password'
        //           break;
        //         default:
        //           error.value = 'Error'
        //           break;
        // }
        // throw error.value
    // }
    
}

const logout = () => {
    userInfo.value = {
      token: '',
      email: '',
      userId: '',
      refreshToken: ''
    }}

return {auth, userInfo, errorMsg, logout}
})