const AUTH_URL = "/api/usercenter/login";
const BASE_RECRUIT_GLANCE = "/api/recuit/wx/v001";
const BASE_RECRUIT_FUC = BASE_RECRUIT_GLANCE + "/patient";

const api = {
  // 核心业务模块
  core: {},
  auth: {
    //鉴权
    login: AUTH_URL, //登录
    authCode: AUTH_URL + "/send_code", //发送验证码
    refreshCode: AUTH_URL + "/refresh_code" //获取防刷验证码
  },
  //个人中心
  mine: {
    info: "/api/usercenter/userinfo/simple", //获取当前登录用户基本信息
    senceInfo: "/api/usercenter/userinfo/detail", //获取指定用户指定业务下的详细信息
    idInfo: "/api/usercenter/userinfo/getbyid", //根据用户信息的id获取用户信息
    updateInfo: "/api/usercenter/userinfo/save" //新增或修改指定业务下的用户信息 返回用户信息id
  },
  // 公共服务
  common: {
    region: "/master-data/api/region/list", //区域列表 省市区
    upload: "/api/prescription-project/v1/storage/create" // 文件上传
  }
};

export default api;
