import React,{ Component } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Parents from './components/Parents'
let idInterval = -1;

class App extends Component<{},{text: string,isAlive : boolean,date : Date, time : number}> {
  constructor(props: {}){
    super(props)
    this.state = {
      text: 'nguyen van A',
      isAlive : true,
      date : new Date(),
      time : 100
    }
  }
  //  setTimeout : sau 1 thời gian nhất thực hiện hàm chỉ định
  //  didmount là lần render đầu tiên 
  //  didUpdate 

  componentDidMount(): void {
      // chạy 1 lần

    // kích hoạt will update sau 1s;
    setTimeout(() => {
      this.setState({...this.state,date : new Date()})
    },1000)
   
 }
  componentDidUpdate(nextProps: Readonly<{}>, nextState: Readonly<{ text: string; isAlive: boolean; date: Date,time : number }>, nextContext: any): void {
    // chạy mỗi lần state thay đổi 
    // setTimeout(() => {
    //   this.setState({...this.state,date : new Date()})
    // },1000)
    // kiem tra xem time da về 0 hay chưa
    if(idInterval != -1 && this.state.time == 0){
      // dừng interrval 
      clearInterval(idInterval);

      let audio = new Audio("src/assets/sample-3s.mp3");
      if(audio){
        audio.play();
      }
    }
  
  }
  // componentDidMount(): void {
  //   setInterval(() => {
  //     // chyaj mãi mãi
  //     this.setState({...this.state,date : new Date()})
  //   }, 1000)
  // }

  start = ()=>{
    clearInterval(idInterval) // xóa interval cũ 
   if(this.state.time > 0){
    idInterval = setInterval(() => {
      // giảm time xuong 1 dơn vị
      this.setState({
        ...this.state,
        time : this.state.time - 1
      })
    },1000)
   }else{
    alert ("nhap vao gia trị time > 0")
   }
  }
  pause = ()=>{
    // xóa interrval
      clearInterval(idInterval)
  }
  reset = ()=>{
    clearInterval(idInterval),
    this.setState({
     ...this.state,
      time : 100
    })
  }


  render() {
    return (
      <>
        {/* <p>{this.state.date.toLocaleTimeString("en-US")}</p> */}
        {/* components Parents mounting */}
        {/* {this.state.isAlive && <Parents name={this.state.text} />}
        <button onClick={()=> this.setState({...this.state,isAlive :false})}> Xóa Parents </button>
        <p>{this.state.text}</p>
        <button onClick={()=> this.setState({...this.state,text : "nguyen van B"})}>Change text</button> */}

          <input type="number" placeholder='enter time'  value={this.state.time} onChange={(e)=>this.setState({...this.state,time : +e.target.value})}/> <br />
          <p>Thời gian đếm ngược : {this.state.time} s</p>
          <button onClick={this.start}>Bắt đầu</button>
          <button onClick={this.pause}>Tạm dừng</button>
          <button onClick={this.reset}>Reset</button>

        {/*  BT luyện tập : Đồng hồ hiện thị thời gian */}
        {/*  BT luyện tập : Đồng hồ bấm giờ  */}


      </>
    )
  }

}

export default App
