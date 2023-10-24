import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
function DashboardScreen({navigation}){
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Welcome to the Dashboard</Text>
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}
            onPress={() => navigation.navigate('VirtualClass')}
          >
            <Icon name="graduation-cap" size={20} color="black" />
            <Text style={{ marginLeft: 10 }}>Virtual Class</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}
            onPress={() => navigation.navigate('Exam')}
          >
            <Icon name="file-text" size={20} color="black" />
            <Text style={{ marginLeft: 10 }}>Exam</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}
            onPress={() => navigation.navigate('Assignment')}
          >
            <Icon name="pencil" size={20} color="black" />
            <Text style={{ marginLeft: 10 }}>Assignment</Text>
          </TouchableOpacity>
        </View>
      );
}


export default DashboardScreen