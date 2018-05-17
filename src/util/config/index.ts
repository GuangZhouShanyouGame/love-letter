
const getUrlArgStr = (str) => {
  let result = '';
  const queryFormat = location.search.substr(1).split('&');
  queryFormat.map((v) => {
    const formatData = v.split('=');
    if(formatData[0] === str) {
      result = formatData[1]
      return false;
    }
  });
  return result;
}

const conFig = {
  host: 'http://24haowan-cdn.shanyougame.com/dingzhi/love-letter/index.html?cid=' + getUrlArgStr('cid'),
  wxappid: 'wx9887c57cda0c0049'
}

export default conFig
