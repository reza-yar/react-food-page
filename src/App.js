import React from "react";
import { Login } from "./components/login_page/login_page";
import { foods_database } from "./context";
import { Main_section } from "./components/main_store/main_section/main_section";


class App extends React.PureComponent {

    constructor(props) {
        super(props)
        console.log('App => constructor');

        this.state = {

            allProducts: [
                { id: 1, name: 'سبزی پلو با ماهی', price: 130000, description: 'برنج ایرانی با 500 گرم ماهی قزل آلا', picAddress: ['pics/sbziPoloMahi_1.jpeg', 'pics/sbziPoloMahi_2.jpeg', 'pics/sbziPoloMahi_3.png'] },
                { id: 2, name: 'چلو گوشت', price: 220000, description: 'برنج ایرانی100 گرم همراه 200 گرم گوشت گوسفندی', picAddress: ['pics/choloGusht_1.jpg', 'pics/choloGusht_2.jpg', 'pics/choloGusht_3.jpg'] },
                { id: 3, name: 'خورشت قیمه', price: 90000, description: 'برنج ایرانی همراه 100گرم سیب زمینی و100گرم گوشت', picAddress: ['pics/khorestGheymeh_1.jpg', 'pics/khorestGheymeh_2.jpg', 'pics/khorestGheymeh_3.jpg'] },
                { id: 4, name: 'خورشت سبزی', price: 80000, description: 'برنج ایرانی 100گرم همراه 100گذم سبزی و 100گرم گوشت گوسفندی', picAddress: ['pics/khoreshteSabzi_1.jpg', 'pics/khoreshteSabzi_2.jpg', 'pics/khoreshteSabzi_3.jpg'] },
                { id: 5, name: 'زرشک پلو با مرغ', price: 110000, description: 'برنج ایرانی 200گرم همراه 250 گرم مرغ تازه', picAddress: ['pics/zereshkpoloMorgh_1.jpg', 'pics/zereshkpoloMorgh_2.jpg', 'pics/zereshkpoloMorgh_3.jpg'] },
                { id: 6, name: 'جوجه کباب', price: 110000, description: ' برنج ایرانی100 گرم همراه 200 گرم جوجه زعفرانی', picAddress: ['pics/jojehKabab_1.jpg', 'pics/jojehKabab_2.jpg', 'pics/jojehKabab_3.jpg'] },
                { id: 7, name: 'کباب کوبیده', price: 140000, description: 'برنج ایرانی100 گرم همراه 200 گرم گوشت گوسفندی تازه', picAddress: ['pics/koobideh_1.jpg', 'pics/koobideh_2.jpg', 'pics/koobideh_3.jpg'] },
                { id: 8, name: 'خورشت فسنجان', price: 135000, description: 'برنج ایرانی 100گرم همراه 200گرم مرغ تازه', picAddress: ['pics/fesenjan_1.jpg', 'pics/fesenjan_2.jpg', 'pics/fesenjan_3.jpg'] },
                { id: 9, name: 'مرغ شکم پر', price: 90000, description: 'برنج ایرانی 100گرم همراه 200گرم مرغ تازه و50گرم گردو', picAddress: ['pics/morghShekamPor_1.jpg', 'pics/morghShekamPor_2.jpg', 'pics/morghShekamPor_3.jpg'] },
                { id: 10, name: 'خورشت بادمجان', price: 75000, description: 'برنج ایرانی 100گرم گوشت گوسفندی 100گرم بادمجان 100گرم', picAddress: ['pics/khoreshteBademjan_1.jpg', 'pics/khoreshteBademjan_2.jpg', 'pics/khoreshteBademjan_3.jpg'] },
                { id: 11, name: 'خورشت آلو', price: 75000, description: "برنج ایرانی 100گرم گوشت گوسفندی 100گرم آلو 50گرم", picAddress: ['pics/khoreshteAloo_1.jpg', 'pics/khoreshteAloo_2.jpg', 'pics/khoreshteAloo_3.jpg'] },
                { id: 12, name: 'ماکارونی', price: 65000, description: 'ماکارونی 200گرم گوشت گوسفندی 100گرم', picAddress: ['pics/makaroni_1.jpg', 'pics/makaroni_2.jpg', 'pics/makaroni_3.jpg'] },
                { id: 13, name: 'کباب سلطانی', price: 160000, description: 'برنج ایرانی 100کرم گوشت گوسفندی 250گرم', picAddress: ['pics/soltani_1.jpg', 'pics/soltani_2.jpg', 'pics/soltani_3.jpg'] },
                { id: 14, name: 'کباب برگ', price: 155000, description: 'برنج ایرانی 100کرم گوشت گوسفندی 250گرم', picAddress: ['pics/barg-1.jpg', 'pics/barg-2.jpg', 'pics/barg-3.jpg'] },
                { id: 15, name: 'برنج', price: 40000, description: 'برنج ایرانی 150 گرم', picAddress: ['pics/berenj_1.jpg', 'pics/berenj_2.jpg', 'pics/berenj_3.jpg'] },

            ],
            comments: [
                { id: 1, username_comment: [['reza', 'خیلی عالی بود'], ['farhad', 'بد نبود']] },
                { id: 2, username_comment: [['mina', 'کیفیتش خوب بود'], ['saeed', 'گوشتش اصلا نپخته بود'], ['dariush', 'ok']] },
                { id: 3, username_comment: [['hamid', 'واقعا خوشمزه بود'], ['arman', 'خوشم اومد']] },
                { id: 4, username_comment: [['reza', 'خیلی عالی بود'], ['farhad', 'بد نبود']] },
                { id: 5, username_comment: [['mina', 'کیفیتش خوب بود'], ['saeed', 'گوشتش اصلا نپخته بود'], ['dariush', 'ok']] },
                { id: 6, username_comment: [['hamid', 'واقعا خوشمزه بود'], ['arman', 'خوشم اومد']] },
                { id: 7, username_comment: [['reza', 'خیلی عالی بود'], ['farhad', 'بد نبود']] },
                { id: 8, username_comment: [['mina', 'کیفیتش خوب بود'], ['saeed', 'گوشتش اصلا نپخته بود'], ['dariush', 'ok']] },
                { id: 9, username_comment: [['hamid', 'واقعا خوشمزه بود'], ['arman', 'خوشم اومد']] },
                { id: 10, username_comment: [['reza', 'خیلی عالی بود'], ['farhad', 'بد نبود']] },
                { id: 11, username_comment: [['mina', 'کیفیتش خوب بود'], ['saeed', 'گوشتش اصلا نپخته بود'], ['dariush', 'ok']] },
                { id: 12, username_comment: [['hamid', 'واقعا خوشمزه بود'], ['arman', 'خوشم اومد']] },
                { id: 13, username_comment: [['reza', 'خیلی عالی بود'], ['farhad', 'بد نبود']] },
                { id: 14, username_comment: [['mina', 'کیفیتش خوب بود'], ['saeed', 'گوشتش اصلا نپخته بود'], ['dariush', 'ok']] },
                { id: 15, username_comment: [['hamid', 'واقعا خوشمزه بود'], ['arman', 'خوشم اومد']] }
            ],
            cart_array: [

            ],
            login_status: false,
            users: [
                { id: 0, name: 'oo', family: 'oo', username: 'o', password: '9' },
                { id: 1, name: 'hamid', family: 'shams', username: 'shams123', password: '1212' },
                { id: 2, name: 'reza', family: 'yarahmadi', username: 'rezayar', password: '4532' },
                { id: 3, name: 'mina', family: 'tehrani', username: 'minateh', password: '6789' },
                { id: 4, name: 'farhad', family: 'zafar', username: 'frza', password: '1q2w' }
            ],
            logined_User: null,
            favList: []

        }

    }

