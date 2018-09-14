import {StackNavigator} from 'react-navigation';

import Chat from './components/Chat';

import Login from './components/Login';

const Router = StackNavigator({

    Login:{
        screen:Login,
        navigationOptions:{
            header:false
        }
    },

    Chat:{
        screen:Chat,
        navigationOptions:{
            header:false
        }
    }

})

export default Router;