# 七牛云获取taken

## 全局引用`./node/dest/bundle.index.js`
```
window.NodeQiniu={
	getToken:function({
	  PutPolicy:{scope: "test"},//配置qiniu.rs.PutPolicy
	  mac:{
		AK,
		SK	
	  }
	}),
	getHref:function(){
	   {domain,key}
	}
}
<script src='./test/bundle.index.js'></script>
```

## import 导出`./node/dest/bundle.module.js`
window.NodeQiniu={
	getToken:function({
	  PutPolicy:{scope: "test"},//配置qiniu.rs.PutPolicy
	  mac:{
		AK,
		SK	
	  }
	}),
	getHref:function(){
	   {domain,key}
	}
}
```
import NodeQiniu from `./test/bundle.module`

let NodeQiniu={
	getToken:function({
	  PutPolicy:{scope: "test"},//配置qiniu.rs.PutPolicy
	  mac:{
		AK,
		SK	
	  }
	}),
	getHref:function(){
	   {domain,key}
	}
}
```

### 直接调用getToken()返回出token
