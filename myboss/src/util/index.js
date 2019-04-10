import  axios from  "axios";
const env=process.env.NODE_ENV;

//let baseURL=env=="development" ? "/api" : "";
let instance=axios.create({
  baseURL:"/api",
  timeout:1500
});
let xhr={
     get(url,data,config)
     {
       return new Promise((resolve,reject)=>{
         instance.get(url,{params:data}).then(res=>{
           resolve(res.data);
         }).catch(err=>{
           reject(err);
         })
       })
     },
     myFetch(method,url,data,config)
     {
       return new Promise((resolve,reject)=>{
         instance[method](url,data).then(res=>{
           resolve(res.data);
         }).catch(err=>{
           reject(err);
         })
       })
     },
     post(url,data,config){
       return this.myFetch("post",url,data,config);
     }
}

export  default  xhr;
