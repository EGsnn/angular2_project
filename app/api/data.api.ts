/**
 * Created by Administrator on 2017/4/25.
 */
import { InMemoryDbService } from 'angular2-in-memory-web-api';

export class listData implements InMemoryDbService {
    createDb() {
        let names = [
            {
                id:"market_centre",
                name:"市场中心"
            },{
                id:"zg_centre",
                name:"综管中心"
            },{
                id:"product_centre",
                name:"产品中心"
            },{
                id:"mt_centre",
                name:"媒体中心"
            },{
                id:"IT_centre",
                name:"IT中心"
            },{
                id:"CG_centre",
                name:"采购部"
            }
        ];
        let market_centre = {
            title:"市场中心",
            data:[{
                    id:1,
                    title:"市场中心2",
                    date:"2017/04/27",
                    text:"市场中心",
                    url:"api/textData"
                },{
                    id:2,
                    title:"市场中心1",
                    date:"2017/03/27",
                    text:"市场中心",
                    url:"api/textData"
                }]
        };
        let zg_centre = {
            title:"综管中心",
            data:[{
                    id:1,
                    title:"综管中心",
                    date:"2017/04/27",
                    text:"综管中心",
                    url:"api/textData"
                },{
                    id:2,
                    title:"综管中心1",
                    date:"2017/03/27",
                    text:"综管中心1",
                    url:"api/textData"
                }]
        };
        let product_centre = {
            title:"产品中心",
            data:[{
                id:1,
                title:"产品中心",
                date:"2017/04/27",
                text:"产品中心",
                url:"api/textData"
            },{
                id:2,
                title:"产品中心",
                date:"2017/03/27",
                text:"产品中心",
                url:"api/textData"
            }]
        };
        let mt_centre = {
            title:"媒体中心",
            data:[{
                id:1,
                title:"媒体中心",
                date:"2017/04/27",
                text:"媒体中心",
                url:"api/textData"
            },{
                id:2,
                title:"媒体中心",
                date:"2017/03/27",
                text:"媒体中心",
                url:"api/textData"
            }]
        };
        let IT_centre = {
            title:"IT中心",
            data:[{
                id:1,
                title:"IT中心",
                date:"2017/04/27",
                text:"IT中心",
                url:"api/textData"
            },{
                id:2,
                title:"IT中心",
                date:"2017/03/27",
                text:"IT中心",
                url:"api/textData"
            }]
        };
        let CG_centre = {
            title:"采购部",
            data:[{
                id:1,
                title:"采购部",
                date:"2017/04/27",
                text:"采购部",
                url:"api/textData"
            },{
                id:2,
                title:"采购部",
                date:"2017/03/27",
                text:"采购部",
                url:"api/textData"
            }]
        };


        let textData = {
            c:"market_centre",
            d:"市场中心",
            title:"测试数据",
            text:"因为数据太多，所以就一个代替全部！",
            date:"2017/04/23",
            img:["ada.jsg","ada.jpg"]
        };

        let News = [{
                title:"新闻动态",
                id:11,
                data:[{
                    id:1,
                    name:"动态弹框",
                    date:"2017/04/27",
                    url:"api/textData"
                },{
                    id:2,
                    name:"animation list",
                    date:"2017/03/27",
                    url:"api/textData"
                },{
                    id:3,
                    name:"列表3",
                    date:"2017/03/27",
                    url:"api/textData"
                }]
            }, {
                title:"文件发布",
                id:12,
                data:[{
                    id:1,
                    name:"列表一",
                    date:"2017/04/27",
                    url:"api/textData"
                },{
                    id:2,
                    name:"列表2",
                    date:"2017/03/27",
                    url:"api/textData"
                },{
                    id:3,
                    name:"列表3",
                    date:"2017/03/27",
                    url:"api/textData"
                }]
            },{
                title:"最新通知",
                id:13,
                data:[{
                    id:1,
                    name:"列表一",
                    date:"2017/04/27",
                    url:"api/textData"
                },{
                    id:2,
                    name:"列表2",
                    date:"2017/03/27",
                    url:"api/textData"
                },{
                    id:3,
                    name:"列表3",
                    date:"2017/03/27",
                    url:"api/textData"
                }]
            }];

        return {names,market_centre,zg_centre,product_centre,mt_centre,IT_centre,CG_centre ,textData,News};
    }

}
