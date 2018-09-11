import {StackNavigator} from 'react-navigation';

import abc from './components/Chat';


const Router = StackNavigator({

    Chat:{
        screen:abc,
        navigationOptions:{
            header:false
        }
    }

})

export default Router;