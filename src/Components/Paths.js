import React, { Component } from 'react';
import FirstPath from './FirstPath';
import EvenPath from './EvenPath';
import OddPath from './OddPath';
import $ from "jquery"



class Paths extends Component {
    constructor() {

        super()
        this.state={
            courseName:"",
            imgUrl:"",
            courseDuration:"",
            courseDetatils:"",
            preReq:"",
            price:"",
            data:[],
            show:false

        }
    }


    addData=()=>{
        var data={
            name:this.state.courseName,
            img:this.state.imgUrl,
            courseDuration:this.state.courseDuration,
            courseDetatils:this.state.courseDetatils,
            price:this.state.price,
            preReq:this.state.preReq

        }

        this.setState(state => ({
            data: [...state.data, data]
        }));

}

courseName=(e)=>{
    this.setState({
        courseName:e.target.value
    })
    
}
courseDuration=(e)=>{
    this.setState({
        courseDuration:e.target.value
    })
    
}
courseDetatils=(e)=>{
    this.setState({
        courseDetatils:e.target.value
    })
    
}
price=(e)=>{
    this.setState({
        price:e.target.value
    })
    
}
preReq=(e)=>{
    this.setState({
        preReq:e.target.value
    })
    
}
img=(e)=>{
    this.setState({
        imgUrl:e.target.value
    })
    
}
show=()=>{
    this.setState({
        show:true
    })
}

    render() {
console.log(this.state)
console.log(this.state.data)

        return (
            this.state.show?
            <div className="block">
            <div className="title-header"><h2>Learining Path</h2></div>
            <div className="row">
                <div className="col-lg-4">
                   
                    <div className="row add-container">
                    <div className="col-lg-5"><span>Course Name</span>
                    </div>
                    <div className="col-lg-7"><span><input onChange={this.courseName} id="courseName" /></span>

                    </div>
    
                        </div>
                        <div className="row add-container">
                    <div className="col-lg-5"><span>Course Details</span>
                    </div>
                    <div className="col-lg-7"><span><input onChange={this.courseDetatils} /></span>

                    </div>
                    
              
        

                        </div>
                        <div className="row add-container">
                    <div className="col-lg-5"><span>Course Duration</span>
                    </div>
                    <div className="col-lg-7"><span><input onChange={this.courseDuration}/></span>

                    </div>
                    
              
        

                        </div>

                        <div className="row add-container">
                    <div className="col-lg-5"><span>Pre-Req</span>
                    </div>
                    <div className="col-lg-7"><span><input onChange={this.preReq} /></span>

                    </div>
                    
              
        

                        </div>
                        <div className="row add-container">
                    <div className="col-lg-5"><span>Price</span>
                    </div>
                    <div className="col-lg-7"><span><input onChange={this.price} /></span>

                    </div>
                    
              
        

                        </div>
            
                        <div className="row add-button">
                   

                        <button onClick={this.addData}>Add</button>
                        
                        </div>
                </div>
                <div className="col-lg-8">
                    <div class="container-fluid blue-bg">
                        <div class="container">
                          
                            
                          
                            {this.state.data.map((data , i)=>{
                              
                               if (i===0){
                                return    <FirstPath  data={data} key={i}/>

                               }
                               if(i%2!==0){
                                return    <EvenPath  data={data} key={i}/>

                               }

                               if(i%2===0){
                                return    <OddPath  data={data} key={i}/>

                               }
                            

                            })}

                        </div>
                    </div>
                </div>
            </div>
            </div>:<div className="startButton"><button onClick={this.show}>start</button></div>
        );

    }
}
export default Paths;
