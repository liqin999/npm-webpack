// 定义一个类并导出
 export class Person{
	constructor(x,y){//构造函数
		this.x = x;
		this.y = y;
	}
	toString(){
		return (this.x+"的年龄是"+this.y)
	}
}
