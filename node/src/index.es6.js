
var qiniu = require("qiniu");
var accessKey = 'bdl_hs4XR0WdgI2ycz1GKp_PR3-6yN_khoRd23Tr'; //可在个人中心=》秘钥管理查看
var secretKey = '6O64RxL2bjTT6cS35EUL47LXHkFnnAEkJ5_ltnBm'; //可在个人中心=》秘钥管理查看
//var bucket = "test";  //存储空间名称
var config = new qiniu.conf.Config();
var mac = '';
var getToken = function (params) {
	/*params={
		PutPolicy:{scope: "test"},//配置qiniu.rs.PutPolicy
		mac:{
			Ak,
			SK	
		},
		zone:'qiniu.zone.Zone_z0';
	}*/
	var PutPolicy = {};
	if (!!params && !!params.PutPolicy) PutPolicy = params.PutPolicy;
	var AK = (params.mac && params.mac.AK) || accessKey,
		SK = (params.mac && params.mac.SK) || secretKey;
	mac = new qiniu.auth.digest.Mac(AK, SK);
	return new qiniu.rs.PutPolicy(PutPolicy).uploadToken(mac);
}

var getHref = function ({ domain, key, zone }) {
	config.zone = zone || 'qiniu.zone.Zone_z0';

	var bucketManager = new qiniu.rs.BucketManager(mac, config);
	// 公开空间访问链接
	return bucketManager.publicDownloadUrl(domain, key);
}

export default {
	getToken: getToken,
	getHref: getHref
};
