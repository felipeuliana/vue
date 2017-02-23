
import ENV from '../environment/environment'

var readerInject = {
    methods:{
        headersRequest(){
            this.$http.post(ENV[ENV.type].url.login,ENV[ENV.type].basicAuth).then(function(headersResponse){
                this.setAuthToken(headersResponse.body.secUserToken);
                this.$emit('gotHeaders',{'Gtw-Sec-User-Token':this.getAuthCookie(), 'Gtw-Transaction-Id':'FIXO'});
            });
        },
        setAuthToken(token){
            this.$cookie.set('Gtw-Sec-User-Token', token, 1);
        },
        getAuthCookie(){
           return this.$cookie.get('Gtw-Sec-User-Token');
        }        
    }
};

export default readerInject;
