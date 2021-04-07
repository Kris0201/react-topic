// 使用套件
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React, { useState } from 'react'

// 頁面用元件
import MainPage from './pages/MainPage/MainPage'
import MemberEdit from './pages/member/MemberEdit'
import Mpassword from './pages/member/Mpassword'
import OrderProduct from './pages/member/OrderProduct'
import OrderActive from './pages/member/OrderActive'
import OrderClass from './pages/member/OrderClass'
import Login from './pages/member/Login'
import Forget from './pages/member/Forget'
import Register from './pages/member/Register'
import FavProduct from './pages/member/FavProduct'
import FavActive from './pages/member/FavActive'
import Cart from './pages/cart/Cart'
import MainProduct from './pages/mainProduct/MainProduct'
import MainProductDetail from './pages/mainProduct/MainProductDetail'
import NotFoundPage from './pages/NotFoundPage'
import CampaignIndex from './pages/campaign/CampaignIndex'
import CampaignProducts from './pages/campaign/CampaignProducts'
import CampaignProductInfo from './pages/campaign/CampaignProductInfo'
import StudioOrder from './pages/StudioRent/StudioOrder'
import StudioIntro1 from './pages/StudioRent/StudioIntro1'
import StudioIntro2 from './pages/StudioRent/StudioIntro2'
import StudioIntro3 from './pages/StudioRent/StudioIntro3'

import OrderDetail from './pages/member/OrderDetail'

import SmallCart from './pages/cart/SmallCart'

// 組合用元件

import Height from './components/Height'
import MainContent from './components/MainContent'
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import ScrollToTop from './components/ScrollToTop'

//import BreadCrumb from './components/BreadCrumb'
// 定義樣式
const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
}

// 建立樣版context也可以獨立出去一個檔案
export const ThemeContext = React.createContext(themes.light)

function App() {
  // const [login, setLogin] = useState(false)
  // const [themeNow, setThemeNow] = useState(themes.light)
  const [textInput, setTextInput] = useState([])

  const [searchCampaign, setSearchCampaign] = useState('')
  const [categoryActiveObj, setCategoryActiveObj] = useState({
    categoryBtn1: false,
    categoryBtn2: false,
    categoryBtn3: false,
    categoryBtn4: true,
  })

  // 小購物車
  const [scChange, setScChange] = useState(0)
  const [scCartTotal, setScCartTotal] = useState(0)
  const [scCartShow, setScCartShow] = useState(false)

  return (
    <Router>
      <>
        <MyNavbar
          scCartTotal={scCartTotal}
          setScCartTotal={setScCartTotal}
          scCartShow={scCartShow}
          setScCartShow={setScCartShow}
          scChange={scChange}
          setScChange={setScChange}
        />
        <SmallCart
          scChange={scChange}
          setScChange={setScChange}
          scCartShow={scCartShow}
          setScCartShow={setScCartShow}
          scCartTotal={scCartTotal}
          setScCartTotal={setScCartTotal}
        />

        <MainContent>
          <Height />
          <ScrollToTop>
            {/* 套用全站樣式 */}
            {/* <ThemeContext.Provider value={themeNow}> */}

            <Switch>
              <Route exact path="/">
                <MainPage />
              </Route>
              <Route path="/mainproduct">
                <MainProduct />
              </Route>
              <Route path="/mainproductdetail/products/:id?">
                <MainProductDetail
                  scChange={scChange}
                  setScChange={setScChange}
                />
              </Route>
              <Route path="/campaign/products/:id">
                <CampaignProductInfo
                  scChange={scChange}
                  setScChange={setScChange}
                />
              </Route>
              <Route path="/campaign/searchProducts">
                <CampaignProducts
                  searchCampaign={searchCampaign}
                  setSearchCampaign={setSearchCampaign}
                  categoryActiveObj={categoryActiveObj}
                  setCategoryActiveObj={setCategoryActiveObj}
                />
              </Route>
              <Route path="/campaign">
                <CampaignIndex
                  searchCampaign={searchCampaign}
                  setSearchCampaign={setSearchCampaign}
                  categoryActiveObj={categoryActiveObj}
                  setCategoryActiveObj={setCategoryActiveObj}
                />
              </Route>
              <Route path="/member/edit">
                <MemberEdit />
              </Route>
              <Route path="/member/editpassword">
                <Mpassword />
              </Route>
              <Route path="/member/login">
                <Login scChange={scChange} setScChange={setScChange} />
              </Route>
              <Route path="/member/forget">
                <Forget />
              </Route>
              <Route path="/member/register">
                <Register />
              </Route>
              <Route path="/member/fav-product">
                <FavProduct />
              </Route>
              <Route path="/member/fav-active">
                <FavActive />
              </Route>
              <Route path="/member/order-product">
                <OrderProduct />
              </Route>
              <Route path="/member/order-class">
                <OrderClass />
              </Route>
              <Route path="/member/order-active">
                <OrderActive />
              </Route>
              <Route path="/member/order/order-details/:sid?">
                <OrderDetail />
              </Route>
              <Route path="/cart">
                <Cart scChange={scChange} setScChange={setScChange} />
              </Route>

              <Route path="/StudioRent/StudioOrder">
                <StudioOrder
                  textInput={textInput}
                  setTextInput={setTextInput}
                />
              </Route>
              <Route path="/StudioRent/StudioIntro1">
                <StudioIntro1
                  textInput={textInput}
                  scChange={scChange}
                  setScChange={setScChange}
                />
              </Route>
              <Route path="/StudioRent/StudioIntro2">
                <StudioIntro2 textInput={textInput} />
              </Route>
              <Route path="/StudioRent/StudioIntro3">
                <StudioIntro3 textInput={textInput} />
              </Route>

              {/* <Route path="*">
                <NotFoundPage />
              </Route> */}
            </Switch>
            {/* </ThemeContext.Provider> */}
            {/* end 匹配路由表 */}
          </ScrollToTop>
        </MainContent>

        <MyFooter />
      </>
    </Router>
  )
}

export default App
