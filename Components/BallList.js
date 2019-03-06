import React, { Component } from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Ball from './Ball'
import * as L from '../lib/Lib' //this is how you import functions


export default class BallList extends Component {

    state={
        ballNums:['','','','','',''],
        colors:['red','yellow','green','orange','purple','blue'],
    }

    getNumbers = (iter) => {
        while(iter.length !== 6){
            let newNum = Math.ceil(Math.random()*45)
            !iter.includes(newNum) && iter.push(newNum)    
            if(iter.length === 6) break;
        }
        return iter;
    }

    cutNumbers = function* (iter){
        let oneNum = []
        iter[Symbol.iterator]()
        while(iter && iter.length > 0){
            oneNum.push(iter.splice(0 , 1))
            yield oneNum[0];  
        }
    }

    batchNumbers = (iter) => {
        this.setState({
            ballNums: iter 
        })
    }  


    run = () => {
        const shuffle = setInterval(()=>{
            L.pipe(
                this.getNumbers(iter=[]),
                this.cutNumbers(iter),
                this.batchNumbers(iter)            
            )
        },100)
        setTimeout(()=>{
            clearInterval(shuffle)
        },3000)
    }


    render() {
    
        return (

        <View>
            <View className="ballList" style={styles.ballList}>
                { this.state.ballNums.map((num,i) =>  
                    <Ball key={i} 
                        className={i} 
                        style={[styles.ball, {backgroundColor:this.state.colors[i]}]} 
                        number={this.state.ballNums[i]}/>
                )}
            </View>
            <TouchableOpacity 
                style={styles.runButton} 
                onPress={this.run}>
                <Text style={styles.runButtonText}>Run</Text>
            </TouchableOpacity>
        </View>

        )

    }

}


const styles = StyleSheet.create({
    ball: {
        height:60,
        width:60, 
        borderRadius:100
    },
    ballList:{
        display:'flex',
        flexDirection:'row'
    },
    runButton: {
        marginLeft:150, 
        marginTop:20, 
        height:40, 
        width:60, 
        backgroundColor:'red'
    },
    runButtonText:{
        textAlign:'center', 
        marginTop:'10%', 
        fontSize:20, 
        fontWeight:'bold'
    }
})
