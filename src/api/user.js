import request from '@/utils/request'

export function otpLogin(data) {
    return request({
        url: '/auth/otp',
        method: 'post',
        data
    })
}

export function checkOtp(data) {
    return request({
        url: '/auth/check-otp',
        method: 'post',
        data
    })
}

export function checkToken(data) {
    return request({
        url: '/auth/check-token',
        method: 'post',
        data
    })
}
