const json = '{"success":true,"message":"success","data":{"publishTime":"发布时间","operateValue":"影响力指数","fansNum":"粉丝数","interactiveNum":"互动量","likeCount":"点赞数","url":"微博链接","content":"微博内容","commentCount":"评论数","uid":"微博用户唯一id","weiboVolume":"微博数","originalPercent":"原创率","realFansNum":"真实粉丝数","nickname":"微博用户名","repostCount":"转发数","avgInteractiveNum":"平均互动量"}}';


/**解析JSON.parse
 * 思路：解析'{}'里面的内容，递归判断内容里面是否有Array/Object等需要继续的，以':'开始，','为结束是一个key/value对
 * @param {*} str 
 */
function parse(str = '') {
    if( str == '' ) {
        return '';
    }

    // console.log(str);
    let index = 0;
    let res = null;

    
    while( index < str.length ) {
        let _s = str[index];

        // console.log(index, _s);
        if( _s == ':' ) {
            let key = parseKey(str, index);
        }
        // let val = parseVal(str, index);
        // if( _s === ':' ) {
        //     value += 
        // }
        // if( str === '' ) {
        //     key += 
        // }
        index++;
    }
    function parseKey(s, i) {
        let res = '';

        let index = i;
        while( index < s.length ) {
            res += s[index];

            if( s[index] != ',' ) {
                index++;
            }else {
                break;
            }
        }

        console.log(111, index, res);
        return res;
    }
}

parse(json);