function zh_now1() {
    var date = new Date(); //日期对象
    var now = "";
    now = date.getFullYear() + "年"; //读英文就行了
    now = now + (date.getMonth() + 1) + "月"; //取月的时候取的是当前月-1如果想取当前月+1就可以了
    now = now + date.getDate() + "日 ";
    now = now + date.getHours() + ":";
    now = now + date.getMinutes() + ":";
    now = now + date.getSeconds()+ "";
    return now ;
}

function zh_now(){
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth()+ 1;
    var day = date.getDate();
    var hour = date.getHours()<10?"0"+date.getHours():date.getHours();
    var min = date.getMinutes()<10?"0"+date.getMinutes():date.getMinutes();
    var sec = date.getSeconds()<10?"0"+date.getSeconds():date.getSeconds();

    var timeStr = year +"年"+
                  month+"月"+
                  day+"日"+
                  hour+"时"+
                  min+"分"+
                  sec+"秒";
    return timeStr ;
}