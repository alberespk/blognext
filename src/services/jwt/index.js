import { SignJWT, jwtVerify } from 'jose';

export async function sign(payload, secret, expiration) {
    const iat = Math.floor(Date.now() / 1000);

    return new SignJWT({ payload })
        .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
        .setExpirationTime(expiration)
        .setIssuedAt(iat)
        .setNotBefore(iat)
        .sign(new TextEncoder().encode(secret));
}

export async function verify(token, secret) {
    try{
        const { payload } = await jwtVerify(token, new TextEncoder().encode(secret));

        return payload;
    } catch(e) {
        console.log(e)
    }
}