import React, { Component } from 'react'

export default class Parents extends Component <{name:string},{data : number}> { 

// LIFECYCLE cho phép tác động vào từng giai đoạn của vòng đời component 

// Giai đoạn 1 :  Khơi tạo (khai báo PropsType và StateType + constructor)
    constructor(props : {name : string}){
        console.log("Khởi tạo đối tượng từ lớp Parents");
        super(props); // gọi đến constructỏ của lớp cha 
        this.state = {
            data : 0
        }
    }
    // Giạ đoạn 2 : Mounting (Sử dụng component bằng cách nhũng vào App.tsx)
    // componentwillmount : chạy trước render  
    componentWillMount(): void {
        console.log("trước khi component được mount");
    }
    componentDidMount(): void {
        console.log("sau khi component được mount");
    }


    // Giai đoạn 3 : Updating (cập nhật giá trị của props hoặc states / compnent bị rerender )
    // componentWillRecieiveProps : chạy trước khi update
    componentWillReceiveProps(nextProps: Readonly<{ name: string; }>, nextContext: any): void {
        console.log("component sẽ được cập nhật khi nhận props");
        console.log("props cũ :" , this.props);
        console.log("props mới :" , nextProps);
    }
    shouldComponentUpdate(nextProps: Readonly<{ name: string; }>, nextState: Readonly<{ data: number; }>, nextContext: any): boolean {
        // sử dụng các logic để quyết định component có đc render hay ko
        // return this.props.name !== nextProps.name
        return true;
          
    }
    componentWillUpdate(nextProps: Readonly<{ name: string; }>, nextState: Readonly<{ data: number; }>, nextContext: any): void {
        // tự viết
        console.log("component sẽ đc cập nhật");
        console.log("state cũ ", this.state);
        console.log("state mỡi ", nextState);
        
        
    }
    componentDidUpdate(prevProps: Readonly<{ name: string; }>, prevState: Readonly<{ data: number; }>, snapshot?: any): void {
        // tự viết
    }

// Giại đoạn 4  : Unmounting (component bị xóa khỏi DOM)
    componentWillUnmount(): void {
        // trước khi bị xóa khỏi dom 
        // thường dùng để dọn dẹp rác
        console.log("components sắp bị xóa ");
    }
  render() {
    console.log("Component Parents render hoặc rerender");
    
    return (
      <div>
        <p>{this.state.data}</p>
        <button onClick={()=>this.setState({data: this.state.data+10})}>CHang data</button>
      </div>
    )
  }
}
