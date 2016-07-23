/**
 * Created by Administrator on 16/7/22.
 */

import React,{
    Component,
} from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableOpacity,
} from 'react-native';

import FirstView from './View/FirstView';

class NavigatorDemo extends React.Component{

    _renderScene (route, navigator) {
        let ComponentSelf = route.component;
        return(<ComponentSelf {...route.params} route={route} navigator = {navigator}/>);
    }

    _renderNavBar() {
        //创建routeMapper
        var routeMapper = {

            LeftButton(route, navigator, index, navState){
                if (index > 0){
                    return (
                        <TouchableOpacity
                            onPress={() => navigator.pop()}
                            style={styles.button}>
                            <Text style={styles.buttonText}> back </Text>
                        </TouchableOpacity>
                    );
                }else {
                    return (
                        <TouchableOpacity
                            onPress={() => route.leftButton && route.leftButton.clicked()}
                            style={styles.button}>
                            <Text style={styles.buttonText}>{route.leftButton && route.leftButton.title}</Text>
                        </TouchableOpacity>
                    );
                }
            },

            RightButton(route, navigator, index, navState){
                if (route.rightButton){//index > 0 &&
                    return (
                        <TouchableOpacity
                            onPress={() => route.rightButton && route.rightButton.clicked()}
                            style={styles.button}>
                            <Text style={styles.buttonText}> {route.rightButton && route.rightButton.title} </Text>
                        </TouchableOpacity>
                    );
                }else {
                    return null
                }
            },

            Title(route, navigator, index, navState){
                return (
                    <View style={styles.title}>
                        <Text style={styles.buttonText}>
                            {route.title}
                        </Text>
                    </View>
                );
            },
        };

        //创建NavigatonBar
        return (
            <Navigator.NavigationBar

                style={{
                    alignItems:'center',
                    backgroundColor:'#55acee',
                    shadowOffset:{
                        width:1,
                        height:0.5,
                    },
                    shadowColor:'#55acee',
                    shadowOpacity:0.8,
                }}
                routeMapper = {routeMapper}
            />
        );
    }

    render () {
        return (
            <Navigator
                initialRoute={{name:'首页', component:FirstView,title:'First'}}
                renderScene={this._renderScene}
                sceneStyle={{paddingTop: 64}}
                navigationBar={this._renderNavBar()}
            />
        );
    }
}

const styles = StyleSheet.create({
    title: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },

    button:{
        flex:1,
        width:100,
        alignItems:'center',
        justifyContent:'center'
    },

    buttonText: {
        fontSize:18,
        color:'#ffffff',
        fontWeight:'400',
        // backgroundColor:'#00ff00',
    }
});

AppRegistry.registerComponent('NavigatorDemo', () => NavigatorDemo);