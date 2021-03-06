export function Signin(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: 'ALeKk02G0qQyeFUIPxUx1xiaaCNsi_e2Yew',
                user: {
                    name: 'Douglas Ribeiro',
                    email: 'douglas100099@hotmail.com'
                }
            })
        }, 2000);
    })
}