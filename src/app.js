import Taro, { Component } from "@tarojs/taro";
import "@tarojs/async-await";
import { Provider } from "@tarojs/redux";
import dva from "./dva";
import models from "./models";
import action from "./utils/action";
import Index from "./pages/index";

import "./assets/styles/global.scss";
import "./app.scss";

const dvaApp = dva.createApp({
  initialState: {},
  models,
  onError(e, dispatch) {
    dispatch(action("entire/error", e));
  }
});
const store = dvaApp.getStore();

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {
  config = {
    pages: [
      //首页
      "pages/index/index",
      //个人中心
      "pages/me/index",
      //登录
      "pages/login/index"
    ],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTitleText: "WeChat",
      navigationBarTextStyle: "black"
    }
  };

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}

Taro.render(<App />, document.getElementById("app"));
