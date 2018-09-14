import 'es6-symbol/implement';
//import liraries
import React, { Component } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { FormLabel, FormInput, Header, Button } from 'react-native-elements'
import { connect } from 'react-redux';

// create a component
export default class Login extends Component {

    constructor() {
        super();
        this.state = {
            randomStr: 'randomStr',
            avatar: '',
            disabled: true,
            btnCreateKey:false,
            btnGetEndpoint:true,
            btnConnectServer:true,
        }
    }

    onRandomStrChanged(randomStr) {
        if (randomStr && randomStr.length > 3) {
            this.setState({
                disabled: false,
                randomStr: randomStr,
            });
        } else {
            this.setState({
                disabled: true
            });
        }
    }

//nhan ve props tu store
    componentWillReceiveProps(nextProps) {
        if (nextProps.user) {
            this.props.navigation.navigate('Chat');
        }
    }

    onCreateKeyPressed() {

        const { randomStr } = this.state;

        this.setState({
            btnCreateKey:false,
            btnGetEndpoint:true
        })
        //this.props.navigation.navigate('Chat');
        //this.props.login({ username, avatar });
    }

    showBtnOrSpinner() {
       // if (this.props.loading) return <ActivityIndicator />;
        return (
            <Button
                title='Create Key'
                backgroundColor='#2195f3'
                disabled={this.state.disabled}
                onPress={this.onCreateKeyPressed.bind(this)}
            />
        );
    }

    onGetEndpointPressed(){
        this.setState({
            btnGetEndpoint:true
        })
    }

    btnGetEndpoint(){
        return (
            <Button
                title='Get Endpoint'
                backgroundColor='#2195f3'
                disabled={this.state.btnGetEndpoint}
                // onPress={this.onGetEndpointPressed.bind(this)}
            />
        );
    }

    onConnectServerPressed(){
       this.props.navigation.navigate('Chat');
    }
    btnConnectServer(){
        return (
            <Button
                title='Connect Endpoint'
                backgroundColor='#2195f3'
                disabled={this.state.btnGetEndpoint}
                 onPress={this.onConnectServerPressed.bind(this)}
            />
        );
    }
    render() {
        return (
            <View style={styles.container}>
                <Header
                    centerComponent={{ text: 'Login', style: { color: '#fff', fontSize:20 } }}
                />
                <FormLabel >Create Key Pairs</FormLabel>
                <FormInput 
                    placeholder='type random String'
                    onChangeText={(randomStr) => this.onRandomStrChanged(randomStr)}
                />

                {/* <FormLabel>Chat Avatar</FormLabel>
                <FormInput
                    placeholder='Leave it blank for default'
                    onChangeText={avatar => this.setState({ avatar })}
                /> */}

                <View style={styles.btnContainer}>
                    {this.showBtnOrSpinner()}
                </View>
                
                
                <View style={styles.btnContainer}>
                    {this.btnGetEndpoint()}
                </View>
                

                <View style={styles.btnContainer}>
                    {this.btnConnectServer()}
                </View>

            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    btnContainer: {
        marginTop: 20
    }
});

// const mapStateToProps = state => {
//     return {
//         error: state.auth.error,
//         loading: state.auth.loading,
//         user: state.auth.user,
//     };
// }
// export default connect(mapStateToProps, { login  })(Login);