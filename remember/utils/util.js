/** 格式化日期时间  为: yyyy/mm/dd  hh:mm:ss */
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
/** 格式化时间 */
const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
/**获取指定日期的时间戳  (不带时分秒的时间戳) */
const getTimestamp = (date = new Date)=>{
  const format = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
  return new Date(format).getTime();
}
module.exports = {
  formatTime: formatTime,
  getTimestamp
}
