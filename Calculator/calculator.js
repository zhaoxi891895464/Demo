new Vue({
    el:"#main",
    data(){
        return {
            currentValue : '0',
            operator : null,
            previous : '',
            back : ''
        }
    },
    methods:{
        //按下数字键，添加数字
        append( number ){
            if( this.currentValue === '0'){
                this.currentValue = '';
            }
                this.currentValue += number;
        },
        //归零
        clear(){
            this.currentValue = '0';
            this.operator = '';
            this.previous = '';
            this.back = '';
        },
        //修改正负号
        sign(){
            if( this.currentValue !== '' ){
            this.currentValue = this.currentValue.charAt(0) === '-' ? this.currentValue.slice(1) : `-${this.currentValue}`;}
        },
        //百分数
        percent(){
            if( this.currentValue === '' ){
                return ;
            }
            this.currentValue = parseFloat( this.currentValue ) / 100;
        },
        //删除
        del(){
            if( this.currentValue.length !== 1){
                this.currentValue = this.currentValue.slice(0,this.currentValue.length - 1);
            }else{
                this.currentValue = '0';
            }
        },
        //添加小数点
        dot(){
            if( this.currentValue.indexOf('.') === -1 ){
                this.currentValue += '.';
            }
        },
        //加法运算
        add(){
            if( this.currentValue !== ''){
            this.previous = this.currentValue;
            this.operator = '+';
            this.currentValue = '';
            }else{
                return ;
            }
        },
        //减法运算
        subtract(){
            if( this.currentValue !== ''){
            this.previous = this.currentValue;
            this.operator = '-';
            this.currentValue = '';
            }else{
                return ;
            }
        },
        //乘法法运算
        multiply(){
            if( this.currentValue !== ''){
            this.previous = this.currentValue;
            this.operator = '*';
            this.currentValue = '';
            }else{
                return ;
            }

        },
        //除法运算
        divide(){
            if( this.currentValue !== ''){
            this.previous = this.currentValue;
            this.operator = '/';
            this.currentValue = '';
            }else{
                return ;
            }
        },
        //等号运算
        equal(){
            this.back = this.currentValue;
            switch( this.operator ){
                case '+': {
                   this.previous = parseFloat(this.previous) + parseFloat(this.back);
                   this.currentValue = '';
                   this.operator = '';
                   break;
                }
                case '-': {
                    this.previous = parseFloat(this.previous) - parseFloat(this.back);
                    this.currentValue = '';
                    this.operator = '';
                    break;
                 }
                 case '*': {
                    this.previous = parseFloat(this.previous) * parseFloat(this.back);
                    this.currentValue = '';
                    this.operator = '';
                    break;
                 }
                 case '/': {
                    this.previous = parseFloat(this.previous) / parseFloat(this.back);
                    this.currentValue = '';
                    this.operator = '';
                    break;
                 }
                 case '':{
                     return ;
                 }

            }
        }
    }
})
