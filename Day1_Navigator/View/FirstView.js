/**
 * Created by Administrator on 16/7/22.
 */

import React, {
    Component
} from 'react';
import {
    TouchableOpacity,
    View,
    Text,
    Navigator,
    StyleSheet,
} from 'react-native';

import SecondView from './SecondView';

class FirstView extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id : 3,
        };

        this.props.route.title = '土冒';
        this.props.route.rightButton = {
            title:"upload",
            clicked:this._alertView,
        };

        this.props.route.leftButton = {
            title:"leftUpload",
            clicked:this._leftAlertView,
        };
    }

    _alertView () {
        alert('upload');
    }

    _leftAlertView () {
        alert('_leftAlertView');
    }

    _onPress() {
        const {navigator} = this.props;
        navigator.push({
            title:'第二页',
            component:SecondView,
            params : {
                id:this.state.id
            }
        });
    }
    render () {

        return (
            <TouchableOpacity onPress={this._onPress.bind(this)}>
                <Text style={styles.text}>FirstView</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    text:{
        fontSize:30,
        textAlign:'center',
        height:300,
        lineHeight:300,
        letterSpacing:5,
        textDecorationColor:'#ff0000'
    }

});

export default FirstView;