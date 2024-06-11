import {CognitoUserPool} from "amazon-cognito-identity-js"


const poolData = {
    UserPoolId: "us-east-1_sOrUB66nS",
    ClientId: "3uvfaduasgbp8ujots1ka4m69p"
}

export default new CognitoUserPool(poolData);