/**
 * Created by Administrator on 2017/5/15.
 */
export class CreatHtml {
    _str = "";
    getHtml(data): string  {
        this._str = "<table  cellspacing='0' cellpadding='0'class='tableClass' >";
        this._str += "<tr class='trHead'></tr>";
        for(let i=0; i<data.length;i++){
            this._str += "<tr>";
            // console.log(data[i]+"ok");
            for(let j=0; j<data[i].length;j++){
                this._str += "<td>";
                this._str += data[i][j];
                this._str += "</td>";
                // console.log(data[i][j]+"ok")
            }
            this._str += "</tr>";
        }
        this._str += "</table>";
        return this._str;
    }
    styleString = {
        borderCL : '#cccccc',
        BgCL : '#f2f2f2',
        TextCL : "#bbbbbb",
        firstTextCL : "#ffffff",
        firstTrBg : '#abd6ce',
        firstBdCL : '#abd6ce',
        lineHNum : 30,
        firstlineHNum : 35,
        lineWNum : 120,
        borderNum : 1
    };
    getCss(d):string{
        this._str = ".tableClass { " +
                    "border-collapse:collapse;"+
                    "} ";
        this._str += ".tableClass td{ " +
                "text-align: center;"+
                "width:"+d.lineWNum +"px; "+
                "height:"+d.lineHNum +"px; "+
                "border:"+d.borderNum+"px solid;"+
                "border-color:"+d.borderCL+"; "+
                "background-color:"+d.BgCL+"; "+
                "color:"+d.TextCL + "; "+
                "} ";
        this._str += ".trHead td{"+
                "color:"+d.firstTextCL+"; "+
                "border-color:"+d.firstBdCL+"; "+
                "background-color:"+d.firstTrBg+"; "+
                "height:"+d.firstlineHNum +"px; "+
                "} ";
        return this._str;
    }

}

