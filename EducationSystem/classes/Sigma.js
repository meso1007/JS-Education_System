export default class Sigma{
    constructor(baseUrl){
        this.baseUrl = baseUrl;
        this.xmlHttp = new XMLHttpRequest();
    }
    request(method,pathName,successCode=200,data=null){
        const requestPromise = new Promise((res,rej)=>{
            this.xmlHttp.onload = ()=>{
                if(this.xmlHttp.status == successCode){
                    res(this.xmlHttp.responseText);
                }else{
                    rej({code:this.xmlHttp.status,errMsg:this.xmlHttp.statusText});
                }
            }
            this.xmlHttp.open(method,`${this.baseUrl}/${pathName}`);
            if(data==null)
                this.xmlHttp.send();
            else
                this.xmlHttp.send(data);
        });
        return requestPromise;
    }
}


