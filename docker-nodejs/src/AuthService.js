global.fetch = require('node-fetch')
const AmazonCognitoIdentity = require('amazon-cognito-identity-js')

const poolData = {
    UserPoolId: 'us-west-2_Pok4JeuHc',//メモ帳にコピーした,UserPoolI
    ClientId: '1o5mh0i7726qj6sfv60mj9u7v8'//メモ帳にコピーしたアプリクライアントId
}

const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

exports.Register = (body, callback) => {
    console.log(body);
    const name = body.name;
    console.log(body.name);
    const email= body.email;
    console.log(body.phone_number);
    const password = body.password;
    console.log(body.password);
    const attributeList = [];

    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({
        Name: 'email',
        Value: email
    }))

    userPool.signUp(name, password, attributeList, null, (err, result) => {
        if (err) callback(err);
        console.log(err);
        callback(null, result.user)
    })
}

exports.Activate = (body, callback) => {
    const name = body.name;
    const activateKey = body.key;
    const userData = {
        Username: name,
        Pool: userPool
    }

    const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
    cognitoUser.confirmRegistration(activateKey, true, (err, result) => {
        if(err) callback(err);
        callback(null, result)
    })
}

exports.Login = (body, callback) => {
    const name = body.name;
    const password = body.password;
    const authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails({
        Username: name,
        Password: password
    })
    const userData = {
        Username: name,
        Pool: userPool
    }

    const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: result => {
            const accessToken = result.getAccessToken().getJwtToken()
            console.log(accessToken);
            callback(null, accessToken)
        },
        onFailure: err => {
            callback(err)
        },
        mfaRequired: function (codeDeliveryDetails) {
            var verificationCode = prompt('Please input verification code', '');
            cognitoUser.sendMFACode(verificationCode, this);
        }
    })
}