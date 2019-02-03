import React from 'react';
import { View, Text, Button } from "react-native";
import startMainTabs from '../MainTabs/startMainTabs';

export default class AuthScreen extends React.Component {
    
    loginHandler = () => {
        startMainTabs();
    }
    
    render() {
        return (
            <View>
                <Text>Auth Screen</Text>
                <Button title="login" onPress={this.loginHandler} />
            </View>
        );
    }
}