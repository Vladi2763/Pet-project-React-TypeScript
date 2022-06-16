
const authRequest = (email: string, password: string, isLogin: boolean): Promise<any> => {

    let url:string;

    if (isLogin) {
        url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBi_U059geNqo0MhRQh1L8_6aBPtC5rhNw'
    } else {
        url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBi_U059geNqo0MhRQh1L8_6aBPtC5rhNw'
    }

    return new Promise((resolve: any): any => {
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                password: password,
                returnSecureToken: true
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(result => {
            if (result.ok) {
                return result.json();
            } else {
                throw new Error('Ошибка Валидации')
            }
        }).then(data => {
            return resolve(data)
        }).catch(err => console.log(err))  
    })
    
}

export default authRequest;