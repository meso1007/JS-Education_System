export default class TableCompo{
    cols=[];
    contents=[[1,2,3],[1,2,3]];
    tableID;
    tablebgColor;
    constructor(cols,contents,tableID=null,tablebgColor=null,tfootContents=null){
        this.cols = cols;
        this.contents = contents;
        this.tableID = tableID;
        this.tablebgColor = tablebgColor;
        this.tfootContents = tfootContents;
    }
    theadGen(){
        const thead = $("<thead></thead>");
        const tr = $("<tr></tr>");
        for(let col of this.cols){
            const th = $("<th scope='col'></th>");
            th.text(col);
            tr.append(th);
        }
        thead.append(tr);
        return thead;
    }
    tbodyGen(element){
        const tbody = $(`<${element}></${element}>`);
        const contents = (element == "tbody")?this.contents:this.tfootContents;
        for(let row of contents){
            const tr = $("<tr></tr>");
            for(let cell of row){
                const td = $("<td></td>");
                if(element == "tfoot"){
                    td.attr("colspan",this.cols.length/row.length);
                }
                if(typeof(cell)==="object")
                    td.append(cell);
                else
                    td.text(cell);
                tr.append(td);
            }
            tbody.append(tr);
        }
        return tbody;
    }
    tableGen(){
        const tableContainer = $("<div class='table-responsive'></div>");
        const table = $("<table class='table'>");
        table.attr("id",this.tableID);
        if(this.tablebgColor != null)
            table.addClass(`table-${this.tablebgColor}`);
        table.append(this.theadGen());
        table.append(this.tbodyGen("tbody"));
        if(this.tfootContents != null)
            table.append(this.tbodyGen("tfoot"));
        tableContainer.append(table);
        return tableContainer;
    }
}
