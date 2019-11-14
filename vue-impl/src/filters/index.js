/**
 * 手机号格式化
 * @param {String} phone
 */
const formatPhone = (phone) => {
    phone = phone.toString();
    return phone.substr(0, 3) + '****' + phone.substr(7, 11);
};

export default {
    formatPhone
}