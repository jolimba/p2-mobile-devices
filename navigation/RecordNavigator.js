import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import DetailRecordScreen from '../screens/DetailRecordScreen'
import NewRecordScreen from '../screens/NewRecordScreen'
import RecordListScreen from '../screens/RecordListScreen'
import Colors from '../constants/Colors'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import MenuButton from '../components/MenuButton'

const Stack = createNativeStackNavigator()

const container = (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName="RecordList"
            screenOptions={{
                headerStyle:{backgroundColor: Colors.primary},
                headerTintColor: 'white'
            }}
        >
            <Stack.Screen name="NewRecord" component={NewRecordScreen}/>
            <Stack.Screen
                name="RecordList"
                component={RecordListScreen}
                options={(props) => ({
                    headerRight: () => (
                        <HeaderButtons
                            HeaderButtonComponent={MenuButton}>
                            <Item 
                                title="Add"
                                iconName="md-add"
                                onPress={() => {
                                    props.navigation.navigate('NewRecord')
                                }}
                            />
                        </HeaderButtons>
                    )
                })}
            />
            <Stack.Screen
                name="DetailRecord"
                component={DetailRecordScreen}
                options={(props) => ({
                    headerTitle: props.route.nameRecord
                })}
            />
        </Stack.Navigator>
    </NavigationContainer>
)

export default container