    isLogin_func({ username, password }, event) {
        event.preventDefault();

        let isLogin = this.state.users.some((a, index) => a.username == username && a.password == password);

        let whichUserLogined = null;

        if (isLogin) {
            whichUserLogined = this.state.users.find(a => a.username == username && a.password == password);
            this.setState({ logined_User: whichUserLogined })
        }

        isLogin ?
            (
                this.setState({ login_status: true })
            )
            :
            this.setState({ login_status: false });

    }

    addTo_cart(obj) {


        let is_in_cart = this.state.cart_array.findIndex(a => a.id == obj.id);

        let lastcartArray = this.state.cart_array;
        let newcartArray = []
        if (is_in_cart == -1) {
            this.setState({ cart_array: [...this.state.cart_array, obj] })
        } else {
            lastcartArray[is_in_cart] = obj;
            newcartArray = [...lastcartArray]
            console.log(newcartArray);
            this.setState({ cart_array: newcartArray })
        }

    }

    cart_array_delete_items(ID) {
        console.log(ID, 'delete');
        let oldCartArray = this.state.cart_array;
        let newCartArray = [];
        let which_food_willbe_deleted = oldCartArray.findIndex(a => a.id == ID);
        oldCartArray.splice(which_food_willbe_deleted, 1)
        newCartArray = [...oldCartArray];
        console.log(newCartArray);

        this.setState({ cart_array: newCartArray })
    }

    addto_favList(obj) {

        this.setState({ favList: [...this.state.favList, obj] })
    }
    delete_favItem(ID) {
        let old_favList = this.state.favList;
        let new_favList = []
        let which_food_willbe_deleted = old_favList.findIndex(a => a.id == ID);
        old_favList.splice(which_food_willbe_deleted, 1);
        new_favList = [...old_favList];
        this.setState({ favList: new_favList })
    }

    change_personal_info(){
        
    }

    render() {

        let loginComp = <Login loginFunc={this.isLogin_func.bind(this)}></Login>;

        let storeComp =
            <div className="mainStore_container">
                <Main_section
                    addtoCart={this.addTo_cart.bind(this)}
                    deleteCartItem={this.cart_array_delete_items.bind(this)}
                    addtoFav={this.addto_favList.bind(this)}
                    deleteFavItem={this.delete_favItem.bind(this)}
                    changePersonelInfo={this.change_personal_info.bind(this)}
                >

                </Main_section>
            </div >

        return (

            <foods_database.Provider value={this.state}>
                {this.state.login_status == true ? storeComp : loginComp}
            </foods_database.Provider>

        )
    }



}

export { App }